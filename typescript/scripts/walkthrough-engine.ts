/**
 * Walkthrough Engine - Core functionality for step-by-step typing exercises
 * This TypeScript file demonstrates key principles used throughout the project
 */

// ============================================
// COOKIE HELPER FUNCTIONS
// ============================================

/**
 * Sets a cookie with the given name, value, and expiration days
 */
function setCookie(name: string, value: string, days: number = 365): void {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + ';' + expires + ';path=/;SameSite=Lax';
}

/**
 * Gets a cookie value by name
 */
function getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

/**
 * Deletes a cookie by name
 */
function deleteCookie(name: string): void {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
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
 * Demonstrates: Classes, Access Modifiers, Type Annotations, Generics
 */
class WalkthroughEngine {
    // Private properties - only accessible within this class
    private config: WalkthroughConfig;
    private currentStepIndex: number = 0;
    private progress: WalkthroughProgress;

    // Readonly property - can only be set in constructor
    private readonly STORAGE_KEY_PREFIX: string = 'walkthrough-progress-';

    // DOM element references
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

    /**
     * Constructor - initializes the walkthrough engine
     * @param config - The walkthrough configuration with all steps
     */
    constructor(config: WalkthroughConfig) {
        this.config = config;
        this.elements = this.getElements();
        this.progress = this.loadProgress();
        this.currentStepIndex = this.progress.currentStep;

        this.init();
    }

    /**
     * Gets all required DOM elements
     * Demonstrates: Type assertions, Object types
     */
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

    /**
     * Initializes the walkthrough engine
     * Demonstrates: void return type
     */
    private init(): void {
        this.setupEventListeners();
        this.renderStep(this.currentStepIndex);
        this.updateProgress();
    }

    /**
     * Sets up all event listeners
     * Demonstrates: Arrow functions, Event handling
     */
    private setupEventListeners(): void {
        // Input event for real-time code checking
        this.elements.codeInput.addEventListener('input', () => {
            this.checkCode();
            this.updateLineNumbers();
        });

        // Navigation buttons
        this.elements.prevBtn.addEventListener('click', () => this.goToPreviousStep());
        this.elements.nextBtn.addEventListener('click', () => this.goToNextStep());
        this.elements.hintBtn.addEventListener('click', () => this.showHint());

        // Tab key handling for indentation
        this.elements.codeInput.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                this.insertTab();
            }
        });
    }

    /**
     * Renders a specific step
     * Demonstrates: Array indexing, Template literals, DOM manipulation
     */
    private renderStep(stepIndex: number): void {
        const step = this.config.steps[stepIndex];
        if (!step) return;

        // Update step indicator
        this.elements.stepBadge.textContent = `Step ${step.id}`;
        this.elements.stepTitle.textContent = step.title;
        this.elements.currentStep.textContent = step.id.toString();
        this.elements.totalSteps.textContent = this.config.steps.length.toString();

        // Update instruction content
        this.elements.instructionTitle.textContent = step.instructionTitle;
        this.elements.instructionDesc.innerHTML = `<p>${step.description}</p>`;

        // Render code breakdown
        this.renderCodeBreakdown(step.codeBreakdown);

        // Update expected code
        this.elements.expectedCode.textContent = step.expectedCode;

        // Update tip
        this.elements.tipText.textContent = step.tip;

        // Update output section if present
        this.renderOutput(step.output);

        // Update detailed explanation if present
        this.renderDetailedExplanation(step.detailedExplanation);

        // Clear input and reset feedback
        this.elements.codeInput.value = '';
        this.setFeedback('waiting', '⌨️ Start typing to begin...');

        // Update navigation buttons
        this.elements.prevBtn.disabled = stepIndex === 0;
        this.elements.nextBtn.disabled = true;

        // Update line numbers
        this.updateLineNumbers();

        // Focus the input
        this.elements.codeInput.focus();
    }

    /**
     * Renders the code breakdown section
     * Demonstrates: forEach, Template literals, innerHTML
     */
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

    /**
     * Renders the output section showing what the code produces
     */
    private renderOutput(output?: string): void {
        if (!this.elements.outputSection || !this.elements.outputContent) return;

        if (output) {
            this.elements.outputSection.style.display = 'block';
            this.elements.outputContent.textContent = output;
        } else {
            this.elements.outputSection.style.display = 'none';
        }
    }

    /**
     * Renders the detailed explanation section
     */
    private renderDetailedExplanation(explanation?: string): void {
        if (!this.elements.detailedExplanation) return;

        if (explanation) {
            this.elements.detailedExplanation.style.display = 'block';
            this.elements.detailedExplanation.innerHTML = `<p>${explanation}</p>`;
        } else {
            this.elements.detailedExplanation.style.display = 'none';
        }
    }

    /**
     * Checks if the typed code matches the expected code
     * Demonstrates: String methods, Conditional logic
     */
    private checkCode(): void {
        const currentStep = this.config.steps[this.currentStepIndex];
        const userCode = this.elements.codeInput.value.trim();
        const expectedCode = currentStep.expectedCode.trim();

        if (userCode === '') {
            this.setFeedback('waiting', '⌨️ Start typing to begin...');
            this.elements.nextBtn.disabled = true;
            return;
        }

        // Check if code matches (allowing for minor whitespace differences)
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

    /**
     * Normalizes code for comparison
     * Demonstrates: Regular expressions, String methods
     */
    private normalizeCode(code: string): string {
        return code
            .replace(/\s+/g, ' ')  // Collapse whitespace
            .replace(/\s*([{}():;,=])\s*/g, '$1')  // Remove spaces around punctuation
            .toLowerCase()
            .trim();
    }

    /**
     * Sets the feedback message with appropriate styling
     * Demonstrates: Union types (via CSS class), Template literals
     */
    private setFeedback(type: 'success' | 'error' | 'hint' | 'waiting', message: string): void {
        this.elements.feedback.className = `feedback ${type}`;
        this.elements.feedback.textContent = message;
    }

    /**
     * Shows a hint for the current step
     */
    private showHint(): void {
        const currentStep = this.config.steps[this.currentStepIndex];
        alert(`💡 Hint: ${currentStep.hint}`);
    }

    /**
     * Goes to the previous step
     */
    private goToPreviousStep(): void {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep(this.currentStepIndex);
            this.updateProgress();
        }
    }

    /**
     * Goes to the next step
     */
    private goToNextStep(): void {
        if (this.currentStepIndex < this.config.steps.length - 1) {
            this.currentStepIndex++;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep(this.currentStepIndex);
            this.updateProgress();
        } else {
            // Walkthrough complete
            this.showCompletionModal();
        }
    }

    /**
     * Marks a step as complete
     * Demonstrates: Array methods (includes, push)
     */
    private markStepComplete(stepIndex: number): void {
        if (!this.progress.completedSteps.includes(stepIndex)) {
            this.progress.completedSteps.push(stepIndex);
            this.saveProgress();
            this.updateProgress();
        }
    }

    /**
     * Updates the progress bar
     */
    private updateProgress(): void {
        const percentage = (this.progress.completedSteps.length / this.config.steps.length) * 100;
        this.elements.progressFill.style.width = `${percentage}%`;
    }

    /**
     * Updates line numbers in the editor
     */
    private updateLineNumbers(): void {
        const lines = this.elements.codeInput.value.split('\n').length;
        let lineNumbersHtml = '';
        for (let i = 1; i <= Math.max(lines, 1); i++) {
            lineNumbersHtml += i + '\n';
        }
        this.elements.lineNumbers.textContent = lineNumbersHtml.trim();
    }

    /**
     * Inserts a tab character at cursor position
     */
    private insertTab(): void {
        const input = this.elements.codeInput;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        const value = input.value;

        input.value = value.substring(0, start) + '    ' + value.substring(end);
        input.selectionStart = input.selectionEnd = start + 4;
    }

    /**
     * Escapes HTML special characters
     */
    private escapeHtml(text: string): string {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Shows the completion modal
     */
    private showCompletionModal(): void {
        this.progress.completedAt = new Date().toISOString();
        this.saveProgress();
        this.elements.completionModal.classList.add('show');
    }

    /**
     * Loads progress from cookies
     * Demonstrates: JSON parsing, Type guards, Default values
     */
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

        // Return default progress
        return {
            walkthroughId: this.config.id,
            currentStep: 0,
            completedSteps: [],
            startedAt: new Date().toISOString()
        };
    }

    /**
     * Saves progress to cookies (persists for 1 year)
     */
    private saveProgress(): void {
        const key = this.STORAGE_KEY_PREFIX + this.config.id;
        setCookie(key, JSON.stringify(this.progress), 365);
    }

    /**
     * Resets the walkthrough progress
     */
    public reset(): void {
        const key = this.STORAGE_KEY_PREFIX + this.config.id;
        deleteCookie(key);
        this.progress = this.loadProgress();
        this.currentStepIndex = 0;
        this.renderStep(0);
        this.updateProgress();
    }
}

// Export for use in walkthrough-specific scripts
// @ts-ignore - Will be used by other scripts
window.WalkthroughEngine = WalkthroughEngine;
