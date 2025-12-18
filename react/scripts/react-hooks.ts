/**
 * React Hooks Walkthrough - Step definitions
 * Each step teaches fundamental React hooks for state and side effects
 */

// Define the walkthrough configuration
const reactHooksConfig: WalkthroughConfig = {
    id: 'react-hooks',
    title: 'React Hooks',
    steps: [
        {
            id: 1,
            title: 'Importing useState',
            instructionTitle: 'Getting Started with State',
            description: 'The <strong>useState</strong> hook lets functional components have their own state. First, we need to import it from React.',
            expectedCode: 'import { useState } from "react";',
            output: '// useState is a named export from React\n// It returns an array: [currentValue, setterFunction]\n// This is the most commonly used hook!',
            detailedExplanation: '<strong>Why Hooks?</strong> Before hooks, only class components could have state. Hooks let functional components use state and other React features. They must be called at the top level of your component - never inside loops, conditions, or nested functions.',
            codeBreakdown: [
                {
                    code: 'import',
                    explanation: 'ES6 import statement to bring in functionality from another module.'
                },
                {
                    code: '{ useState }',
                    explanation: 'Named import - useState is not the default export, so we use curly braces.'
                },
                {
                    code: 'from "react"',
                    explanation: 'The React library provides useState and all other hooks.'
                }
            ],
            tip: 'All hooks start with "use" - this naming convention helps React identify them!',
            hint: 'Type: import { useState } from "react";'
        },
        {
            id: 2,
            title: 'Declaring State',
            instructionTitle: 'Using useState Hook',
            description: 'useState returns an array with two elements: the <strong>current value</strong> and a <strong>function to update it</strong>. We use array destructuring to capture both.',
            expectedCode: 'const [count, setCount] = useState(0);',
            output: '// count = 0 (initial value)\n// setCount = function to update count\n// \n// When setCount is called, component re-renders!',
            detailedExplanation: '<strong>How useState Works:</strong> Calling useState(0) returns [0, setterFunction]. We destructure this into count (the current value) and setCount (the updater). When you call setCount(5), React re-renders the component with count = 5. The initial value (0 here) is only used on the first render.',
            codeBreakdown: [
                {
                    code: 'const [count, setCount]',
                    explanation: 'Array destructuring captures both the value and setter. Name the setter "set" + valueName.'
                },
                {
                    code: '= useState(0)',
                    explanation: 'Calls the hook with initial value 0. This value is used only on first render.'
                }
            ],
            tip: 'Convention: if your state is called "count", name the setter "setCount"!',
            hint: 'Type: const [count, setCount] = useState(0);'
        },
        {
            id: 3,
            title: 'Updating State',
            instructionTitle: 'Creating a Click Handler',
            description: 'Create a function that calls the state setter. This will update the state and trigger a <strong>re-render</strong> of the component.',
            expectedCode: 'const increment = () => setCount(count + 1);',
            output: '// When called:\n// 1. setCount receives new value (count + 1)\n// 2. React schedules a re-render\n// 3. Component renders with new count value',
            detailedExplanation: '<strong>Immutable Updates:</strong> We never modify state directly (count++ is wrong!). Instead, we call the setter with a new value. For updates based on previous state, it\'s safer to use the functional form: setCount(prev => prev + 1). This ensures you\'re always working with the latest value.',
            codeBreakdown: [
                {
                    code: 'const increment',
                    explanation: 'A handler function we\'ll attach to a button click.'
                },
                {
                    code: '= () =>',
                    explanation: 'Arrow function syntax - concise way to define the function.'
                },
                {
                    code: 'setCount(count + 1)',
                    explanation: 'Calls the setter with the new value. React will re-render with this new count.'
                }
            ],
            tip: 'For updates based on previous state, use: setCount(prev => prev + 1)',
            hint: 'Type: const increment = () => setCount(count + 1);'
        },
        {
            id: 4,
            title: 'Attaching Event Handlers',
            instructionTitle: 'Handling Button Clicks',
            description: 'In JSX, we use <strong>camelCase</strong> for event attributes and pass functions as handlers. onClick receives the function reference, not a function call.',
            expectedCode: '<button onClick={increment}>Count: {count}</button>',
            output: '// Renders a button showing current count\n// Clicking the button:\n// 1. Calls increment function\n// 2. count increases by 1\n// 3. Button re-renders with new count',
            detailedExplanation: '<strong>Event Handling in React:</strong> Notice onClick uses camelCase (not onclick). We pass the function reference {increment}, not a function call {increment()}. If you pass increment(), it runs immediately on render! The function is only called when the event occurs.',
            codeBreakdown: [
                {
                    code: 'onClick=',
                    explanation: 'React event - camelCase version of HTML\'s onclick. Listens for click events.'
                },
                {
                    code: '{increment}',
                    explanation: 'Pass the function reference, NOT increment(). Function is called when clicked.'
                },
                {
                    code: '{count}',
                    explanation: 'Displays the current count value, updating on each re-render.'
                }
            ],
            tip: 'Pass function reference onClick={fn}, not function call onClick={fn()}!',
            hint: 'Type: <button onClick={increment}>Count: {count}</button>'
        },
        {
            id: 5,
            title: 'The useEffect Hook',
            instructionTitle: 'Handling Side Effects',
            description: '<strong>useEffect</strong> runs code after render - perfect for data fetching, subscriptions, or manually changing the DOM.',
            expectedCode: 'import { useState, useEffect } from "react";',
            output: '// useEffect is for side effects:\n// - Fetching data\n// - Setting up subscriptions\n// - Manually changing the DOM\n// - Timers and intervals',
            detailedExplanation: '<strong>What are Side Effects?</strong> Effects are anything that affects something outside the component: API calls, browser APIs, subscriptions. useEffect runs AFTER render, so the DOM is already updated when your effect runs. This replaces componentDidMount, componentDidUpdate, and componentWillUnmount from class components.',
            codeBreakdown: [
                {
                    code: 'import { useState, useEffect }',
                    explanation: 'Import both hooks - they\'re often used together.'
                },
                {
                    code: 'from "react"',
                    explanation: 'Both hooks come from the React package.'
                }
            ],
            tip: 'useEffect runs after every render by default. Use the dependency array to control when it runs!',
            hint: 'Add useEffect to your import: import { useState, useEffect } from "react";'
        },
        {
            id: 6,
            title: 'Using useEffect',
            instructionTitle: 'Effect with Dependencies',
            description: 'useEffect takes a function and a <strong>dependency array</strong>. The effect only re-runs when dependencies change.',
            expectedCode: 'useEffect(() => {\n    document.title = `Count: ${count}`;\n}, [count]);',
            output: '// This effect runs:\n// 1. After first render\n// 2. Whenever "count" changes\n// \n// Browser tab title updates to show count!',
            detailedExplanation: '<strong>Dependency Array Explained:</strong> The second argument controls when the effect runs. [count] means "re-run when count changes". An empty array [] means "run only once on mount". Omitting it means "run after every render". Always include all values from the component scope that the effect uses!',
            codeBreakdown: [
                {
                    code: 'useEffect(() => {',
                    explanation: 'First argument is a function containing your side effect code.'
                },
                {
                    code: 'document.title = `Count: ${count}`',
                    explanation: 'Side effect: updates the browser tab title with current count.'
                },
                {
                    code: '}, [count])',
                    explanation: 'Dependency array: effect re-runs only when count changes.'
                }
            ],
            tip: 'Empty array [] = run once on mount. No array = run every render. [dep] = run when dep changes.',
            hint: 'Create useEffect that updates document.title and depends on count'
        }
    ]
};

// Initialize the walkthrough engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(reactHooksConfig);
});
