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
    init() {
        this.setupEventListeners();
        this.renderStep(this.currentStepIndex);
        this.updateProgress();
    }
    setupEventListeners() {
        this.elements.codeInput.addEventListener('input', () => {
            this.checkCode();
            this.updateLineNumbers();
        });
        this.elements.prevBtn.addEventListener('click', () => this.goToPreviousStep());
        this.elements.nextBtn.addEventListener('click', () => this.goToNextStep());
        this.elements.hintBtn.addEventListener('click', () => this.showHint());
        this.elements.codeInput.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                this.insertTab();
            }
        });
    }
    renderStep(stepIndex) {
        const step = this.config.steps[stepIndex];
        if (!step)
            return;
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
    checkCode() {
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
    normalizeCode(code) {
        return code
            .replace(/\s+/g, ' ')
            .replace(/\s*([{}():;,=<>\/])\s*/g, '$1')
            .toLowerCase()
            .trim();
    }
    setFeedback(type, message) {
        this.elements.feedback.className = `feedback ${type}`;
        this.elements.feedback.textContent = message;
    }
    showHint() {
        const currentStep = this.config.steps[this.currentStepIndex];
        alert(`💡 Hint: ${currentStep.hint}`);
    }
    goToPreviousStep() {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep(this.currentStepIndex);
            this.updateProgress();
        }
    }
    goToNextStep() {
        if (this.currentStepIndex < this.config.steps.length - 1) {
            this.currentStepIndex++;
            this.progress.currentStep = this.currentStepIndex;
            this.saveProgress();
            this.renderStep(this.currentStepIndex);
            this.updateProgress();
        }
        else {
            this.showCompletionModal();
        }
    }
    markStepComplete(stepIndex) {
        if (!this.progress.completedSteps.includes(stepIndex)) {
            this.progress.completedSteps.push(stepIndex);
            this.saveProgress();
            this.updateProgress();
        }
    }
    updateProgress() {
        const percentage = (this.progress.completedSteps.length / this.config.steps.length) * 100;
        this.elements.progressFill.style.width = `${percentage}%`;
    }
    updateLineNumbers() {
        const lines = this.elements.codeInput.value.split('\n').length;
        let lineNumbersHtml = '';
        for (let i = 1; i <= Math.max(lines, 1); i++) {
            lineNumbersHtml += i + '\n';
        }
        this.elements.lineNumbers.textContent = lineNumbersHtml.trim();
    }
    insertTab() {
        const input = this.elements.codeInput;
        const start = input.selectionStart;
        const end = input.selectionEnd;
        const value = input.value;
        input.value = value.substring(0, start) + '    ' + value.substring(end);
        input.selectionStart = input.selectionEnd = start + 4;
    }
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    showCompletionModal() {
        this.progress.completedAt = new Date().toISOString();
        this.saveProgress();
        this.elements.completionModal.classList.add('show');
    }
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
        return {
            walkthroughId: this.config.id,
            currentStep: 0,
            completedSteps: [],
            startedAt: new Date().toISOString()
        };
    }
    saveProgress() {
        const key = this.STORAGE_KEY_PREFIX + this.config.id;
        setCookie(key, JSON.stringify(this.progress), 365);
    }
    reset() {
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
