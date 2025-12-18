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
function setStorage(name, value) {
    try {
        localStorage.setItem(name, value);
    }
    catch (e) {
        console.warn('localStorage not available, progress will not persist');
    }
}
/**
 * Gets a value from localStorage
 */
function getStorage(name) {
    try {
        return localStorage.getItem(name);
    }
    catch (e) {
        console.warn('localStorage not available');
        return null;
    }
}
/**
 * Removes a value from localStorage
 */
function removeStorage(name) {
    try {
        localStorage.removeItem(name);
    }
    catch (e) {
        console.warn('localStorage not available');
    }
}
// Legacy cookie functions for backwards compatibility
function setCookie(name, value, days = 365) {
    setStorage(name, value);
}
function getCookie(name) {
    return getStorage(name);
}
function deleteCookie(name) {
    removeStorage(name);
}
// ============================================
// WALKTHROUGH ENGINE CLASS
// ============================================
/**
 * WalkthroughEngine - Manages the interactive typing exercise experience
 */
class WalkthroughEngine {
    constructor(config) {
        this.currentStepIndex = 0;
        this.STORAGE_KEY_PREFIX = 'walkthrough-progress-';
        this.config = config;
        this.elements = this.getElements();
        this.progress = this.loadProgress();
        this.currentStepIndex = this.progress.currentStep;
        this.init();
    }
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
    loadProgress() {
        const saved = getStorage(this.STORAGE_KEY_PREFIX + this.config.id);
        if (saved) {
            try {
                return JSON.parse(saved);
            }
            catch {
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
    saveProgress() {
        setStorage(this.STORAGE_KEY_PREFIX + this.config.id, JSON.stringify(this.progress));
    }
    init() {
        this.elements.totalSteps.textContent = String(this.config.steps.length);
        this.setupEventListeners();
        this.renderStep();
    }
    setupEventListeners() {
        this.elements.codeInput.addEventListener('input', () => this.checkCode());
        this.elements.prevBtn.addEventListener('click', () => this.prevStep());
        this.elements.nextBtn.addEventListener('click', () => this.nextStep());
        this.elements.hintBtn.addEventListener('click', () => this.showHint());
    }
    getCurrentStep() {
        return this.config.steps[this.currentStepIndex];
    }
    renderStep() {
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
            }
            else {
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
            }
            else {
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
    updateLineNumbers() {
        const step = this.getCurrentStep();
        const lineCount = step.expectedCode.split('\n').length;
        this.elements.lineNumbers.textContent = Array.from({ length: lineCount }, (_, i) => i + 1).join('\n');
    }
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    normalizeCode(code) {
        return code
            .replace(/\r\n/g, '\n')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }
    checkCode() {
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
        }
        else if (normalizedExpected.startsWith(normalizedUser)) {
            this.elements.feedback.className = 'feedback typing';
            this.elements.feedback.textContent = '👍 Keep typing...';
        }
        else {
            this.elements.feedback.className = 'feedback error';
            this.elements.feedback.textContent = '❌ Check your code - something doesn\'t match.';
        }
    }
    markStepComplete() {
        const step = this.getCurrentStep();
        if (!this.progress.completedSteps.includes(step.id)) {
            this.progress.completedSteps.push(step.id);
            this.saveProgress();
        }
        this.elements.nextBtn.disabled = false;
    }
    prevStep() {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep();
        }
    }
    nextStep() {
        if (this.currentStepIndex < this.config.steps.length - 1) {
            this.currentStepIndex++;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep();
        }
        else {
            this.showCompletion();
        }
    }
    showHint() {
        const step = this.getCurrentStep();
        this.elements.feedback.className = 'feedback typing';
        this.elements.feedback.textContent = `💡 Hint: ${step.hint}`;
    }
    showCompletion() {
        this.progress.completedAt = new Date().toISOString();
        this.saveProgress();
        if (this.elements.completionModal) {
            this.elements.completionModal.classList.add('active');
        }
        else {
            alert(`🎉 Congratulations! You've completed the ${this.config.title} walkthrough!`);
        }
    }
}
