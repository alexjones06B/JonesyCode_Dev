/**
 * Python Functions Walkthrough - Step definitions
 * Learn how to define and use functions in Python
 */

const pythonFunctionsConfig: WalkthroughConfig = {
    id: 'python-functions',
    title: 'Python Functions',
    steps: [
        {
            id: 1,
            title: 'Defining a Simple Function',
            instructionTitle: 'Your First Function',
            description: 'Functions are reusable blocks of code. Define them with the <code>def</code> keyword, followed by the function name, parentheses, and a colon. The body is indented!',
            expectedCode: 'def greet():\n    print("Hello!")',
            output: '# Function defined!\n# Call with: greet()',
            detailedExplanation: '<strong>What this does:</strong> Creates a function named <code>greet</code> that, when called, will print "Hello!". The function is just defined here - it won\'t run until you call it with <code>greet()</code>. Python uses indentation (4 spaces) to define code blocks!',
            codeBreakdown: [
                {
                    code: 'def',
                    explanation: 'The "def" keyword starts a function definition.'
                },
                {
                    code: 'greet',
                    explanation: 'The function name. Use snake_case (lowercase with underscores).'
                },
                {
                    code: '():',
                    explanation: 'Empty parentheses = no parameters. The colon starts the function body.'
                },
                {
                    code: '    print("Hello!")',
                    explanation: 'The function body. MUST be indented with 4 spaces (or 1 tab)!'
                }
            ],
            tip: 'Press Enter after the colon, then Tab or 4 spaces to indent the body!',
            hint: 'Type: def greet(): then press Enter and indent print("Hello!")',
            runnable: true
        },
        {
            id: 2,
            title: 'Calling a Function',
            instructionTitle: 'Running Your Function',
            description: 'To execute a function, "call" it by using its name followed by parentheses. Let\'s call the greet function we just defined!',
            expectedCode: 'greet()',
            output: 'Hello!',
            detailedExplanation: '<strong>What this does:</strong> Executes the <code>greet</code> function. Python finds the function definition, runs the code inside it, and then continues. You can call a function as many times as you want!',
            codeBreakdown: [
                {
                    code: 'greet',
                    explanation: 'The function name to call.'
                },
                {
                    code: '()',
                    explanation: 'Parentheses are REQUIRED to call the function. Without them, you just reference it.'
                }
            ],
            tip: 'greet is the function object. greet() actually runs the function!',
            hint: 'Type: greet() - don\'t forget the parentheses!',
            runnable: true
        },
        {
            id: 3,
            title: 'Function with a Parameter',
            instructionTitle: 'Accepting Input',
            description: 'Parameters let functions accept input. Add a parameter name inside the parentheses. When calling, you pass an argument for that parameter!',
            expectedCode: 'def greet_person(name):\n    print(f"Hello, {name}!")',
            output: '# Function defined!\n# Call with: greet_person("Alex")',
            detailedExplanation: '<strong>What this does:</strong> Creates a function that accepts one parameter called <code>name</code>. When you call <code>greet_person("Alex")</code>, "Alex" becomes the value of <code>name</code> inside the function.',
            codeBreakdown: [
                {
                    code: 'def greet_person',
                    explanation: 'Define a new function with a descriptive name.'
                },
                {
                    code: '(name)',
                    explanation: 'A parameter named "name". It acts like a variable inside the function.'
                },
                {
                    code: ':',
                    explanation: 'Colon marks the start of the function body.'
                },
                {
                    code: '    print(f"Hello, {name}!")',
                    explanation: 'Uses the parameter in an f-string to create a personalized greeting.'
                }
            ],
            tip: 'Parameters are placeholders. Arguments are the actual values you pass in!',
            hint: 'Type: def greet_person(name): then Enter, indent, and print(f"Hello, {name}!")',
            runnable: true
        },
        {
            id: 4,
            title: 'Calling with an Argument',
            instructionTitle: 'Passing Values to Functions',
            description: 'Now call the function with an argument - the actual value to use. Put the argument inside the parentheses!',
            expectedCode: 'greet_person("Sarah")',
            output: 'Hello, Sarah!',
            detailedExplanation: '<strong>What this does:</strong> Calls <code>greet_person</code> and passes "Sarah" as the argument. Inside the function, <code>name</code> will have the value "Sarah", so it prints "Hello, Sarah!".',
            codeBreakdown: [
                {
                    code: 'greet_person',
                    explanation: 'The function to call.'
                },
                {
                    code: '("Sarah")',
                    explanation: 'The argument being passed. "Sarah" becomes the value of the "name" parameter.'
                }
            ],
            tip: 'You can call greet_person("Sarah"), greet_person("Bob"), etc. - different argument each time!',
            hint: 'Type: greet_person("Sarah")',
            runnable: true
        },
        {
            id: 5,
            title: 'Returning Values',
            instructionTitle: 'The return Statement',
            description: 'Functions can send values back using <code>return</code>. The returned value can be stored in a variable or used directly!',
            expectedCode: 'def add(a, b):\n    return a + b',
            output: '# Function defined!\n# Usage: result = add(5, 3)  # result = 8',
            detailedExplanation: '<strong>What this does:</strong> Creates a function that takes two parameters, adds them together, and returns the result. Unlike <code>print()</code> which just displays output, <code>return</code> sends the value back so you can use it.',
            codeBreakdown: [
                {
                    code: 'def add(a, b)',
                    explanation: 'Function with two parameters: a and b.'
                },
                {
                    code: ':',
                    explanation: 'Starts the function body.'
                },
                {
                    code: '    return',
                    explanation: 'The return keyword sends a value back to the caller.'
                },
                {
                    code: 'a + b',
                    explanation: 'The expression to evaluate and return.'
                }
            ],
            tip: 'print() shows output. return sends data back. Often you need both!',
            hint: 'Type: def add(a, b): then Enter, indent, and return a + b',
            runnable: true
        },
        {
            id: 6,
            title: 'Using a Return Value',
            instructionTitle: 'Storing the Result',
            description: 'When a function returns a value, you can capture it in a variable. Let\'s use our add function and store the result!',
            expectedCode: 'result = add(5, 3)',
            output: '# result = 8',
            detailedExplanation: '<strong>What this does:</strong> Calls <code>add(5, 3)</code>, which returns 8. That returned value is stored in the variable <code>result</code>. You could also use the return value directly: <code>print(add(5, 3))</code>.',
            codeBreakdown: [
                {
                    code: 'result',
                    explanation: 'Variable to store the returned value.'
                },
                {
                    code: '=',
                    explanation: 'Assignment operator.'
                },
                {
                    code: 'add(5, 3)',
                    explanation: 'Calls add with arguments 5 and 3. Returns 8.'
                }
            ],
            tip: 'Functions without a return statement return None by default.',
            hint: 'Type: result = add(5, 3)',
            runnable: true
        },
        {
            id: 7,
            title: 'Default Parameter Values',
            instructionTitle: 'Optional Parameters',
            description: 'Parameters can have default values. If no argument is passed, the default is used. Great for making parameters optional!',
            expectedCode: 'def greet_with_default(name="World"):\n    print(f"Hello, {name}!")',
            output: '# greet_with_default() → "Hello, World!"\n# greet_with_default("Alex") → "Hello, Alex!"',
            detailedExplanation: '<strong>What this does:</strong> Creates a function where <code>name</code> defaults to "World" if not provided. You can call <code>greet_with_default()</code> (uses default) or <code>greet_with_default("Alex")</code> (overrides default).',
            codeBreakdown: [
                {
                    code: 'def greet_with_default',
                    explanation: 'Function name.'
                },
                {
                    code: '(name="World")',
                    explanation: 'Parameter with a default value of "World".'
                },
                {
                    code: ':',
                    explanation: 'Starts function body.'
                },
                {
                    code: '    print(f"Hello, {name}!")',
                    explanation: 'Uses name, which is either passed in or defaults to "World".'
                }
            ],
            tip: 'Required parameters must come before optional ones in the function definition!',
            hint: 'Type: def greet_with_default(name="World"): then Enter and indent print(f"Hello, {name}!")',
            runnable: true
        },
        {
            id: 8,
            title: 'Multiple Return Values',
            instructionTitle: 'Returning Tuples',
            description: 'Python functions can return multiple values as a tuple. You can unpack them into separate variables!',
            expectedCode: 'def get_stats(numbers):\n    return min(numbers), max(numbers)',
            output: '# get_stats([1, 2, 3, 4, 5])\n# Returns: (1, 5)\n# smallest, largest = get_stats([1,2,3,4,5])',
            detailedExplanation: '<strong>What this does:</strong> Returns both the minimum and maximum of a list as a tuple. You can unpack the result: <code>smallest, largest = get_stats([1,2,3,4,5])</code> sets <code>smallest=1</code> and <code>largest=5</code>.',
            codeBreakdown: [
                {
                    code: 'def get_stats(numbers)',
                    explanation: 'Function accepting a list of numbers.'
                },
                {
                    code: ':',
                    explanation: 'Starts function body.'
                },
                {
                    code: '    return min(numbers), max(numbers)',
                    explanation: 'Returns two values separated by comma - creates a tuple automatically!'
                }
            ],
            tip: 'Python\'s min() and max() are built-in functions that work on any iterable!',
            hint: 'Type: def get_stats(numbers): then Enter, indent, return min(numbers), max(numbers)',
            runnable: true
        }
    ]
};

// Initialize the walkthrough when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(pythonFunctionsConfig);
});
