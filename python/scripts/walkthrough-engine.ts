/**
 * Python Walkthrough Engine - Core functionality with Pyodide integration
 * This TypeScript file provides interactive Python code execution in the browser
 */

// ============================================
// PYODIDE INTEGRATION
// ============================================

/** Pyodide instance for running Python code */
let pyodideInstance: any = null;
let pyodideLoading: boolean = false;
let pyodideReady: boolean = false;

/**
 * Initializes Pyodide for Python code execution
 */
async function initPyodide(): Promise<void> {
    if (pyodideReady || pyodideLoading) return;

    pyodideLoading = true;
    const statusEl = document.getElementById('pyodideStatus');

    try {
        if (statusEl) {
            statusEl.textContent = '🐍 Loading Python interpreter...';
            statusEl.className = 'pyodide-status loading';
        }

        // @ts-ignore - loadPyodide is loaded via CDN script tag
        pyodideInstance = await window.loadPyodide();
        pyodideReady = true;
        // @ts-ignore - Store on window for global access
        window.pyodide = pyodideInstance;

        if (statusEl) {
            statusEl.textContent = '✅ Python ready!';
            statusEl.className = 'pyodide-status ready';
            // Hide after 2 seconds
            setTimeout(() => {
                statusEl.style.opacity = '0.5';
            }, 2000);
        }
    } catch (error) {
        console.error('Failed to load Pyodide:', error);
        if (statusEl) {
            statusEl.textContent = '❌ Failed to load Python. Refresh to retry.';
            statusEl.className = 'pyodide-status error';
        }
    } finally {
        pyodideLoading = false;
    }
}

/**
 * Runs Python code and returns the output
 */
async function runPythonCode(code: string): Promise<{ output: string; error: string | null }> {
    if (!pyodideReady) {
        return { output: '', error: 'Python interpreter not loaded yet. Please wait...' };
    }

    try {
        // Capture stdout
        pyodideInstance.runPython(`
import sys
from io import StringIO
_stdout_capture = StringIO()
_stderr_capture = StringIO()
sys.stdout = _stdout_capture
sys.stderr = _stderr_capture
`);

        // Run the user's code
        let result = pyodideInstance.runPython(code);

        // Get captured output
        const stdout = pyodideInstance.runPython('_stdout_capture.getvalue()');
        const stderr = pyodideInstance.runPython('_stderr_capture.getvalue()');

        // Reset stdout/stderr
        pyodideInstance.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);

        let output = stdout || '';
        if (result !== undefined && result !== null && String(result) !== 'None') {
            if (output) output += '\n';
            output += String(result);
        }

        return { output: output.trim(), error: stderr || null };
    } catch (error: any) {
        // Reset stdout/stderr on error
        try {
            pyodideInstance.runPython(`
import sys
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
`);
        } catch (e) { }

        return { output: '', error: error.message || String(error) };
    }
}

// ============================================
// STORAGE HELPER FUNCTIONS (localStorage)
// ============================================

function setStorage(name: string, value: string): void {
    try {
        localStorage.setItem(name, value);
    } catch (e) {
        console.warn('localStorage not available, progress will not persist');
    }
}

function getStorage(name: string): string | null {
    try {
        return localStorage.getItem(name);
    } catch (e) {
        console.warn('localStorage not available');
        return null;
    }
}

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
// TYPE DEFINITIONS
// ============================================

interface CodePart {
    code: string;
    explanation: string;
}

interface WalkthroughStep {
    id: number;
    title: string;
    instructionTitle: string;
    description: string;
    expectedCode: string;
    codeBreakdown: CodePart[];
    tip: string;
    hint: string;
    output?: string;
    detailedExplanation?: string;
    /** If true, this step's code will be run with Pyodide */
    runnable?: boolean;
}

interface WalkthroughProgress {
    walkthroughId: string;
    currentStep: number;
    completedSteps: number[];
    startedAt: string;
    completedAt?: string;
}

interface WalkthroughConfig {
    id: string;
    title: string;
    steps: WalkthroughStep[];
}

// ============================================
// WALKTHROUGH ENGINE CLASS
// ============================================

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
        runBtn: HTMLButtonElement | null;
        completionModal: HTMLElement;
        outputSection: HTMLElement | null;
        outputContent: HTMLElement | null;
        detailedExplanation: HTMLElement | null;
        terminalOutput: HTMLElement | null;
        terminalSection: HTMLElement | null;
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
            runBtn: document.getElementById('runBtn') as HTMLButtonElement | null,
            completionModal: document.getElementById('completionModal') as HTMLElement,
            outputSection: document.getElementById('outputSection'),
            outputContent: document.getElementById('outputContent'),
            detailedExplanation: document.getElementById('detailedExplanation'),
            terminalOutput: document.getElementById('terminalOutput'),
            terminalSection: document.getElementById('terminalSection')
        };
    }

    private init(): void {
        this.setupEventListeners();
        this.renderStep(this.currentStepIndex);
        this.updateProgress();

        // Initialize Pyodide
        initPyodide();
    }

    private setupEventListeners(): void {
        this.elements.codeInput.addEventListener('input', () => {
            this.checkCode();
            this.updateLineNumbers();
        });

        this.elements.prevBtn.addEventListener('click', () => this.goToPreviousStep());
        this.elements.nextBtn.addEventListener('click', () => this.goToNextStep());
        this.elements.hintBtn.addEventListener('click', () => this.showHint());

        // Run button for Python execution
        if (this.elements.runBtn) {
            this.elements.runBtn.addEventListener('click', () => this.runCode());
        }

        this.elements.codeInput.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                this.insertTab();
            }
            // Ctrl/Cmd + Enter to run code
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                this.runCode();
            }
        });
    }

    /**
     * Runs the current code with Pyodide
     */
    private async runCode(): Promise<void> {
        const code = this.elements.codeInput.value;

        if (!code.trim()) {
            this.showTerminalOutput('# Enter some code to run');
            return;
        }

        if (!pyodideReady) {
            this.showTerminalOutput('⏳ Python is still loading. Please wait...');
            return;
        }

        this.showTerminalOutput('▶ Running...');

        const result = await runPythonCode(code);

        if (result.error) {
            this.showTerminalOutput(`❌ Error:\n${result.error}`, true);
        } else {
            const output = result.output || '(No output)';
            this.showTerminalOutput(`>>> ${code.split('\n')[0]}${code.includes('\n') ? '\n...' : ''}\n${output}`);
        }
    }

    /**
     * Shows output in the terminal section
     */
    private showTerminalOutput(text: string, isError: boolean = false): void {
        if (this.elements.terminalSection) {
            this.elements.terminalSection.style.display = 'block';
        }
        if (this.elements.terminalOutput) {
            this.elements.terminalOutput.textContent = text;
            this.elements.terminalOutput.className = isError ? 'terminal-error' : '';
        }
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

        // Show/hide run button and terminal based on runnable flag
        if (this.elements.runBtn) {
            this.elements.runBtn.style.display = step.runnable !== false ? 'inline-flex' : 'none';
        }
        if (this.elements.terminalSection) {
            this.elements.terminalSection.style.display = 'none';
        }

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
            this.setFeedback('success', '✅ Perfect! Your code is correct! Press ▶ Run to see it execute.');
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
            .replace(/\s*([{}():;,=\[\]])\s*/g, '$1')
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

// Export for use in walkthrough-specific scripts
// @ts-ignore - Will be used by other scripts
window.WalkthroughEngine = WalkthroughEngine;
