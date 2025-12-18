"use strict";
/**
 * React State Management Walkthrough - Step definitions
 * Each step teaches state patterns, Context API, and lifting state
 */
// Define the walkthrough configuration
const reactStateConfig = {
    id: 'react-state',
    title: 'State Management',
    steps: [
        {
            id: 1,
            title: 'Creating Context',
            instructionTitle: 'The React Context API',
            description: 'Context provides a way to pass data through the component tree without passing props manually at every level. First, <strong>create a context</strong>.',
            expectedCode: 'import { createContext } from "react";',
            output: '// createContext creates a Context object\n// Components can subscribe to this Context\n// Avoid "prop drilling" through many levels!',
            detailedExplanation: '<strong>Why Context?</strong> When you have data that many components need (theme, user, language), passing props through every level is tedious ("prop drilling"). Context lets you share values like these without explicitly passing props through every component in the tree.',
            codeBreakdown: [
                {
                    code: 'import',
                    explanation: 'ES6 import to bring in React functionality.'
                },
                {
                    code: '{ createContext }',
                    explanation: 'Named import for the function that creates a Context object.'
                },
                {
                    code: 'from "react"',
                    explanation: 'createContext is part of the React core library.'
                }
            ],
            tip: 'Context is designed to share data that is "global" for a tree of components!',
            hint: 'Type: import { createContext } from "react";'
        },
        {
            id: 2,
            title: 'Defining the Context',
            instructionTitle: 'Creating a Theme Context',
            description: 'Call createContext with a default value. This value is used when a component doesn\'t have a matching Provider above it.',
            expectedCode: 'const ThemeContext = createContext("light");',
            output: '// Creates a Context with default value "light"\n// Export this to use in other files:\n// export const ThemeContext = createContext("light");',
            detailedExplanation: '<strong>Default Values:</strong> The argument to createContext is the default value. This is used when a component reads from context but there\'s no Provider above it in the tree. It\'s useful for testing components in isolation or when a Provider isn\'t required.',
            codeBreakdown: [
                {
                    code: 'const ThemeContext',
                    explanation: 'Name your context descriptively. Convention is to suffix with "Context".'
                },
                {
                    code: '= createContext("light")',
                    explanation: '"light" is the default value used when no Provider is found above.'
                }
            ],
            tip: 'Export the context so other components can import and use it!',
            hint: 'Type: const ThemeContext = createContext("light");'
        },
        {
            id: 3,
            title: 'Creating a Provider',
            instructionTitle: 'Providing Context Values',
            description: 'Wrap components with a <strong>Provider</strong> to make the context value available to all descendants.',
            expectedCode: 'function App() {\n    return (\n        <ThemeContext.Provider value="dark">\n            <Toolbar />\n        </ThemeContext.Provider>\n    );\n}',
            output: '// All components inside Provider can access "dark"\n// Toolbar and all its children can use this theme\n// Change value prop to update all consumers!',
            detailedExplanation: '<strong>How Providers Work:</strong> The Provider component accepts a value prop. All components below this Provider in the tree can read this value. When the value changes, all consuming components re-render. Providers can be nested - inner values override outer ones.',
            codeBreakdown: [
                {
                    code: '<ThemeContext.Provider',
                    explanation: 'Every Context object has a Provider component for providing values.'
                },
                {
                    code: 'value="dark"',
                    explanation: 'The value to make available to all descendants. Can be any type!'
                },
                {
                    code: '<Toolbar />',
                    explanation: 'This component (and all its children) can now access the theme.'
                }
            ],
            tip: 'Pass objects or state to Provider value for more complex shared data!',
            hint: 'Wrap Toolbar in ThemeContext.Provider with value="dark"'
        },
        {
            id: 4,
            title: 'Consuming Context',
            instructionTitle: 'The useContext Hook',
            description: 'The <strong>useContext</strong> hook is the modern way to consume context values in functional components.',
            expectedCode: 'import { useContext } from "react";\n\nfunction ThemedButton() {\n    const theme = useContext(ThemeContext);\n    return <button className={theme}>Click</button>;\n}',
            output: '// useContext(ThemeContext) returns "dark"\n// The button gets className="dark"\n// Component re-renders when context value changes!',
            detailedExplanation: '<strong>useContext Explained:</strong> useContext takes a Context object and returns its current value. React finds the nearest Provider above in the tree and uses its value. When the Provider value changes, all components using useContext will re-render with the new value.',
            codeBreakdown: [
                {
                    code: 'import { useContext }',
                    explanation: 'Import the hook from React.'
                },
                {
                    code: 'const theme = useContext(ThemeContext)',
                    explanation: 'Reads the current value from the nearest ThemeContext.Provider.'
                },
                {
                    code: 'className={theme}',
                    explanation: 'Uses the theme value ("dark") as the button\'s class name.'
                }
            ],
            tip: 'useContext always re-renders when context changes - optimize with useMemo if needed!',
            hint: 'Create ThemedButton that uses useContext to get the theme'
        },
        {
            id: 5,
            title: 'Lifting State Up',
            instructionTitle: 'Sharing State Between Components',
            description: 'When multiple components need the same changing data, <strong>lift the state up</strong> to their closest common ancestor.',
            expectedCode: 'function Parent() {\n    const [value, setValue] = useState("");\n    return (\n        <>\n            <Input value={value} onChange={setValue} />\n            <Display value={value} />\n        </>\n    );\n}',
            output: '// Parent owns the state\n// Input updates it via onChange prop\n// Display reads it via value prop\n// Both components stay in sync!',
            detailedExplanation: '<strong>Lifting State Pattern:</strong> Instead of duplicating state in Input and Display, we "lift" it to Parent. Parent passes the value down as props and a setter function to update it. This is React\'s recommended way to share state between sibling components. It keeps a single source of truth!',
            codeBreakdown: [
                {
                    code: 'const [value, setValue] = useState("")',
                    explanation: 'State lives in the parent - the "single source of truth".'
                },
                {
                    code: '<Input value={value} onChange={setValue} />',
                    explanation: 'Pass both the value and the setter to Input component.'
                },
                {
                    code: '<Display value={value} />',
                    explanation: 'Display receives the same value - stays synchronized with Input.'
                }
            ],
            tip: 'Find the closest common ancestor of components that need shared state!',
            hint: 'Create Parent with state, passing value and setter to child components'
        }
    ]
};
// Initialize the walkthrough engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(reactStateConfig);
});
