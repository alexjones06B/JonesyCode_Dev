/**
 * TypeScript Functions Walkthrough - Step definitions
 */

const typescriptFunctionsConfig: WalkthroughConfig = {
    id: 'typescript-functions',
    title: 'TypeScript Functions',
    steps: [
        {
            id: 1,
            title: 'Basic Typed Function',
            instructionTitle: 'Functions with Types',
            description: 'TypeScript functions have types for parameters and return values. This catches errors before your code runs.',
            expectedCode: 'function greet(name: string): string {\n    return "Hello, " + name;\n}',
            codeBreakdown: [
                {
                    code: 'function greet',
                    explanation: 'Declares a function named "greet".'
                },
                {
                    code: '(name: string)',
                    explanation: 'Parameter with type annotation. Only strings can be passed.'
                },
                {
                    code: ': string',
                    explanation: 'RETURN TYPE after the parentheses. This function must return a string.'
                },
                {
                    code: 'return "Hello, " + name;',
                    explanation: 'Returns a string, matching the return type.'
                }
            ],
            tip: 'Always specify return types for better documentation and error catching.',
            hint: 'The function takes a string and returns a string greeting.'
        },
        {
            id: 2,
            title: 'Void Return Type',
            instructionTitle: 'Functions That Don\'t Return',
            description: 'Use <strong>void</strong> when a function doesn\'t return a value. It performs an action but returns nothing.',
            expectedCode: 'function log(message: string): void {\n    console.log(message);\n}',
            codeBreakdown: [
                {
                    code: 'function log(message: string)',
                    explanation: 'A function that takes a string parameter.'
                },
                {
                    code: ': void',
                    explanation: 'VOID means this function returns nothing.'
                },
                {
                    code: 'console.log(message);',
                    explanation: 'Logs to console but doesn\'t return a value.'
                }
            ],
            tip: 'Use void for functions that perform actions but don\'t need to return data.',
            hint: 'The return type is void because we just log, not return.'
        },
        {
            id: 3,
            title: 'Arrow Functions',
            instructionTitle: 'Modern Function Syntax',
            description: '<strong>Arrow functions</strong> are a shorter way to write functions. They\'re commonly used in TypeScript.',
            expectedCode: 'const add = (a: number, b: number): number => a + b;',
            codeBreakdown: [
                {
                    code: 'const add =',
                    explanation: 'Arrow functions are often assigned to constants.'
                },
                {
                    code: '(a: number, b: number)',
                    explanation: 'Parameters with types, just like regular functions.'
                },
                {
                    code: ': number',
                    explanation: 'Return type annotation.'
                },
                {
                    code: '=> a + b',
                    explanation: 'The ARROW (=>) followed by the return expression. No need for return keyword for single expressions.'
                }
            ],
            tip: 'Arrow functions with single expressions automatically return the result.',
            hint: 'Use => instead of function keyword, and the expression is the return value.'
        },
        {
            id: 4,
            title: 'Optional Parameters',
            instructionTitle: 'Parameters That Aren\'t Required',
            description: 'Add <strong>?</strong> to make parameters optional. Optional parameters must come after required ones.',
            expectedCode: 'function greet(name: string, greeting?: string): string {\n    return (greeting || "Hello") + ", " + name;\n}',
            codeBreakdown: [
                {
                    code: 'name: string',
                    explanation: 'Required parameter - must be provided.'
                },
                {
                    code: 'greeting?: string',
                    explanation: 'OPTIONAL parameter - the ? makes it not required.'
                },
                {
                    code: 'greeting || "Hello"',
                    explanation: 'Uses "Hello" as default if greeting wasn\'t provided.'
                }
            ],
            tip: 'Optional parameters may be undefined, so always provide fallback values.',
            hint: 'The ? after greeting makes it optional.'
        },
        {
            id: 5,
            title: 'Default Parameters',
            instructionTitle: 'Parameters with Default Values',
            description: '<strong>Default parameters</strong> have a value used when the argument isn\'t provided.',
            expectedCode: 'function power(base: number, exp: number = 2): number {\n    return Math.pow(base, exp);\n}',
            codeBreakdown: [
                {
                    code: 'base: number',
                    explanation: 'Required parameter.'
                },
                {
                    code: 'exp: number = 2',
                    explanation: 'DEFAULT PARAMETER. If not provided, exp will be 2.'
                },
                {
                    code: 'Math.pow(base, exp)',
                    explanation: 'Calculates base to the power of exp.'
                }
            ],
            tip: 'Default parameters are cleaner than optional parameters with || fallbacks.',
            hint: 'Use = 2 to set the default value for exp.'
        },
        {
            id: 6,
            title: 'Function Types',
            instructionTitle: 'Typing Function Variables',
            description: 'You can define the type of a function itself, useful for callbacks and higher-order functions.',
            expectedCode: 'type MathOp = (a: number, b: number) => number;',
            codeBreakdown: [
                {
                    code: 'type MathOp',
                    explanation: 'Creating a TYPE ALIAS named MathOp.'
                },
                {
                    code: '(a: number, b: number)',
                    explanation: 'The function must take two number parameters.'
                },
                {
                    code: '=> number',
                    explanation: 'And must return a number.'
                }
            ],
            tip: 'Function types are essential for callbacks and ensuring consistent function signatures.',
            hint: 'Define parameters and return type with arrow syntax.'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    new WalkthroughEngine(typescriptFunctionsConfig);
});
