/**
 * TypeScript Basics Walkthrough - Step definitions
 * Each step teaches a fundamental TypeScript concept
 */

// Define the walkthrough configuration
const typescriptBasicsConfig: WalkthroughConfig = {
    id: 'typescript-basics',
    title: 'TypeScript Basics',
    steps: [
        {
            id: 1,
            title: 'Declaring a String Variable',
            instructionTitle: 'Your First TypeScript Variable',
            description: 'In TypeScript, we can declare variables with specific types. The <strong>string</strong> type is used for text values. Let\'s create a variable to store a player\'s name.',
            expectedCode: 'let playerName: string = "Alex";',
            output: '// Console output:\n// playerName = "Alex"\n// typeof playerName = "string"',
            detailedExplanation: '<strong>What this does:</strong> This line creates a variable called <code>playerName</code> and stores the text "Alex" in it. The <code>: string</code> part tells TypeScript that this variable can ONLY hold text values. If you tried to assign a number later (like <code>playerName = 42</code>), TypeScript would show an error BEFORE you even run the code. This is the power of type safety!',
            codeBreakdown: [
                {
                    code: 'let',
                    explanation: 'The "let" keyword declares a variable that can be changed later.'
                },
                {
                    code: 'playerName',
                    explanation: 'This is the variable name. Use camelCase for variable names in TypeScript.'
                },
                {
                    code: ': string',
                    explanation: 'The colon followed by "string" is the TYPE ANNOTATION. It tells TypeScript this variable will only hold text values.'
                },
                {
                    code: '= "Alex"',
                    explanation: 'We assign the string value "Alex" to the variable. Strings are wrapped in quotes.'
                },
                {
                    code: ';',
                    explanation: 'Semicolons end statements in TypeScript (optional but recommended).'
                }
            ],
            tip: 'The colon (:) between the variable name and type is TypeScript\'s type annotation syntax!',
            hint: 'Make sure to use double quotes around "Alex" and include the semicolon at the end.'
        },
        {
            id: 2,
            title: 'Declaring a Number Variable',
            instructionTitle: 'Working with Numbers',
            description: 'The <strong>number</strong> type in TypeScript represents both integers and decimals. There\'s no separate type for integers like in some other languages.',
            expectedCode: 'let score: number = 100;',
            output: '// Console output:\n// score = 100\n// typeof score = "number"\n// You can do math: score + 50 = 150',
            detailedExplanation: '<strong>What this does:</strong> Creates a variable <code>score</code> that can only hold numeric values. Unlike JavaScript, TypeScript will catch mistakes like <code>score = "one hundred"</code> at compile time. The <code>number</code> type includes integers (1, 2, 3), decimals (3.14), negative numbers (-5), and special values like <code>Infinity</code> and <code>NaN</code>.',
            codeBreakdown: [
                {
                    code: 'let',
                    explanation: 'Declares a reassignable variable.'
                },
                {
                    code: 'score',
                    explanation: 'A descriptive variable name for storing a score value.'
                },
                {
                    code: ': number',
                    explanation: 'The NUMBER type annotation. This variable can only hold numeric values (integers or decimals).'
                },
                {
                    code: '= 100',
                    explanation: 'Assigns the number 100. Note: no quotes around numbers!'
                }
            ],
            tip: 'Numbers don\'t need quotes. "100" is a string, but 100 is a number.',
            hint: 'Type: let score: number = 100;'
        },
        {
            id: 3,
            title: 'Declaring a Boolean Variable',
            instructionTitle: 'True or False with Booleans',
            description: 'The <strong>boolean</strong> type can only be <code>true</code> or <code>false</code>. Perfect for flags, conditions, and toggles.',
            expectedCode: 'let isActive: boolean = true;',
            output: '// Console output:\n// isActive = true\n// typeof isActive = "boolean"\n// Can be used in conditions:\n// if (isActive) { /* runs! */ }',
            detailedExplanation: '<strong>What this does:</strong> Creates a variable that can only be <code>true</code> or <code>false</code>. Booleans are essential for controlling program flow with <code>if</code> statements, <code>while</code> loops, and logical operations. Common uses include: checking if a user is logged in, if a game is paused, or if a feature is enabled.',
            codeBreakdown: [
                {
                    code: 'let',
                    explanation: 'Declares a variable.'
                },
                {
                    code: 'isActive',
                    explanation: 'Boolean variables often start with "is", "has", or "can" to indicate they\'re true/false values.'
                },
                {
                    code: ': boolean',
                    explanation: 'The BOOLEAN type annotation. Only allows true or false values.'
                },
                {
                    code: '= true',
                    explanation: 'Boolean values are written as true or false (no quotes, all lowercase).'
                }
            ],
            tip: 'Boolean variable names that start with "is", "has", or "can" are easier to read!',
            hint: 'Remember: true and false are lowercase and have no quotes.'
        },
        {
            id: 4,
            title: 'Declaring a Constant',
            instructionTitle: 'Constants with const',
            description: 'Use <strong>const</strong> instead of let when you have a value that should never change. TypeScript will prevent any reassignment.',
            expectedCode: 'const maxLevel: number = 99;',
            output: '// Console output:\n// maxLevel = 99\n// Trying maxLevel = 100 would cause:\n// ERROR: Cannot assign to "maxLevel"\n//        because it is a constant.',
            detailedExplanation: '<strong>What this does:</strong> Creates a constant named <code>maxLevel</code> that can never be changed after creation. If you try <code>maxLevel = 100</code> later, TypeScript shows an error immediately. Use <code>const</code> for values that should stay fixed, like configuration settings, mathematical constants (PI), or maximum limits. This prevents accidental modifications and makes code more predictable.',
            codeBreakdown: [
                {
                    code: 'const',
                    explanation: 'The CONST keyword creates a constant - a variable that cannot be reassigned after creation.'
                },
                {
                    code: 'maxLevel',
                    explanation: 'A descriptive name for a maximum level value.'
                },
                {
                    code: ': number',
                    explanation: 'Type annotation specifying this is a number.'
                },
                {
                    code: '= 99',
                    explanation: 'The value that will never change.'
                }
            ],
            tip: 'Use const by default, and only use let when you need to reassign the variable.',
            hint: 'Replace "let" with "const" for values that won\'t change.'
        },
        {
            id: 5,
            title: 'String Array',
            instructionTitle: 'Arrays of Strings',
            description: 'Arrays hold multiple values of the same type. Use <strong>string[]</strong> to declare an array that can only contain strings.',
            expectedCode: 'let items: string[] = ["sword", "shield"];',
            output: '// Console output:\n// items = ["sword", "shield"]\n// items.length = 2\n// items[0] = "sword"\n// items[1] = "shield"',
            detailedExplanation: '<strong>What this does:</strong> Creates an array that can only hold strings. You can add more items with <code>items.push("potion")</code>, access items by index <code>items[0]</code>, and use array methods like <code>map</code>, <code>filter</code>, and <code>forEach</code>. TypeScript ensures you can\'t accidentally add a number to this array - <code>items.push(42)</code> would be an error!',
            codeBreakdown: [
                {
                    code: 'let items',
                    explanation: 'Declares a variable named "items".'
                },
                {
                    code: ': string[]',
                    explanation: 'The ARRAY type annotation. The [] after string means "array of strings".'
                },
                {
                    code: '= ["sword", "shield"]',
                    explanation: 'An array literal with two string elements. Arrays use square brackets [].'
                }
            ],
            tip: 'string[] means "array of strings". You can also write Array<string> - they\'re equivalent!',
            hint: 'Arrays use square brackets []. Each string needs quotes.'
        },
        {
            id: 6,
            title: 'Number Array',
            instructionTitle: 'Arrays of Numbers',
            description: 'Similarly, use <strong>number[]</strong> for an array that only contains numbers.',
            expectedCode: 'let scores: number[] = [100, 200, 300];',
            output: '// Console output:\n// scores = [100, 200, 300]\n// scores.length = 3\n// Math.max(...scores) = 300\n// scores.reduce((a,b) => a+b) = 600',
            detailedExplanation: '<strong>What this does:</strong> Creates an array that can only hold numbers. Perfect for storing scores, prices, measurements, or any list of numeric data. You can use math operations on the array: calculate sum with <code>reduce()</code>, find max with <code>Math.max()</code>, sort numerically, and more. TypeScript prevents mixing types - no strings allowed here!',
            codeBreakdown: [
                {
                    code: 'let scores',
                    explanation: 'Declares a variable to hold multiple score values.'
                },
                {
                    code: ': number[]',
                    explanation: 'Type annotation for an array of numbers.'
                },
                {
                    code: '= [100, 200, 300]',
                    explanation: 'An array with three number elements. Numbers don\'t need quotes.'
                }
            ],
            tip: 'TypeScript will error if you try to add a string to a number[] array!',
            hint: 'Numbers in arrays don\'t need quotes.'
        },
        {
            id: 7,
            title: 'Object Type',
            instructionTitle: 'Inline Object Types',
            description: 'Objects can have their shape defined inline. This specifies exactly what properties an object must have.',
            expectedCode: 'let player: { name: string; level: number } = { name: "Hero", level: 5 };',
            output: '// Console output:\n// player.name = "Hero"\n// player.level = 5\n// player = { name: "Hero", level: 5 }',
            detailedExplanation: '<strong>What this does:</strong> Creates an object with a specific "shape" - it MUST have a <code>name</code> property (string) and a <code>level</code> property (number). TypeScript checks that you provide both properties and that they have the correct types. Trying to add <code>player.health = 100</code> would be an error because <code>health</code> isn\'t in the type definition. For reusable object shapes, you\'ll learn about Interfaces next!',
            codeBreakdown: [
                {
                    code: 'let player',
                    explanation: 'Declares a variable for a player object.'
                },
                {
                    code: ': { name: string; level: number }',
                    explanation: 'An INLINE OBJECT TYPE. Defines the exact shape: must have a "name" (string) and "level" (number).'
                },
                {
                    code: '{ name: "Hero", level: 5 }',
                    explanation: 'The actual object value matching the defined shape.'
                }
            ],
            tip: 'For complex objects, you\'ll usually use interfaces (covered in the next walkthrough) instead of inline types.',
            hint: 'Use semicolons between properties in the type, and commas in the value.'
        },
        {
            id: 8,
            title: 'Type Inference',
            instructionTitle: 'Let TypeScript Infer Types',
            description: 'TypeScript is smart! When you assign a value immediately, it can <strong>infer</strong> the type automatically. You don\'t always need to write the type.',
            expectedCode: 'let message = "Hello, TypeScript!";',
            output: '// Console output:\n// message = "Hello, TypeScript!"\n// TypeScript infers: message is type string\n// Hover over the variable in VS Code to see!',
            detailedExplanation: '<strong>What this does:</strong> Creates a string variable WITHOUT explicitly writing <code>: string</code>. TypeScript is smart enough to see <code>"Hello, TypeScript!"</code> is a string and automatically infers the type. This is called <strong>Type Inference</strong>. You still get all the type safety - trying <code>message = 42</code> later would still be an error! Best practice: let TypeScript infer when obvious, but be explicit for function parameters and return types.',
            codeBreakdown: [
                {
                    code: 'let message',
                    explanation: 'Declares a variable without an explicit type annotation.'
                },
                {
                    code: '= "Hello, TypeScript!"',
                    explanation: 'TypeScript sees this is a string and automatically infers the type as string.'
                }
            ],
            tip: 'Type inference is powerful, but explicit types in function parameters and return values improve code readability.',
            hint: 'This time, no colon or type annotation needed! TypeScript figures it out.'
        }
    ]
};

// Initialize the walkthrough when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore - WalkthroughEngine is loaded from walkthrough-engine.js
    new WalkthroughEngine(typescriptBasicsConfig);
});
