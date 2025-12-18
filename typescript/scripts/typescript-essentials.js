/**
 * TypeScript Essentials Walkthrough - Practical basics
 * Covers console output, loops, conditionals, and array methods
 */
// Define the walkthrough configuration
const typescriptEssentialsConfig = {
    id: 'typescript-essentials',
    title: 'TypeScript Essentials',
    steps: [
        {
            id: 1,
            title: 'Console Output',
            instructionTitle: 'Printing to the Console',
            description: 'The <strong>console.log()</strong> function outputs values to the terminal/console. This is essential for debugging and seeing your program\'s results.',
            expectedCode: 'console.log("Hello, World!");',
            output: '// Terminal output:\nHello, World!',
            detailedExplanation: '<strong>What this does:</strong> The <code>console.log()</code> function prints whatever you put inside the parentheses to the console/terminal. This is the most common way to see output from your program, debug values, and understand what\'s happening in your code. You can log strings, numbers, objects, arrays - anything!',
            codeBreakdown: [
                {
                    code: 'console',
                    explanation: 'The console object provides access to the browser/Node.js debugging console.'
                },
                {
                    code: '.log',
                    explanation: 'The log method outputs a message to the console.'
                },
                {
                    code: '("Hello, World!")',
                    explanation: 'The value to print. Can be a string, number, variable, or any expression.'
                },
                {
                    code: ';',
                    explanation: 'Semicolon ends the statement.'
                }
            ],
            tip: 'You can log multiple values: console.log("Score:", score, "Level:", level);',
            hint: 'Make sure to use parentheses () and quotes around the string.'
        },
        {
            id: 2,
            title: 'Logging Variables',
            instructionTitle: 'Outputting Variable Values',
            description: 'You can output variable values and combine them with text using <strong>template literals</strong> (backticks with ${}).',
            expectedCode: 'let name: string = "Alex";\nconsole.log(`Welcome, ${name}!`);',
            output: '// Terminal output:\nWelcome, Alex!',
            detailedExplanation: '<strong>What this does:</strong> First, we create a variable <code>name</code> with the value "Alex". Then we use a <strong>template literal</strong> (the backticks `) to create a string that includes the variable\'s value. The <code>${name}</code> syntax inserts the variable\'s value into the string. This is much cleaner than concatenating with + signs!',
            codeBreakdown: [
                {
                    code: 'let name: string = "Alex";',
                    explanation: 'Creates a string variable called name.'
                },
                {
                    code: '`Welcome, ${name}!`',
                    explanation: 'A TEMPLATE LITERAL using backticks. ${name} gets replaced with the variable\'s value.'
                },
                {
                    code: 'console.log(...)',
                    explanation: 'Outputs the resulting string to the console.'
                }
            ],
            tip: 'Template literals use backticks (`) not regular quotes. Find it next to the 1 key!',
            hint: 'Use backticks ` and ${variableName} to insert variables into strings.'
        },
        {
            id: 3,
            title: 'If Statement',
            instructionTitle: 'Making Decisions with If',
            description: 'The <strong>if statement</strong> executes code only when a condition is true. This is how programs make decisions.',
            expectedCode: 'let score: number = 85;\nif (score >= 70) {\n    console.log("You passed!");\n}',
            output: '// Terminal output:\nYou passed!',
            detailedExplanation: '<strong>What this does:</strong> First we set <code>score</code> to 85. The <code>if</code> statement checks if score is greater than or equal to 70. Since 85 >= 70 is true, the code inside the curly braces runs and prints "You passed!". If score was 60, nothing would print because the condition would be false.',
            codeBreakdown: [
                {
                    code: 'let score: number = 85;',
                    explanation: 'Creates a number variable with value 85.'
                },
                {
                    code: 'if (score >= 70)',
                    explanation: 'The IF keyword followed by a condition in parentheses. >= means "greater than or equal to".'
                },
                {
                    code: '{ ... }',
                    explanation: 'Curly braces contain the code to run when the condition is true.'
                },
                {
                    code: 'console.log("You passed!");',
                    explanation: 'This only runs if score >= 70.'
                }
            ],
            tip: 'Comparison operators: == (equal), != (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal)',
            hint: 'Make sure to include the curly braces {} even for single-line if statements.'
        },
        {
            id: 4,
            title: 'If-Else Statement',
            instructionTitle: 'Handling Both Cases',
            description: 'Add an <strong>else</strong> block to handle what happens when the condition is false.',
            expectedCode: 'let age: number = 16;\nif (age >= 18) {\n    console.log("Adult");\n} else {\n    console.log("Minor");\n}',
            output: '// Terminal output:\nMinor',
            detailedExplanation: '<strong>What this does:</strong> We check if age is 18 or older. Since age is 16, the condition <code>age >= 18</code> is false, so the code in the <code>else</code> block runs instead. The program will always execute either the if block OR the else block, never both. This ensures you handle all possibilities.',
            codeBreakdown: [
                {
                    code: 'let age: number = 16;',
                    explanation: 'Creates an age variable set to 16.'
                },
                {
                    code: 'if (age >= 18)',
                    explanation: 'Checks if age is 18 or more.'
                },
                {
                    code: 'else',
                    explanation: 'The ELSE keyword - runs when the if condition is false.'
                },
                {
                    code: 'console.log("Minor");',
                    explanation: 'This runs because 16 is not >= 18.'
                }
            ],
            tip: 'You can chain multiple conditions with "else if" for more complex logic.',
            hint: 'The else block doesn\'t have a condition - it catches everything the if misses.'
        },
        {
            id: 5,
            title: 'For Loop',
            instructionTitle: 'Repeating Code with For Loops',
            description: 'A <strong>for loop</strong> repeats code a specific number of times. Perfect for counting or iterating through ranges.',
            expectedCode: 'for (let i: number = 1; i <= 5; i++) {\n    console.log(i);\n}',
            output: '// Terminal output:\n1\n2\n3\n4\n5',
            detailedExplanation: '<strong>What this does:</strong> This loop prints numbers 1 through 5. The loop has three parts: <code>let i = 1</code> starts counting at 1, <code>i <= 5</code> continues while i is 5 or less, and <code>i++</code> adds 1 to i after each iteration. So: print 1, add 1 (i=2), print 2, add 1 (i=3)... until i becomes 6 and the loop stops.',
            codeBreakdown: [
                {
                    code: 'for',
                    explanation: 'The FOR keyword starts a counting loop.'
                },
                {
                    code: 'let i: number = 1',
                    explanation: 'INITIALIZATION: Create a counter variable starting at 1.'
                },
                {
                    code: 'i <= 5',
                    explanation: 'CONDITION: Keep looping while i is 5 or less.'
                },
                {
                    code: 'i++',
                    explanation: 'INCREMENT: Add 1 to i after each loop. Same as i = i + 1.'
                },
                {
                    code: 'console.log(i);',
                    explanation: 'The code to repeat - prints the current value of i.'
                }
            ],
            tip: 'i++ is shorthand for i = i + 1. You can also use i-- to count down!',
            hint: 'The three parts of a for loop are separated by semicolons.'
        },
        {
            id: 6,
            title: 'Looping Through Arrays',
            instructionTitle: 'For...Of Loop',
            description: 'The <strong>for...of</strong> loop is the cleanest way to iterate through every item in an array.',
            expectedCode: 'let colors: string[] = ["red", "green", "blue"];\nfor (let color of colors) {\n    console.log(color);\n}',
            output: '// Terminal output:\nred\ngreen\nblue',
            detailedExplanation: '<strong>What this does:</strong> Instead of using indexes (colors[0], colors[1], etc.), the <code>for...of</code> loop gives you each item directly. On each iteration, <code>color</code> holds the next item: first "red", then "green", then "blue". This is cleaner and less error-prone than traditional for loops with indexes.',
            codeBreakdown: [
                {
                    code: 'let colors: string[] = ["red", "green", "blue"];',
                    explanation: 'Creates an array with three color strings.'
                },
                {
                    code: 'for (let color of colors)',
                    explanation: 'FOR...OF loop: "color" will be each item from the "colors" array.'
                },
                {
                    code: 'console.log(color);',
                    explanation: 'Prints each color - no need to use colors[i]!'
                }
            ],
            tip: 'Use for...of for values, for...in for object keys/indexes.',
            hint: 'The variable "color" is declared with "let" and automatically gets each array item.'
        },
        {
            id: 7,
            title: 'Array Push Method',
            instructionTitle: 'Adding Items to Arrays',
            description: 'The <strong>push()</strong> method adds new items to the end of an array.',
            expectedCode: 'let fruits: string[] = ["apple", "banana"];\nfruits.push("orange");\nconsole.log(fruits);',
            output: '// Terminal output:\n["apple", "banana", "orange"]',
            detailedExplanation: '<strong>What this does:</strong> We start with an array containing "apple" and "banana". The <code>push()</code> method adds "orange" to the END of the array. The original array is modified (mutated) - we don\'t create a new array. After push, fruits has 3 items. You can push multiple items at once: <code>fruits.push("grape", "mango")</code>.',
            codeBreakdown: [
                {
                    code: 'let fruits: string[] = ["apple", "banana"];',
                    explanation: 'Creates an array with two fruits.'
                },
                {
                    code: 'fruits.push("orange");',
                    explanation: 'The PUSH method adds "orange" to the end of the array.'
                },
                {
                    code: 'console.log(fruits);',
                    explanation: 'Outputs the updated array with all three items.'
                }
            ],
            tip: 'push() returns the new length of the array. Use unshift() to add to the beginning.',
            hint: 'Call push() on the array variable, passing the new item as an argument.'
        },
        {
            id: 8,
            title: 'Array Length and Access',
            instructionTitle: 'Working with Array Items',
            description: 'Access array items by their index (starting at 0) and use <strong>.length</strong> to get the count.',
            expectedCode: 'let numbers: number[] = [10, 20, 30];\nconsole.log(numbers[0]);\nconsole.log(numbers.length);',
            output: '// Terminal output:\n10\n3',
            detailedExplanation: '<strong>What this does:</strong> Arrays are zero-indexed, meaning the first item is at index 0, second at index 1, etc. So <code>numbers[0]</code> gives us 10 (the first item). The <code>.length</code> property tells us how many items are in the array (3 items). Remember: the last item is always at index <code>length - 1</code>.',
            codeBreakdown: [
                {
                    code: 'let numbers: number[] = [10, 20, 30];',
                    explanation: 'Creates an array with three numbers.'
                },
                {
                    code: 'numbers[0]',
                    explanation: 'ACCESS by index: [0] gets the FIRST item (10). Arrays start at 0!'
                },
                {
                    code: 'numbers.length',
                    explanation: 'The LENGTH property returns how many items are in the array (3).'
                }
            ],
            tip: 'Last item: array[array.length - 1]. For [10,20,30], that\'s array[2] = 30.',
            hint: 'Square brackets [] access items by index. .length is a property, not a method.'
        },
        {
            id: 9,
            title: 'Array Filter Method',
            instructionTitle: 'Filtering Arrays',
            description: 'The <strong>filter()</strong> method creates a new array with only items that pass a test.',
            expectedCode: 'let scores: number[] = [45, 80, 65, 90, 55];\nlet passed = scores.filter(s => s >= 60);\nconsole.log(passed);',
            output: '// Terminal output:\n[80, 65, 90]',
            detailedExplanation: '<strong>What this does:</strong> We have an array of test scores. The <code>filter()</code> method goes through each score and keeps only the ones where the condition <code>s >= 60</code> is true. It returns a NEW array with just those values [80, 65, 90]. The original <code>scores</code> array is unchanged. The <code>s => s >= 60</code> is an arrow function that tests each item.',
            codeBreakdown: [
                {
                    code: 'let scores: number[] = [45, 80, 65, 90, 55];',
                    explanation: 'An array of test scores.'
                },
                {
                    code: '.filter()',
                    explanation: 'The FILTER method creates a new array with items that pass the test.'
                },
                {
                    code: 's => s >= 60',
                    explanation: 'An ARROW FUNCTION: for each score "s", return true if s >= 60.'
                },
                {
                    code: 'let passed = ...',
                    explanation: 'TypeScript infers this is number[] since we\'re filtering numbers.'
                }
            ],
            tip: 'filter() doesn\'t modify the original array - it creates a new one.',
            hint: 'The arrow function s => s >= 60 is shorthand for function(s) { return s >= 60; }'
        },
        {
            id: 10,
            title: 'Array Map Method',
            instructionTitle: 'Transforming Arrays',
            description: 'The <strong>map()</strong> method creates a new array by transforming each item.',
            expectedCode: 'let prices: number[] = [10, 20, 30];\nlet doubled = prices.map(p => p * 2);\nconsole.log(doubled);',
            output: '// Terminal output:\n[20, 40, 60]',
            detailedExplanation: '<strong>What this does:</strong> The <code>map()</code> method goes through each item in the array and applies a transformation. Here, each price <code>p</code> is multiplied by 2. It returns a NEW array with the transformed values [20, 40, 60]. Unlike filter (which removes items), map always returns an array with the same number of items - just transformed.',
            codeBreakdown: [
                {
                    code: 'let prices: number[] = [10, 20, 30];',
                    explanation: 'An array of prices.'
                },
                {
                    code: '.map()',
                    explanation: 'The MAP method transforms each item and returns a new array.'
                },
                {
                    code: 'p => p * 2',
                    explanation: 'For each price "p", multiply it by 2.'
                },
                {
                    code: 'let doubled',
                    explanation: 'The new array with transformed values.'
                }
            ],
            tip: 'Chain methods: prices.filter(p => p > 15).map(p => p * 2) filters then transforms!',
            hint: 'Map returns a new array with the same length as the original.'
        }
    ]
};
// Initialize the walkthrough when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore - WalkthroughEngine is loaded from walkthrough-engine.js
    new WalkthroughEngine(typescriptEssentialsConfig);
});
