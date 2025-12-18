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

    private init(): void {
        this.setupEventListeners();
        this.renderStep(this.currentStepIndex);
        this.updateProgress();
    }

    private setupEventListeners(): void {
        this.elements.codeInput.addEventListener('input', () => {
            this.checkCode();
            this.updateLineNumbers();
        });

        this.elements.prevBtn.addEventListener('click', () => this.goToPreviousStep());
        this.elements.nextBtn.addEventListener('click', () => this.goToNextStep());
        this.elements.hintBtn.addEventListener('click', () => this.showHint());

        this.elements.codeInput.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                this.insertTab();
            }
        });
    }

    private renderStep(stepIndex: number): void {
        const step = this.config.steps[stepIndex];
        if (!step) return;

        this.elements.stepBadge.textContent = `Step ${step.id}`;
        this.elements.stepTitle.textContent = step.title;
        this.elements.currentStep.textContent = step.id.toString();
        this.elements.totalSteps.textContent = this.config.steps.length.toString();

        this.elements.instructionTitle.textContent = step.instructionTitle;
        this.elements.instructionDesc.innerHTML = `<p>${step.description}</p>`;

        this.renderCodeBreakdown(step.codeBreakdown);
        this.elements.expectedCode.textContent = step.expectedCode;
        this.elements.tipText.textContent = step.tip;

        this.renderOutput(step.output);
        this.renderDetailedExplanation(step.detailedExplanation);

        this.elements.codeInput.value = '';
        this.setFeedback('waiting', '⌨️ Start typing to begin...');

        this.elements.prevBtn.disabled = stepIndex === 0;
        this.elements.nextBtn.disabled = true;

        this.updateLineNumbers();
        this.elements.codeInput.focus();
    }

    private renderCodeBreakdown(breakdown: CodePart[]): void {
        let html = '';
        breakdown.forEach((part: CodePart) => {
            html += `
                <div class="code-part">
                    <code>${this.escapeHtml(part.code)}</code>
                    <p>${part.explanation}</p>
                </div>
            `;
        });
        this.elements.breakdownContent.innerHTML = html;
    }

    private renderOutput(output?: string): void {
        if (!this.elements.outputSection || !this.elements.outputContent) return;

        if (output) {
            this.elements.outputSection.style.display = 'block';
            this.elements.outputContent.textContent = output;
        } else {
            this.elements.outputSection.style.display = 'none';
        }
    }

    private renderDetailedExplanation(explanation?: string): void {
        if (!this.elements.detailedExplanation) return;

        if (explanation) {
            this.elements.detailedExplanation.style.display = 'block';
            this.elements.detailedExplanation.innerHTML = `<p>${explanation}</p>`;
        } else {
            this.elements.detailedExplanation.style.display = 'none';
        }
    }

    private checkCode(): void {
        const currentStep = this.config.steps[this.currentStepIndex];
        const userCode = this.elements.codeInput.value.trim();
        const expectedCode = currentStep.expectedCode.trim();

        if (userCode === '') {
            this.setFeedback('waiting', '⌨️ Start typing to begin...');
            this.elements.nextBtn.disabled = true;
            return;
        }

        const normalizedUser = this.normalizeCode(userCode);
        const normalizedExpected = this.normalizeCode(expectedCode);

        if (normalizedUser === normalizedExpected) {
            this.setFeedback('success', '✅ Perfect! Your code is correct!');
            this.elements.nextBtn.disabled = false;
            this.markStepComplete(this.currentStepIndex);
        } else if (normalizedExpected.startsWith(normalizedUser)) {
            this.setFeedback('hint', '👍 Looking good! Keep typing...');
            this.elements.nextBtn.disabled = true;
        } else {
            this.setFeedback('error', '❌ That doesn\'t look quite right. Check the expected code above.');
            this.elements.nextBtn.disabled = true;
        }
    }

    private normalizeCode(code: string): string {
        return code
            .replace(/\s+/g, ' ')
            .replace(/\s*([{}():;,=<>\/])\s*/g, '$1')
            .toLowerCase()
            .trim();
    }

    private setFeedback(type: 'success' | 'error' | 'hint' | 'waiting', message: string): void {
        this.elements.feedback.className = `feedback ${type}`;
        this.elements.feedback.textContent = message;
    }

    private showHint(): void {
        const currentStep = this.config.steps[this.currentStepIndex];
        alert(`💡 Hint: ${currentStep.hint}`);
    }

    private goToPreviousStep(): void {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep(this.currentStepIndex);
            this.updateProgress();
        }
    }

    private goToNextStep(): void {
        if (this.currentStepIndex < this.config.steps.length - 1) {
            this.currentStepIndex++;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep(this.currentStepIndex);
            this.updateProgress();
        } else {
            this.showCompletionModal();
        }
    }

    private markStepComplete(stepIndex: number): void {
        if (!this.progress.completedSteps.includes(stepIndex)) {
            this.progress.completedSteps.push(stepIndex);
            this.saveProgress();
            this.updateProgress();
        }
    }

    private updateProgress(): void {
        const percentage = (this.progress.completedSteps.length / this.config.steps.length) * 100;
        this.elements.progressFill.style.width = `${percentage}%`;
    }

    private updateLineNumbers(): void {
        const lines = this.elements.codeInput.value.split('\n').length;
        let lineNumbersHtml = '';
        for (let i = 1; i <= Math.max(lines, 1); i++) {
            lineNumbersHtml += i + '\n';
        }
        this.elements.lineNumbers.textContent = lineNumbersHtml.trim();
    }

    private insertTab(): void {
        const input = this.elements.codeInput;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        const value = input.value;

        input.value = value.substring(0, start) + '    ' + value.substring(end);
        input.selectionStart = input.selectionEnd = start + 4;
    }

    private escapeHtml(text: string): string {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    private showCompletionModal(): void {
        this.progress.completedAt = new Date().toISOString();
        this.saveProgress();
        this.elements.completionModal.classList.add('show');
    }

    private loadProgress(): WalkthroughProgress {
        const key = this.STORAGE_KEY_PREFIX + this.config.id;
        const saved = getCookie(key);

        if (saved) {
            try {
                return JSON.parse(saved) as WalkthroughProgress;
            } catch {
                // Invalid JSON, return default
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
        const key = this.STORAGE_KEY_PREFIX + this.config.id;
        setCookie(key, JSON.stringify(this.progress), 365);
    }

    public reset(): void {
        const key = this.STORAGE_KEY_PREFIX + this.config.id;
        deleteCookie(key);
        this.progress = this.loadProgress();
        this.currentStepIndex = 0;
        this.renderStep(0);
        this.updateProgress();
    }
}

// @ts-ignore
window.WalkthroughEngine = WalkthroughEngine;
