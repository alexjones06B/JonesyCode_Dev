/**
 * Python Control Flow Walkthrough - Step definitions
 * Learn about if statements, loops, and control structures
 */
const pythonControlFlowConfig = {
    id: 'python-control-flow',
    title: 'Python Control Flow',
    steps: [
        {
            id: 1,
            title: 'If Statement',
            instructionTitle: 'Making Decisions',
            description: 'The <code>if</code> statement lets your code make decisions. If the condition is True, the indented code runs. No parentheses around the condition - just a colon!',
            expectedCode: 'if age >= 18:\n    print("You are an adult")',
            output: '# If age is 25:\n# Output: "You are an adult"\n# If age is 15:\n# (no output)',
            detailedExplanation: '<strong>What this does:</strong> Checks if <code>age</code> is 18 or greater. If True, it prints the message. If False, the indented code is skipped. Python uses indentation instead of curly braces to define code blocks!',
            codeBreakdown: [
                {
                    code: 'if',
                    explanation: 'The if keyword starts a conditional statement.'
                },
                {
                    code: 'age >= 18',
                    explanation: 'The condition to check. >= means "greater than or equal to".'
                },
                {
                    code: ':',
                    explanation: 'Colon marks the start of the if block.'
                },
                {
                    code: '    print("You are an adult")',
                    explanation: 'Indented code that runs ONLY if condition is True.'
                }
            ],
            tip: 'Comparison operators: == (equals), != (not equals), <, >, <=, >=',
            hint: 'Type: if age >= 18: then Enter and indent print("You are an adult")',
            runnable: true
        },
        {
            id: 2,
            title: 'If-Else Statement',
            instructionTitle: 'Two-Way Decisions',
            description: 'The <code>else</code> block runs when the if condition is False. It\'s the "otherwise" path!',
            expectedCode: 'if age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',
            output: '# If age is 25: "Adult"\n# If age is 15: "Minor"',
            detailedExplanation: '<strong>What this does:</strong> Checks the condition. If True, prints "Adult". Otherwise (else), prints "Minor". One of these two paths ALWAYS runs - never both, never neither.',
            codeBreakdown: [
                {
                    code: 'if age >= 18:',
                    explanation: 'The condition to check first.'
                },
                {
                    code: '    print("Adult")',
                    explanation: 'Runs if condition is True.'
                },
                {
                    code: 'else:',
                    explanation: 'The else keyword (not indented!) followed by colon.'
                },
                {
                    code: '    print("Minor")',
                    explanation: 'Runs if condition is False.'
                }
            ],
            tip: 'else must be at the same indentation level as its matching if!',
            hint: 'Make sure else: is not indented, and both print statements are indented!',
            runnable: true
        },
        {
            id: 3,
            title: 'Elif (Else If)',
            instructionTitle: 'Multiple Conditions',
            description: 'Use <code>elif</code> (short for "else if") to check multiple conditions. Python checks them in order and runs the first one that\'s True!',
            expectedCode: 'if score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelse:\n    print("C")',
            output: '# score = 95 → "A"\n# score = 85 → "B"\n# score = 75 → "C"',
            detailedExplanation: '<strong>What this does:</strong> Checks conditions in order. First >= 90? Print A. Else, >= 80? Print B. Otherwise, print C. As soon as one condition is True, the rest are skipped.',
            codeBreakdown: [
                {
                    code: 'if score >= 90:',
                    explanation: 'First condition checked.'
                },
                {
                    code: 'elif score >= 80:',
                    explanation: 'Only checked if the first condition was False.'
                },
                {
                    code: 'else:',
                    explanation: 'Runs if ALL above conditions were False.'
                }
            ],
            tip: 'Order matters! Put more specific conditions before general ones.',
            hint: 'elif (not "else if") is all one word, followed by a colon.',
            runnable: true
        },
        {
            id: 4,
            title: 'For Loop',
            instructionTitle: 'Iterating Over Items',
            description: 'The <code>for</code> loop iterates over each item in a sequence (like a list). The loop variable takes each value in turn!',
            expectedCode: 'for fruit in fruits:\n    print(fruit)',
            output: 'apple\nbanana\ncherry',
            detailedExplanation: '<strong>What this does:</strong> Goes through each item in the <code>fruits</code> list. On the first iteration, <code>fruit</code> is "apple". Then "banana". Then "cherry". The loop automatically stops when all items are processed.',
            codeBreakdown: [
                {
                    code: 'for',
                    explanation: 'The for keyword starts the loop.'
                },
                {
                    code: 'fruit',
                    explanation: 'Loop variable - holds the current item on each iteration.'
                },
                {
                    code: 'in',
                    explanation: 'The in keyword - means "each item inside..."'
                },
                {
                    code: 'fruits',
                    explanation: 'The sequence to iterate over.'
                },
                {
                    code: ':',
                    explanation: 'Colon starts the loop body.'
                },
                {
                    code: '    print(fruit)',
                    explanation: 'Indented code that runs for each item.'
                }
            ],
            tip: 'Name your loop variable meaningfully: "fruit in fruits", "name in names"',
            hint: 'Type: for fruit in fruits: then Enter and indent print(fruit)',
            runnable: true
        },
        {
            id: 5,
            title: 'Range Function',
            instructionTitle: 'Looping with Numbers',
            description: 'The <code>range()</code> function generates a sequence of numbers. Perfect for "do this N times" loops!',
            expectedCode: 'for i in range(5):\n    print(i)',
            output: '0\n1\n2\n3\n4',
            detailedExplanation: '<strong>What this does:</strong> <code>range(5)</code> generates numbers 0, 1, 2, 3, 4 (stops before 5!). The loop runs 5 times with <code>i</code> taking each value. Note: range starts at 0 by default.',
            codeBreakdown: [
                {
                    code: 'for i',
                    explanation: 'Common convention: use "i" for numeric loop variables.'
                },
                {
                    code: 'in range(5)',
                    explanation: 'Generates 0, 1, 2, 3, 4 (5 numbers, starting from 0).'
                },
                {
                    code: ':',
                    explanation: 'Starts loop body.'
                },
                {
                    code: '    print(i)',
                    explanation: 'Prints each number.'
                }
            ],
            tip: 'range(5) = 0-4. range(1, 6) = 1-5. range(0, 10, 2) = 0, 2, 4, 6, 8',
            hint: 'Type: for i in range(5): then Enter and indent print(i)',
            runnable: true
        },
        {
            id: 6,
            title: 'While Loop',
            instructionTitle: 'Repeat Until Done',
            description: 'A <code>while</code> loop keeps running as long as its condition is True. Be careful - make sure the condition eventually becomes False!',
            expectedCode: 'count = 0\nwhile count < 3:\n    print(count)\n    count += 1',
            output: '0\n1\n2',
            detailedExplanation: '<strong>What this does:</strong> Starts with count=0. While count is less than 3, it prints count and adds 1. When count becomes 3, the condition is False and the loop stops. The <code>+=</code> operator adds and assigns.',
            codeBreakdown: [
                {
                    code: 'count = 0',
                    explanation: 'Initialize the counter before the loop.'
                },
                {
                    code: 'while count < 3:',
                    explanation: 'Loop continues while this condition is True.'
                },
                {
                    code: '    print(count)',
                    explanation: 'Print current value.'
                },
                {
                    code: '    count += 1',
                    explanation: 'Increment count. Same as: count = count + 1'
                }
            ],
            tip: 'Always ensure your while condition will eventually become False, or you\'ll get an infinite loop!',
            hint: 'count += 1 must be inside the loop to avoid infinite looping!',
            runnable: true
        },
        {
            id: 7,
            title: 'Break Statement',
            instructionTitle: 'Exiting a Loop Early',
            description: 'The <code>break</code> statement immediately exits the loop. Useful when you\'ve found what you\'re looking for!',
            expectedCode: 'for num in range(10):\n    if num == 5:\n        break\n    print(num)',
            output: '0\n1\n2\n3\n4',
            detailedExplanation: '<strong>What this does:</strong> Loops through 0-9, but when num equals 5, <code>break</code> immediately exits the loop. Numbers 5-9 are never printed. Break is often used with a condition inside the loop.',
            codeBreakdown: [
                {
                    code: 'for num in range(10):',
                    explanation: 'Would normally loop 0-9.'
                },
                {
                    code: '    if num == 5:',
                    explanation: 'Check if we\'ve hit our exit condition.'
                },
                {
                    code: '        break',
                    explanation: 'Exit the loop immediately!'
                },
                {
                    code: '    print(num)',
                    explanation: 'Only runs if we didn\'t break.'
                }
            ],
            tip: 'break exits the innermost loop only. For nested loops, it exits one level.',
            hint: 'The break statement needs to be indented inside the if block!',
            runnable: true
        },
        {
            id: 8,
            title: 'Continue Statement',
            instructionTitle: 'Skip and Continue',
            description: 'The <code>continue</code> statement skips the rest of the current iteration and moves to the next one. The loop continues running!',
            expectedCode: 'for num in range(5):\n    if num == 2:\n        continue\n    print(num)',
            output: '0\n1\n3\n4',
            detailedExplanation: '<strong>What this does:</strong> Loops 0-4, but when num is 2, <code>continue</code> skips the print statement and moves to the next iteration. Notice 2 is missing from the output!',
            codeBreakdown: [
                {
                    code: 'for num in range(5):',
                    explanation: 'Loop through 0-4.'
                },
                {
                    code: '    if num == 2:',
                    explanation: 'Check if we should skip this iteration.'
                },
                {
                    code: '        continue',
                    explanation: 'Skip to the next iteration - don\'t run code below!'
                },
                {
                    code: '    print(num)',
                    explanation: 'Only runs if we didn\'t continue.'
                }
            ],
            tip: 'Use continue to skip items that don\'t meet your criteria without stopping the whole loop.',
            hint: 'continue skips the rest of the iteration, break exits the loop entirely.',
            runnable: true
        }
    ]
};
// Initialize the walkthrough when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(pythonControlFlowConfig);
});
