/**
 * TypeScript Generics Walkthrough - Step definitions
 */
const typescriptGenericsConfig = {
    id: 'typescript-generics',
    title: 'TypeScript Generics',
    steps: [
        {
            id: 1,
            title: 'Generic Function',
            instructionTitle: 'Type Variables',
            description: '<strong>Generics</strong> let you write functions that work with any type while maintaining type safety. Think of T as a placeholder for "whatever type you give me".',
            expectedCode: 'function identity<T>(value: T): T {\n    return value;\n}',
            codeBreakdown: [
                {
                    code: 'function identity',
                    explanation: 'A function that returns exactly what you give it.'
                },
                {
                    code: '<T>',
                    explanation: 'TYPE PARAMETER. T is a placeholder for any type. It gets filled in when you call the function.'
                },
                {
                    code: '(value: T)',
                    explanation: 'The parameter has type T - whatever type is provided.'
                },
                {
                    code: ': T',
                    explanation: 'Return type is also T - returns the same type as input.'
                }
            ],
            tip: 'T is a convention for "Type". You could use any letter, but T, U, V are common.',
            hint: 'The <T> goes right after the function name, before the parameters.'
        },
        {
            id: 2,
            title: 'Using Generic Functions',
            instructionTitle: 'Calling with Specific Types',
            description: 'When calling a generic function, you can specify the type explicitly with angle brackets.',
            expectedCode: 'const num = identity<number>(42);',
            codeBreakdown: [
                {
                    code: 'identity<number>',
                    explanation: 'Specifying that T should be "number" for this call.'
                },
                {
                    code: '(42)',
                    explanation: 'Passing a number value. TypeScript checks it matches the type.'
                },
                {
                    code: 'const num',
                    explanation: 'num will be typed as number because T was number.'
                }
            ],
            tip: 'TypeScript can often infer the type, so you can also write: identity(42)',
            hint: 'Put the type in angle brackets between the function name and parentheses.'
        },
        {
            id: 3,
            title: 'Generic Interface',
            instructionTitle: 'Interfaces with Type Parameters',
            description: 'Interfaces can also be generic, making them reusable for different types.',
            expectedCode: 'interface Box<T> {\n    value: T;\n}',
            codeBreakdown: [
                {
                    code: 'interface Box<T>',
                    explanation: 'A generic interface. T is determined when you use Box.'
                },
                {
                    code: 'value: T',
                    explanation: 'The property type depends on what T is set to.'
                }
            ],
            tip: 'Box<string> has value: string. Box<number> has value: number.',
            hint: 'Add <T> after the interface name.'
        },
        {
            id: 4,
            title: 'Generic Class',
            instructionTitle: 'Classes with Type Parameters',
            description: 'Generic classes let you create reusable data structures that work with any type.',
            expectedCode: 'class Stack<T> {\n    private items: T[] = [];\n    push(item: T): void {\n        this.items.push(item);\n    }\n}',
            codeBreakdown: [
                {
                    code: 'class Stack<T>',
                    explanation: 'A generic Stack class. Works with any type.'
                },
                {
                    code: 'private items: T[] = []',
                    explanation: 'An array that holds items of type T.'
                },
                {
                    code: 'push(item: T): void',
                    explanation: 'Method that accepts items of type T.'
                }
            ],
            tip: 'new Stack<number>() creates a stack that only accepts numbers.',
            hint: 'The array type is T[] to hold items of the generic type.'
        },
        {
            id: 5,
            title: 'Generic Constraints',
            instructionTitle: 'Limiting Generic Types',
            description: 'Use <strong>extends</strong> to constrain what types can be used with a generic.',
            expectedCode: 'function getLength<T extends { length: number }>(item: T): number {\n    return item.length;\n}',
            codeBreakdown: [
                {
                    code: '<T extends { length: number }>',
                    explanation: 'CONSTRAINT: T must have a length property that is a number.'
                },
                {
                    code: '(item: T)',
                    explanation: 'Item must be a type with .length (strings, arrays, etc.).'
                },
                {
                    code: 'return item.length;',
                    explanation: 'Safe to access .length because of the constraint.'
                }
            ],
            tip: 'Constraints let you use properties/methods on generic types safely.',
            hint: 'Use "extends { length: number }" to require the length property.'
        }
    ]
};
document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    new WalkthroughEngine(typescriptGenericsConfig);
});
