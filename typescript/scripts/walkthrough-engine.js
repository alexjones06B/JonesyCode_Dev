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
function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + ';' + expires + ';path=/;SameSite=Lax';
}
/**
 * Gets a cookie value by name
 */
function getCookie(name) {
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
function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
}
// ============================================
// WALKTHROUGH ENGINE CLASS
// ============================================
/**
 * WalkthroughEngine - Manages the interactive typing exercise experience
 * Demonstrates: Classes, Access Modifiers, Type Annotations, Generics
 */
class WalkthroughEngine {
    /**
     * Constructor - initializes the walkthrough engine
     * @param config - The walkthrough configuration with all steps
     */
    constructor(config) {
        this.currentStepIndex = 0;
        // Readonly property - can only be set in constructor
        this.STORAGE_KEY_PREFIX = 'walkthrough-progress-';
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
    getElements() {
        return {
            codeInput: document.getElementById('codeInput'),
            feedback: document.getElementById('feedback'),
            progressFill: document.getElementById('progressFill'),
            currentStep: document.getElementById('currentStep'),
            totalSteps: document.getElementById('totalSteps'),
            stepBadge: document.getElementById('stepBadge'),
            stepTitle: document.getElementById('stepTitle'),
            instructionTitle: document.getElementById('instructionTitle'),
            instructionDesc: document.getElementById('instructionDesc'),
            breakdownContent: document.getElementById('breakdownContent'),
            expectedCode: document.getElementById('expectedCode'),
            tipText: document.getElementById('tipText'),
            lineNumbers: document.getElementById('lineNumbers'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            hintBtn: document.getElementById('hintBtn'),
            completionModal: document.getElementById('completionModal'),
            outputSection: document.getElementById('outputSection'),
            outputContent: document.getElementById('outputContent'),
            detailedExplanation: document.getElementById('detailedExplanation')
        };
    }
    /**
     * Initializes the walkthrough engine
     * Demonstrates: void return type
     */
    init() {
        this.setupEventListeners();
        this.renderStep(this.currentStepIndex);
        this.updateProgress();
    }
    /**
     * Sets up all event listeners
     * Demonstrates: Arrow functions, Event handling
     */
    setupEventListeners() {
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
        this.elements.codeInput.addEventListener('keydown', (e) => {
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
    renderStep(stepIndex) {
        const step = this.config.steps[stepIndex];
        if (!step)
            return;
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
    renderCodeBreakdown(breakdown) {
        let html = '';
        breakdown.forEach((part) => {
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
    renderOutput(output) {
        if (!this.elements.outputSection || !this.elements.outputContent)
            return;
        if (output) {
            this.elements.outputSection.style.display = 'block';
            this.elements.outputContent.textContent = output;
        }
        else {
            this.elements.outputSection.style.display = 'none';
        }
    }
    /**
     * Renders the detailed explanation section
     */
    renderDetailedExplanation(explanation) {
        if (!this.elements.detailedExplanation)
            return;
        if (explanation) {
            this.elements.detailedExplanation.style.display = 'block';
            this.elements.detailedExplanation.innerHTML = `<p>${explanation}</p>`;
        }
        else {
            this.elements.detailedExplanation.style.display = 'none';
        }
    }
    /**
     * Checks if the typed code matches the expected code
     * Demonstrates: String methods, Conditional logic
     */
    checkCode() {
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
        }
        else if (normalizedExpected.startsWith(normalizedUser)) {
            this.setFeedback('hint', '👍 Looking good! Keep typing...');
            this.elements.nextBtn.disabled = true;
        }
        else {
            this.setFeedback('error', '❌ That doesn\'t look quite right. Check the expected code above.');
            this.elements.nextBtn.disabled = true;
        }
    }
    /**
     * Normalizes code for comparison
     * Demonstrates: Regular expressions, String methods
     */
    normalizeCode(code) {
        return code
            .replace(/\s+/g, ' ') // Collapse whitespace
            .replace(/\s*([{}():;,=])\s*/g, '$1') // Remove spaces around punctuation
            .toLowerCase()
            .trim();
    }
    /**
     * Sets the feedback message with appropriate styling
     * Demonstrates: Union types (via CSS class), Template literals
     */
    setFeedback(type, message) {
        this.elements.feedback.className = `feedback ${type}`;
        this.elements.feedback.textContent = message;
    }
    /**
     * Shows a hint for the current step
     */
    showHint() {
        const currentStep = this.config.steps[this.currentStepIndex];
        alert(`💡 Hint: ${currentStep.hint}`);
    }
    /**
     * Goes to the previous step
     */
    goToPreviousStep() {
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
    goToNextStep() {
        if (this.currentStepIndex < this.config.steps.length - 1) {
            this.currentStepIndex++;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep(this.currentStepIndex);
            this.updateProgress();
        }
        else {
            // Walkthrough complete
            this.showCompletionModal();
        }
    }
    /**
     * Marks a step as complete
     * Demonstrates: Array methods (includes, push)
     */
    markStepComplete(stepIndex) {
        if (!this.progress.completedSteps.includes(stepIndex)) {
            this.progress.completedSteps.push(stepIndex);
            this.saveProgress();
            this.updateProgress();
        }
    }
    /**
     * Updates the progress bar
     */
    updateProgress() {
        const percentage = (this.progress.completedSteps.length / this.config.steps.length) * 100;
        this.elements.progressFill.style.width = `${percentage}%`;
    }
    /**
     * Updates line numbers in the editor
     */
    updateLineNumbers() {
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
    insertTab() {
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
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    /**
     * Shows the completion modal
     */
    showCompletionModal() {
        this.progress.completedAt = new Date().toISOString();
        this.saveProgress();
        this.elements.completionModal.classList.add('show');
    }
    /**
     * Loads progress from cookies
     * Demonstrates: JSON parsing, Type guards, Default values
     */
    loadProgress() {
        const key = this.STORAGE_KEY_PREFIX + this.config.id;
        const saved = getCookie(key);
        if (saved) {
            try {
                return JSON.parse(saved);
            }
            catch {
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
    saveProgress() {
        const key = this.STORAGE_KEY_PREFIX + this.config.id;
        setCookie(key, JSON.stringify(this.progress), 365);
    }
    /**
     * Resets the walkthrough progress
     */
    reset() {
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
