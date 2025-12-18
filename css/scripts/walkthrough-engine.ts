/**
 * Walkthrough Engine - Core functionality for step-by-step typing exercises
 * This TypeScript file demonstrates key principles used throughout the project
 */

// ============================================
// STORAGE HELPER FUNCTIONS (localStorage)
// ============================================

/**
 * Saves a value to localStorage
 */
function setStorage(name: string, value: string): void {
    try {
        localStorage.setItem(name, value);
    } catch (e) {
        console.warn('localStorage not available, progress will not persist');
    }
}

/**
 * Gets a value from localStorage
 */
function getStorage(name: string): string | null {
    try {
        return localStorage.getItem(name);
    } catch (e) {
        console.warn('localStorage not available');
        return null;
    }
}

/**
 * Removes a value from localStorage
 */
function removeStorage(name: string): void {
    try {
        localStorage.removeItem(name);
    } catch (e) {
        console.warn('localStorage not available');
    }
}

// Legacy cookie functions for backwards compatibility
function setCookie(name: string, value: string, days: number = 365): void {
    setStorage(name, value);
}

function getCookie(name: string): string | null {
    return getStorage(name);
}

function deleteCookie(name: string): void {
    removeStorage(name);
}

// ============================================
// TYPE DEFINITIONS (Interfaces & Types)
// ============================================

/** Represents a single code breakdown item explaining part of the code */
interface CodePart {
    code: string;
    explanation: string;
}

/** Represents a single step in a walkthrough exercise */
interface WalkthroughStep {
    id: number;
    title: string;
    instructionTitle: string;
    description: string;
    expectedCode: string;
    codeBreakdown: CodePart[];
    tip: string;
    hint: string;
    /** What this code outputs when run */
    output?: string;
    /** More detailed explanation of what the code does */
    detailedExplanation?: string;
}

/** Progress tracking for a walkthrough */
interface WalkthroughProgress {
    walkthroughId: string;
    currentStep: number;
    completedSteps: number[];
    startedAt: string;
    completedAt?: string;
}

/** Configuration for a walkthrough */
interface WalkthroughConfig {
    id: string;
    title: string;
    steps: WalkthroughStep[];
}

// ============================================
// WALKTHROUGH ENGINE CLASS
// ============================================

/**
 * WalkthroughEngine - Manages the interactive typing exercise experience
 */
class WalkthroughEngine {
    private config: WalkthroughConfig;
    private currentStepIndex: number = 0;
    private progress: WalkthroughProgress;
    private readonly STORAGE_KEY_PREFIX: string = 'walkthrough-progress-';

    private elements: {
        codeInput: HTMLTextAreaElement;
        feedback: HTMLElement;
        progressFill: HTMLElement;
        currentStep: HTMLElement;
        totalSteps: HTMLElement;
        stepBadge: HTMLElement;
        stepTitle: HTMLElement;
        instructionTitle: HTMLElement;
        instructionDesc: HTMLElement;
        breakdownContent: HTMLElement;
        expectedCode: HTMLElement;
        tipText: HTMLElement;
        lineNumbers: HTMLElement;
        prevBtn: HTMLButtonElement;
        nextBtn: HTMLButtonElement;
        hintBtn: HTMLButtonElement;
        completionModal: HTMLElement;
        outputSection: HTMLElement | null;
        outputContent: HTMLElement | null;
        detailedExplanation: HTMLElement | null;
    };

    constructor(config: WalkthroughConfig) {
        this.config = config;
        this.elements = this.getElements();
        this.progress = this.loadProgress();
        this.currentStepIndex = this.progress.currentStep;
        this.init();
    }

    private getElements(): typeof this.elements {
        return {
            codeInput: document.getElementById('codeInput') as HTMLTextAreaElement,
            feedback: document.getElementById('feedback') as HTMLElement,
            progressFill: document.getElementById('progressFill') as HTMLElement,
            currentStep: document.getElementById('currentStep') as HTMLElement,
            totalSteps: document.getElementById('totalSteps') as HTMLElement,
            stepBadge: document.getElementById('stepBadge') as HTMLElement,
            stepTitle: document.getElementById('stepTitle') as HTMLElement,
            instructionTitle: document.getElementById('instructionTitle') as HTMLElement,
            instructionDesc: document.getElementById('instructionDesc') as HTMLElement,
            breakdownContent: document.getElementById('breakdownContent') as HTMLElement,
            expectedCode: document.getElementById('expectedCode') as HTMLElement,
            tipText: document.getElementById('tipText') as HTMLElement,
            lineNumbers: document.getElementById('lineNumbers') as HTMLElement,
            prevBtn: document.getElementById('prevBtn') as HTMLButtonElement,
            nextBtn: document.getElementById('nextBtn') as HTMLButtonElement,
            hintBtn: document.getElementById('hintBtn') as HTMLButtonElement,
            completionModal: document.getElementById('completionModal') as HTMLElement,
            outputSection: document.getElementById('outputSection'),
            outputContent: document.getElementById('outputContent'),
            detailedExplanation: document.getElementById('detailedExplanation')
        };
    }

    private loadProgress(): WalkthroughProgress {
        const saved = getStorage(this.STORAGE_KEY_PREFIX + this.config.id);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch {
                // Invalid saved data, start fresh
            }
        }
        return {
            walkthroughId: this.config.id,
            currentStep: 0,
            completedSteps: [],
            startedAt: new Date().toISOString()
        };
    }

    private saveProgress(): void {
        setStorage(
            this.STORAGE_KEY_PREFIX + this.config.id,
            JSON.stringify(this.progress)
        );
    }

    private init(): void {
        this.elements.totalSteps.textContent = String(this.config.steps.length);
        this.setupEventListeners();
        this.renderStep();
    }

    private setupEventListeners(): void {
        this.elements.codeInput.addEventListener('input', () => this.checkCode());
        this.elements.prevBtn.addEventListener('click', () => this.prevStep());
        this.elements.nextBtn.addEventListener('click', () => this.nextStep());
        this.elements.hintBtn.addEventListener('click', () => this.showHint());
    }

    private getCurrentStep(): WalkthroughStep {
        return this.config.steps[this.currentStepIndex];
    }

    private renderStep(): void {
        const step = this.getCurrentStep();

        // Update step indicators
        this.elements.stepBadge.textContent = `Step ${step.id}`;
        this.elements.stepTitle.textContent = step.title;
        this.elements.currentStep.textContent = String(step.id);
        this.elements.instructionTitle.textContent = step.instructionTitle;
        this.elements.instructionDesc.innerHTML = `<p>${step.description}</p>`;

        // Render code breakdown
        this.elements.breakdownContent.innerHTML = step.codeBreakdown
            .map(part => `
                <div class="code-part">
                    <code>${this.escapeHtml(part.code)}</code>
                    <p>${part.explanation}</p>
                </div>
            `).join('');

        // Expected code
        this.elements.expectedCode.textContent = step.expectedCode;

        // Tip
        this.elements.tipText.textContent = step.tip;

        // Output section (if available)
        if (this.elements.outputSection && this.elements.outputContent) {
            if (step.output) {
                this.elements.outputSection.style.display = 'block';
                this.elements.outputContent.textContent = step.output;
            } else {
                this.elements.outputSection.style.display = 'none';
            }
        }

        // Detailed explanation (if available)
        if (this.elements.detailedExplanation) {
            if (step.detailedExplanation) {
                this.elements.detailedExplanation.style.display = 'block';
                this.elements.detailedExplanation.innerHTML = `
                    <h4>📚 Deep Dive</h4>
                    <p>${step.detailedExplanation}</p>
                `;
            } else {
                this.elements.detailedExplanation.style.display = 'none';
            }
        }

        // Update progress bar
        const progressPercent = (this.currentStepIndex / this.config.steps.length) * 100;
        this.elements.progressFill.style.width = `${progressPercent}%`;

        // Update navigation buttons
        this.elements.prevBtn.disabled = this.currentStepIndex === 0;
        this.elements.nextBtn.disabled = !this.progress.completedSteps.includes(step.id);

        // Update line numbers
        this.updateLineNumbers();

        // Clear input and reset feedback
        this.elements.codeInput.value = '';
        this.elements.feedback.className = 'feedback waiting';
        this.elements.feedback.textContent = '⌨️ Start typing to begin...';
        this.elements.codeInput.focus();
    }

    private updateLineNumbers(): void {
        const step = this.getCurrentStep();
        const lineCount = step.expectedCode.split('\n').length;
        this.elements.lineNumbers.textContent = Array.from(
            { length: lineCount },
            (_, i) => i + 1
        ).join('\n');
    }

    private escapeHtml(text: string): string {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    private normalizeCode(code: string): string {
        return code
            .replace(/\r\n/g, '\n')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    private checkCode(): void {
        const step = this.getCurrentStep();
        const userCode = this.elements.codeInput.value;
        const expected = step.expectedCode;

        if (userCode.length === 0) {
            this.elements.feedback.className = 'feedback waiting';
            this.elements.feedback.textContent = '⌨️ Start typing to begin...';
            return;
        }

        const normalizedUser = this.normalizeCode(userCode);
        const normalizedExpected = this.normalizeCode(expected);

        if (normalizedUser === normalizedExpected) {
            this.elements.feedback.className = 'feedback correct';
            this.elements.feedback.textContent = '✅ Perfect! Click "Next Step" to continue.';
            this.markStepComplete();
        } else if (normalizedExpected.startsWith(normalizedUser)) {
            this.elements.feedback.className = 'feedback typing';
            this.elements.feedback.textContent = '👍 Keep typing...';
        } else {
            this.elements.feedback.className = 'feedback error';
            this.elements.feedback.textContent = '❌ Check your code - something doesn\'t match.';
        }
    }

    private markStepComplete(): void {
        const step = this.getCurrentStep();
        if (!this.progress.completedSteps.includes(step.id)) {
            this.progress.completedSteps.push(step.id);
            this.saveProgress();
        }
        this.elements.nextBtn.disabled = false;
    }

    private prevStep(): void {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep();
        }
    }

    private nextStep(): void {
        if (this.currentStepIndex < this.config.steps.length - 1) {
            this.currentStepIndex++;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep();
        } else {
            this.showCompletion();
        }
    }

    private showHint(): void {
        const step = this.getCurrentStep();
        this.elements.feedback.className = 'feedback typing';
        this.elements.feedback.textContent = `💡 Hint: ${step.hint}`;
    }

    private showCompletion(): void {
        this.progress.completedAt = new Date().toISOString();
        this.saveProgress();

        if (this.elements.completionModal) {
            this.elements.completionModal.classList.add('active');
        } else {
            alert(`🎉 Congratulations! You've completed the ${this.config.title} walkthrough!`);
        }
    }
}
