/**
 * TypeScript Classes Walkthrough - Step definitions
 */

const typescriptClassesConfig: WalkthroughConfig = {
    id: 'typescript-classes',
    title: 'TypeScript Classes',
    steps: [
        {
            id: 1,
            title: 'Creating a Basic Class',
            instructionTitle: 'Blueprints for Objects',
            description: 'A <strong>class</strong> is a blueprint for creating objects. It defines properties and methods that objects of that type will have.',
            expectedCode: 'class Player {\n    name: string;\n}',
            codeBreakdown: [
                {
                    code: 'class',
                    explanation: 'The CLASS keyword starts a class definition.'
                },
                {
                    code: 'Player',
                    explanation: 'The class name. Like interfaces, use PascalCase.'
                },
                {
                    code: 'name: string;',
                    explanation: 'A PROPERTY declaration. Every Player will have a name.'
                }
            ],
            tip: 'Classes are similar to interfaces but can also contain implementation code.',
            hint: 'Start with "class Player {" then add the property inside.'
        },
        {
            id: 2,
            title: 'Adding a Constructor',
            instructionTitle: 'Initializing Objects',
            description: 'The <strong>constructor</strong> is a special method that runs when you create a new object. Use it to set initial values.',
            expectedCode: 'class Player {\n    name: string;\n    constructor(name: string) {\n        this.name = name;\n    }\n}',
            codeBreakdown: [
                {
                    code: 'name: string;',
                    explanation: 'The property declaration.'
                },
                {
                    code: 'constructor(name: string)',
                    explanation: 'The CONSTRUCTOR method with a parameter.'
                },
                {
                    code: 'this.name = name;',
                    explanation: '"this" refers to the current object. We assign the parameter to the property.'
                }
            ],
            tip: 'The constructor runs automatically when you use "new Player()".',
            hint: 'The constructor assigns the parameter to this.name'
        },
        {
            id: 3,
            title: 'Private Properties',
            instructionTitle: 'Hiding Internal Data',
            description: '<strong>private</strong> properties can only be accessed within the class. External code cannot read or modify them directly.',
            expectedCode: 'class BankAccount {\n    private balance: number;\n    constructor() {\n        this.balance = 0;\n    }\n}',
            codeBreakdown: [
                {
                    code: 'private balance: number;',
                    explanation: 'PRIVATE means only code inside this class can access balance.'
                },
                {
                    code: 'this.balance = 0;',
                    explanation: 'Initialize balance to 0 in the constructor.'
                }
            ],
            tip: 'Private properties protect your data from being changed incorrectly from outside.',
            hint: 'Add "private" before the property name.'
        },
        {
            id: 4,
            title: 'Public Methods',
            instructionTitle: 'Interacting with Objects',
            description: '<strong>Methods</strong> are functions inside a class. <strong>public</strong> methods can be called from anywhere.',
            expectedCode: 'public deposit(amount: number): void {\n    this.balance += amount;\n}',
            codeBreakdown: [
                {
                    code: 'public',
                    explanation: 'PUBLIC means this method can be called from anywhere (public is default).'
                },
                {
                    code: 'deposit(amount: number)',
                    explanation: 'Method name and parameter with type.'
                },
                {
                    code: ': void',
                    explanation: 'Return type. void means the method doesn\'t return anything.'
                },
                {
                    code: 'this.balance += amount;',
                    explanation: 'Adds amount to the private balance property.'
                }
            ],
            tip: 'Public methods are the safe way to interact with private properties.',
            hint: 'The method takes a number and adds it to this.balance'
        },
        {
            id: 5,
            title: 'Getter Methods',
            instructionTitle: 'Reading Private Data Safely',
            description: 'A <strong>getter</strong> method returns the value of a property. It provides controlled read access.',
            expectedCode: 'public getBalance(): number {\n    return this.balance;\n}',
            codeBreakdown: [
                {
                    code: 'public getBalance()',
                    explanation: 'A public method to read the balance.'
                },
                {
                    code: ': number',
                    explanation: 'Return type - this method returns a number.'
                },
                {
                    code: 'return this.balance;',
                    explanation: 'Returns the private balance value.'
                }
            ],
            tip: 'Getters let you control how data is accessed, like adding logging or validation.',
            hint: 'Return the balance value with "return this.balance;"'
        },
        {
            id: 6,
            title: 'Creating Instances',
            instructionTitle: 'Making Objects from Classes',
            description: 'Use the <strong>new</strong> keyword to create an object (instance) from a class.',
            expectedCode: 'const player = new Player("Alex");',
            codeBreakdown: [
                {
                    code: 'const player',
                    explanation: 'Declaring a constant to hold our new object.'
                },
                {
                    code: 'new Player',
                    explanation: 'The NEW keyword creates an instance of the class.'
                },
                {
                    code: '("Alex")',
                    explanation: 'Arguments passed to the constructor.'
                }
            ],
            tip: 'Each "new" call creates a separate, independent object.',
            hint: 'Use "new" followed by the class name and constructor arguments.'
        },
        {
            id: 7,
            title: 'Readonly Properties',
            instructionTitle: 'Immutable Class Properties',
            description: '<strong>readonly</strong> properties can only be set in the constructor and never changed after.',
            expectedCode: 'class User {\n    readonly id: number;\n    constructor(id: number) {\n        this.id = id;\n    }\n}',
            codeBreakdown: [
                {
                    code: 'readonly id: number;',
                    explanation: 'READONLY means id can only be set once (in constructor).'
                },
                {
                    code: 'this.id = id;',
                    explanation: 'Setting the id in constructor is allowed.'
                }
            ],
            tip: 'Use readonly for values that should never change after object creation, like IDs.',
            hint: 'Add "readonly" before the id property declaration.'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    new WalkthroughEngine(typescriptClassesConfig);
});
