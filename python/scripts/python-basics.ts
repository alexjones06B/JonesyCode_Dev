/**
 * Python Basics Walkthrough - Step definitions
 * Each step teaches a fundamental Python concept
 */

// Define the walkthrough configuration
const pythonBasicsConfig: WalkthroughConfig = {
    id: 'python-basics',
    title: 'Python Basics',
    steps: [
        {
            id: 1,
            title: 'Your First Print Statement',
            instructionTitle: 'Hello, World!',
            description: 'Every programmer\'s journey starts with "Hello, World!" The <strong>print()</strong> function displays output to the console. Let\'s write your first line of Python!',
            expectedCode: 'print("Hello, World!")',
            output: 'Hello, World!',
            detailedExplanation: '<strong>What this does:</strong> The <code>print()</code> function is Python\'s way of showing output. Whatever you put inside the parentheses gets displayed. The text inside quotes is called a "string" - Python\'s way of representing text.',
            codeBreakdown: [
                {
                    code: 'print',
                    explanation: 'The print function - it outputs text to the console.'
                },
                {
                    code: '(',
                    explanation: 'Opening parenthesis - marks the start of the function\'s arguments.'
                },
                {
                    code: '"Hello, World!"',
                    explanation: 'A string (text) enclosed in double quotes. You can also use single quotes (\').'
                },
                {
                    code: ')',
                    explanation: 'Closing parenthesis - marks the end of the function\'s arguments.'
                }
            ],
            tip: 'Python uses parentheses () to call functions. No semicolons needed!',
            hint: 'Type: print("Hello, World!") - make sure to include the parentheses and quotes!',
            runnable: true
        },
        {
            id: 2,
            title: 'Creating a Variable',
            instructionTitle: 'Storing Data in Variables',
            description: 'Variables are like labeled containers that store data. In Python, you don\'t need to declare the type - Python figures it out automatically! Let\'s create a variable to store a name.',
            expectedCode: 'name = "Alex"',
            output: '# Variable created:\n# name = "Alex"',
            detailedExplanation: '<strong>What this does:</strong> This creates a variable called <code>name</code> and stores the text "Alex" in it. Unlike some languages, Python doesn\'t need <code>let</code>, <code>var</code>, or type declarations. Just pick a name, use <code>=</code>, and assign a value!',
            codeBreakdown: [
                {
                    code: 'name',
                    explanation: 'The variable name. Use lowercase letters and underscores (snake_case) for variable names.'
                },
                {
                    code: '=',
                    explanation: 'The assignment operator. It stores the value on the right into the variable on the left.'
                },
                {
                    code: '"Alex"',
                    explanation: 'The string value being assigned. Strings can use single (\') or double (") quotes.'
                }
            ],
            tip: 'Python uses snake_case for variable names (like my_variable), not camelCase.',
            hint: 'Type: name = "Alex" - no special keywords needed!',
            runnable: true
        },
        {
            id: 3,
            title: 'Using Variables with Print',
            instructionTitle: 'Displaying Variable Values',
            description: 'Now let\'s combine what we learned. We can print the value stored in a variable by passing it to the <strong>print()</strong> function - no quotes around the variable name!',
            expectedCode: 'print(name)',
            output: 'Alex',
            detailedExplanation: '<strong>What this does:</strong> This prints the <em>value</em> stored in the variable <code>name</code>, not the word "name" itself. Notice there are no quotes around <code>name</code> - that\'s how Python knows to look up the variable\'s value.',
            codeBreakdown: [
                {
                    code: 'print',
                    explanation: 'The print function to display output.'
                },
                {
                    code: '(name)',
                    explanation: 'Passing the variable "name" (no quotes!) so Python prints its value, not the word "name".'
                }
            ],
            tip: 'With quotes: print("name") outputs "name". Without quotes: print(name) outputs the variable\'s value.',
            hint: 'Type: print(name) - don\'t put quotes around the variable name!',
            runnable: true
        },
        {
            id: 4,
            title: 'Working with Numbers',
            instructionTitle: 'Integer Variables',
            description: 'Python handles numbers without any special syntax. Let\'s create a variable to store a whole number (an integer). No quotes needed for numbers!',
            expectedCode: 'age = 25',
            output: '# Variable created:\n# age = 25\n# type: int (integer)',
            detailedExplanation: '<strong>What this does:</strong> Creates a variable <code>age</code> with the integer value 25. Python automatically knows this is a number because there are no quotes. You can do math with it: <code>age + 5</code> would give you 30.',
            codeBreakdown: [
                {
                    code: 'age',
                    explanation: 'A descriptive variable name for storing an age value.'
                },
                {
                    code: '=',
                    explanation: 'Assignment operator.'
                },
                {
                    code: '25',
                    explanation: 'An integer (whole number). No quotes = number. With quotes ("25") = text.'
                }
            ],
            tip: '25 is a number, but "25" is a string. They behave very differently!',
            hint: 'Type: age = 25 - remember, no quotes around numbers!',
            runnable: true
        },
        {
            id: 5,
            title: 'Basic Arithmetic',
            instructionTitle: 'Doing Math in Python',
            description: 'Python is great at math! Let\'s calculate a value and store the result. We can use <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> and more.',
            expectedCode: 'total = 10 + 5',
            output: '# Variable created:\n# total = 15',
            detailedExplanation: '<strong>What this does:</strong> Python evaluates <code>10 + 5</code> first (getting 15), then stores that result in the variable <code>total</code>. You can use: <code>+</code> (add), <code>-</code> (subtract), <code>*</code> (multiply), <code>/</code> (divide), <code>**</code> (power), <code>//</code> (floor divide), <code>%</code> (remainder).',
            codeBreakdown: [
                {
                    code: 'total',
                    explanation: 'Variable to store the result.'
                },
                {
                    code: '=',
                    explanation: 'Assignment operator.'
                },
                {
                    code: '10 + 5',
                    explanation: 'An expression that adds 10 and 5. Python calculates this FIRST, then assigns the result.'
                }
            ],
            tip: 'Python follows standard math order of operations (PEMDAS). Use parentheses to control order.',
            hint: 'Type: total = 10 + 5',
            runnable: true
        },
        {
            id: 6,
            title: 'String Concatenation',
            instructionTitle: 'Joining Strings Together',
            description: 'You can combine strings using the <code>+</code> operator. This is called concatenation. Let\'s join a greeting with a name!',
            expectedCode: 'greeting = "Hello, " + "Python!"',
            output: '# greeting = "Hello, Python!"',
            detailedExplanation: '<strong>What this does:</strong> The <code>+</code> operator joins two strings together end-to-end. "Hello, " + "Python!" becomes "Hello, Python!". Notice the space after the comma in the first string - without it, you\'d get "Hello,Python!".',
            codeBreakdown: [
                {
                    code: 'greeting',
                    explanation: 'Variable to store the combined string.'
                },
                {
                    code: '"Hello, "',
                    explanation: 'First string. Note the space after the comma!'
                },
                {
                    code: '+',
                    explanation: 'String concatenation operator - joins strings together.'
                },
                {
                    code: '"Python!"',
                    explanation: 'Second string to append.'
                }
            ],
            tip: 'The + operator does addition with numbers, but concatenation with strings!',
            hint: 'Type: greeting = "Hello, " + "Python!" - include the space after the comma!',
            runnable: true
        },
        {
            id: 7,
            title: 'F-Strings (Formatted Strings)',
            instructionTitle: 'Modern String Formatting',
            description: 'F-strings (formatted string literals) are Python\'s modern way to embed variables in strings. Just put <code>f</code> before the quotes and use <code>{variable}</code> to insert values!',
            expectedCode: 'message = f"Hello, {name}"',
            output: '# If name = "Alex":\n# message = "Hello, Alex"',
            detailedExplanation: '<strong>What this does:</strong> The <code>f</code> before the quotes makes this a "formatted string literal". Python will replace <code>{name}</code> with the actual value of the variable. F-strings can contain any expression: <code>f"2 + 2 = {2 + 2}"</code> works too!',
            codeBreakdown: [
                {
                    code: 'f',
                    explanation: 'The "f" prefix marks this as a formatted string literal (f-string).'
                },
                {
                    code: '"Hello, {name}"',
                    explanation: 'A string with a placeholder. {name} will be replaced with the variable\'s value.'
                },
                {
                    code: '{name}',
                    explanation: 'Curly braces contain the variable or expression to insert.'
                }
            ],
            tip: 'F-strings are cleaner than concatenation: f"Hello, {name}" instead of "Hello, " + name',
            hint: 'Type: message = f"Hello, {name}" - don\'t forget the f before the quotes!',
            runnable: true
        },
        {
            id: 8,
            title: 'Getting User Input',
            instructionTitle: 'Interactive Programs',
            description: 'The <strong>input()</strong> function lets users type something. It displays a prompt and waits for the user to enter text. Let\'s ask for a name!',
            expectedCode: 'user_name = input("Enter your name: ")',
            output: 'Enter your name: _\n# User types: Sarah\n# user_name = "Sarah"',
            detailedExplanation: '<strong>What this does:</strong> The <code>input()</code> function shows the prompt "Enter your name: " and waits. Whatever the user types gets stored in <code>user_name</code> as a string. Note: input() always returns a string, even if the user types a number!',
            codeBreakdown: [
                {
                    code: 'user_name',
                    explanation: 'Variable to store what the user types.'
                },
                {
                    code: 'input(',
                    explanation: 'The input function - pauses and waits for user input.'
                },
                {
                    code: '"Enter your name: "',
                    explanation: 'The prompt message shown to the user. The space at the end looks nicer!'
                },
                {
                    code: ')',
                    explanation: 'Closes the input function call.'
                }
            ],
            tip: 'input() always returns a string. Use int(input()) to get a number!',
            hint: 'Type: user_name = input("Enter your name: ") - include the space before the closing quote!',
            runnable: true
        }
    ]
};

// Initialize the walkthrough when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(pythonBasicsConfig);
});
