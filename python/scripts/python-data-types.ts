/**
 * Python Data Types Walkthrough - Step definitions
 * Learn about Python's built-in data types
 */

const pythonDataTypesConfig: WalkthroughConfig = {
    id: 'python-data-types',
    title: 'Python Data Types',
    steps: [
        {
            id: 1,
            title: 'Creating a List',
            instructionTitle: 'Lists - Ordered Collections',
            description: 'Lists are ordered, changeable collections that can hold multiple items. They\'re one of Python\'s most versatile data structures. Use square brackets <code>[]</code> to create one!',
            expectedCode: 'fruits = ["apple", "banana", "cherry"]',
            output: '# fruits = ["apple", "banana", "cherry"]\n# Length: 3 items',
            detailedExplanation: '<strong>What this does:</strong> Creates a list called <code>fruits</code> containing three strings. Lists preserve order (apple is first, cherry is last) and can hold any mix of data types. You can add, remove, and change items after creation.',
            codeBreakdown: [
                {
                    code: 'fruits',
                    explanation: 'Variable name for our list.'
                },
                {
                    code: '[',
                    explanation: 'Opening square bracket - starts a list.'
                },
                {
                    code: '"apple", "banana", "cherry"',
                    explanation: 'List items separated by commas. Each item is a string.'
                },
                {
                    code: ']',
                    explanation: 'Closing square bracket - ends the list.'
                }
            ],
            tip: 'Lists use square brackets [], while function calls use parentheses ().',
            hint: 'Type: fruits = ["apple", "banana", "cherry"]',
            runnable: true
        },
        {
            id: 2,
            title: 'Accessing List Items',
            instructionTitle: 'Index-Based Access',
            description: 'Access list items by their index (position). Python uses <strong>zero-based indexing</strong>, meaning the first item is at index 0, not 1!',
            expectedCode: 'first_fruit = fruits[0]',
            output: '# first_fruit = "apple"\n# Index 0 is the FIRST item',
            detailedExplanation: '<strong>What this does:</strong> Gets the item at index 0 (the first item) from the <code>fruits</code> list and stores it in <code>first_fruit</code>. Indexes: 0="apple", 1="banana", 2="cherry". You can also use negative indexes: -1 is the last item!',
            codeBreakdown: [
                {
                    code: 'first_fruit',
                    explanation: 'Variable to store the accessed item.'
                },
                {
                    code: 'fruits',
                    explanation: 'The list we\'re accessing.'
                },
                {
                    code: '[0]',
                    explanation: 'Square brackets with index. 0 = first item, 1 = second item, etc.'
                }
            ],
            tip: 'Use fruits[-1] to get the LAST item without knowing the list length!',
            hint: 'Type: first_fruit = fruits[0] - remember indexing starts at 0!',
            runnable: true
        },
        {
            id: 3,
            title: 'Adding to a List',
            instructionTitle: 'The append() Method',
            description: 'Use the <strong>append()</strong> method to add a new item to the end of a list. Methods are functions that belong to objects - call them with a dot!',
            expectedCode: 'fruits.append("orange")',
            output: '# fruits is now:\n# ["apple", "banana", "cherry", "orange"]',
            detailedExplanation: '<strong>What this does:</strong> Adds "orange" to the end of the <code>fruits</code> list. The <code>append()</code> method modifies the original list - it doesn\'t create a new one. Other useful methods: <code>insert()</code>, <code>extend()</code>, <code>remove()</code>.',
            codeBreakdown: [
                {
                    code: 'fruits',
                    explanation: 'The list we want to modify.'
                },
                {
                    code: '.',
                    explanation: 'Dot notation - accesses methods/attributes of the object.'
                },
                {
                    code: 'append',
                    explanation: 'A method that adds an item to the end of a list.'
                },
                {
                    code: '("orange")',
                    explanation: 'The item to add. Can be any data type!'
                }
            ],
            tip: 'append() adds ONE item. Use extend() to add multiple items from another list.',
            hint: 'Type: fruits.append("orange") - note the dot before append!',
            runnable: true
        },
        {
            id: 4,
            title: 'Creating a Dictionary',
            instructionTitle: 'Key-Value Pairs',
            description: 'Dictionaries store data in <strong>key-value pairs</strong>. Unlike lists (which use numeric indexes), dictionaries let you access values by meaningful keys. Use curly braces <code>{}</code>!',
            expectedCode: 'person = {"name": "Alex", "age": 25}',
            output: '# person = {"name": "Alex", "age": 25}\n# Access: person["name"] → "Alex"',
            detailedExplanation: '<strong>What this does:</strong> Creates a dictionary with two key-value pairs. The key "name" maps to "Alex", and "age" maps to 25. Keys must be unique and immutable (usually strings or numbers). Values can be anything!',
            codeBreakdown: [
                {
                    code: 'person',
                    explanation: 'Variable name for our dictionary.'
                },
                {
                    code: '{',
                    explanation: 'Opening curly brace - starts a dictionary.'
                },
                {
                    code: '"name": "Alex"',
                    explanation: 'A key-value pair. "name" is the key, "Alex" is the value.'
                },
                {
                    code: ',',
                    explanation: 'Comma separates key-value pairs.'
                },
                {
                    code: '"age": 25',
                    explanation: 'Another pair. Note: 25 is a number, not a string!'
                },
                {
                    code: '}',
                    explanation: 'Closing curly brace - ends the dictionary.'
                }
            ],
            tip: 'Use dictionaries when you want to look up values by name, not by position!',
            hint: 'Type: person = {"name": "Alex", "age": 25} - colons separate keys from values!',
            runnable: true
        },
        {
            id: 5,
            title: 'Accessing Dictionary Values',
            instructionTitle: 'Looking Up by Key',
            description: 'Access dictionary values using their keys inside square brackets. Unlike lists that use numbers, dictionaries use the key name!',
            expectedCode: 'person_name = person["name"]',
            output: '# person_name = "Alex"',
            detailedExplanation: '<strong>What this does:</strong> Gets the value associated with the key "name" from the <code>person</code> dictionary. If the key doesn\'t exist, you\'ll get a KeyError. Use <code>person.get("name")</code> for safer access that returns None instead of crashing.',
            codeBreakdown: [
                {
                    code: 'person_name',
                    explanation: 'Variable to store the retrieved value.'
                },
                {
                    code: 'person',
                    explanation: 'The dictionary we\'re accessing.'
                },
                {
                    code: '["name"]',
                    explanation: 'The key to look up. Must match exactly (case-sensitive)!'
                }
            ],
            tip: 'Use person.get("name", "Unknown") to provide a default value if key doesn\'t exist.',
            hint: 'Type: person_name = person["name"]',
            runnable: true
        },
        {
            id: 6,
            title: 'Boolean Values',
            instructionTitle: 'True and False',
            description: 'Booleans represent truth values: <code>True</code> or <code>False</code>. They\'re essential for conditions and control flow. Note the capital T and F!',
            expectedCode: 'is_active = True',
            output: '# is_active = True\n# type: bool',
            detailedExplanation: '<strong>What this does:</strong> Creates a boolean variable set to <code>True</code>. Booleans are commonly used with if statements, while loops, and comparisons. Comparisons like <code>5 > 3</code> return booleans automatically.',
            codeBreakdown: [
                {
                    code: 'is_active',
                    explanation: 'Boolean variable names often start with "is_", "has_", or "can_" for clarity.'
                },
                {
                    code: '=',
                    explanation: 'Assignment operator.'
                },
                {
                    code: 'True',
                    explanation: 'Boolean True - must be capitalized! Also: False (not false).'
                }
            ],
            tip: 'Python uses True/False (capitalized), not true/false like JavaScript.',
            hint: 'Type: is_active = True - with a capital T!',
            runnable: true
        },
        {
            id: 7,
            title: 'Checking Types',
            instructionTitle: 'The type() Function',
            description: 'Python\'s <strong>type()</strong> function tells you what kind of data you\'re working with. Super useful for debugging and learning!',
            expectedCode: 'print(type(fruits))',
            output: "<class 'list'>",
            detailedExplanation: '<strong>What this does:</strong> The <code>type()</code> function returns the type/class of any object. Common types: <code>str</code> (string), <code>int</code> (integer), <code>float</code> (decimal), <code>bool</code> (boolean), <code>list</code>, <code>dict</code> (dictionary).',
            codeBreakdown: [
                {
                    code: 'print',
                    explanation: 'We wrap in print() to see the output.'
                },
                {
                    code: 'type',
                    explanation: 'Built-in function that returns an object\'s type.'
                },
                {
                    code: '(fruits)',
                    explanation: 'The variable we want to check. Returns <class \'list\'>.'
                }
            ],
            tip: 'Use type() when you\'re not sure what kind of data you have!',
            hint: 'Type: print(type(fruits))',
            runnable: true
        },
        {
            id: 8,
            title: 'Creating a Tuple',
            instructionTitle: 'Immutable Sequences',
            description: 'Tuples are like lists, but <strong>immutable</strong> - you can\'t change them after creation. Use parentheses <code>()</code> instead of square brackets!',
            expectedCode: 'coordinates = (10, 20)',
            output: '# coordinates = (10, 20)\n# coordinates[0] = 10\n# Cannot modify after creation!',
            detailedExplanation: '<strong>What this does:</strong> Creates a tuple with two values. Tuples are useful for data that shouldn\'t change (like x,y coordinates or RGB colors). They\'re also slightly faster than lists and can be used as dictionary keys.',
            codeBreakdown: [
                {
                    code: 'coordinates',
                    explanation: 'Variable name for our tuple.'
                },
                {
                    code: '(',
                    explanation: 'Opening parenthesis - starts a tuple.'
                },
                {
                    code: '10, 20',
                    explanation: 'The tuple values, separated by commas.'
                },
                {
                    code: ')',
                    explanation: 'Closing parenthesis - ends the tuple.'
                }
            ],
            tip: 'For a single-item tuple, add a trailing comma: (10,) not (10)!',
            hint: 'Type: coordinates = (10, 20)',
            runnable: true
        }
    ]
};

// Initialize the walkthrough when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(pythonDataTypesConfig);
});
