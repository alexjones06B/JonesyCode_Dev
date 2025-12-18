/**
 * React Basics Walkthrough - Step definitions
 * Each step teaches fundamental React concepts about JSX and project structure
 */

// Define the walkthrough configuration
const reactBasicsConfig: WalkthroughConfig = {
    id: 'react-basics',
    title: 'React Basics',
    steps: [
        {
            id: 1,
            title: 'Creating a Functional Component',
            instructionTitle: 'Your First React Component',
            description: 'In React, components are the building blocks of your UI. A <strong>functional component</strong> is simply a JavaScript function that returns JSX (a syntax extension that looks like HTML).',
            expectedCode: 'function App() {',
            output: '// This creates a component named "App"\n// React will call this function to render your UI\n// The component name must start with a capital letter',
            detailedExplanation: '<strong>What This Does:</strong> This line defines a functional component called App. In React, components are functions that return what should appear on the screen. The capital letter in "App" is required - React uses this to distinguish components from regular HTML elements.',
            codeBreakdown: [
                {
                    code: 'function',
                    explanation: 'We use the function keyword to create a component. You can also use arrow functions.'
                },
                {
                    code: 'App',
                    explanation: 'The component name MUST start with a capital letter. React treats lowercase as HTML elements.'
                },
                {
                    code: '() {',
                    explanation: 'Parentheses for parameters (props go here) and opening curly brace for the function body.'
                }
            ],
            tip: 'Component names must start with a capital letter! React uses this to distinguish components from HTML tags.',
            hint: 'Type: function App() {'
        },
        {
            id: 2,
            title: 'Returning JSX',
            instructionTitle: 'The Return Statement',
            description: 'Every React component must <strong>return</strong> something - usually JSX. The return statement tells React what to display on the screen.',
            expectedCode: '    return (',
            output: '// The return statement outputs JSX\n// Parentheses allow multi-line JSX\n// Whatever you return appears in the browser',
            detailedExplanation: '<strong>Why Parentheses?</strong> The parentheses after return allow us to write JSX across multiple lines. Without them, JavaScript would insert an automatic semicolon after return and your component would return undefined!',
            codeBreakdown: [
                {
                    code: 'return',
                    explanation: 'Returns the JSX that React should render to the DOM.'
                },
                {
                    code: '(',
                    explanation: 'Opening parenthesis allows multi-line JSX. This prevents automatic semicolon insertion issues.'
                }
            ],
            tip: 'Always use parentheses when returning multi-line JSX to avoid automatic semicolon insertion issues!',
            hint: 'Use 4 spaces for indentation, then return ('
        },
        {
            id: 3,
            title: 'Writing JSX',
            instructionTitle: 'Your First JSX Element',
            description: 'JSX looks like HTML but it\'s actually JavaScript. Here we create a <strong>div</strong> element with some text inside.',
            expectedCode: '        <div>Hello, React!</div>',
            output: '// This JSX compiles to:\n// React.createElement("div", null, "Hello, React!")\n// \n// In the browser you\'ll see:\n// Hello, React!',
            detailedExplanation: '<strong>JSX is Syntactic Sugar:</strong> Under the hood, JSX is transformed into React.createElement() calls. This makes writing UI code more intuitive - you write something that looks like HTML, but it\'s actually creating JavaScript objects that React uses to build the real DOM.',
            codeBreakdown: [
                {
                    code: '<div>',
                    explanation: 'Opening tag for a div element. In JSX, this becomes a React.createElement call.'
                },
                {
                    code: 'Hello, React!',
                    explanation: 'Text content inside the element. This is the children of the div.'
                },
                {
                    code: '</div>',
                    explanation: 'Closing tag. All JSX elements must be properly closed.'
                }
            ],
            tip: 'JSX must have exactly ONE root element. Use a div or React Fragment (<></>) to wrap multiple elements!',
            hint: 'Use 8 spaces indentation: <div>Hello, React!</div>'
        },
        {
            id: 4,
            title: 'Closing the Return',
            instructionTitle: 'Complete the Return Statement',
            description: 'Close the parentheses and the function to complete your component definition.',
            expectedCode: '    );\n}',
            output: '// Component is now complete!\n// You can use it like: <App />\n// React will render "Hello, React!" to the page',
            detailedExplanation: '<strong>Component Complete:</strong> Your App component is now a valid React component. It can be imported and used in other components, or rendered to the DOM using ReactDOM.render() or createRoot().',
            codeBreakdown: [
                {
                    code: ');',
                    explanation: 'Closes the return statement\'s parentheses with a semicolon.'
                },
                {
                    code: '}',
                    explanation: 'Closes the function body, completing the component definition.'
                }
            ],
            tip: 'A complete component can now be used anywhere with <App /> syntax!',
            hint: 'Close with ); on one line, then } on the next'
        },
        {
            id: 5,
            title: 'Exporting the Component',
            instructionTitle: 'Making Your Component Available',
            description: 'To use your component in other files, you need to <strong>export</strong> it. The default export allows importing without curly braces.',
            expectedCode: 'export default App;',
            output: '// Now you can import this component:\n// import App from "./App";\n// \n// And use it in another component:\n// <App />',
            detailedExplanation: '<strong>Default vs Named Exports:</strong> Using "export default" means this is the main thing exported from this file. You can import it with any name: import MyApp from "./App". Named exports (without default) require curly braces: import { App } from "./App".',
            codeBreakdown: [
                {
                    code: 'export',
                    explanation: 'Makes this component available to other files that import from this module.'
                },
                {
                    code: 'default',
                    explanation: 'Marks this as the default export - can be imported without curly braces.'
                },
                {
                    code: 'App',
                    explanation: 'The component we\'re exporting.'
                }
            ],
            tip: 'Each file can have only ONE default export, but multiple named exports!',
            hint: 'Type: export default App;'
        },
        {
            id: 6,
            title: 'Using JavaScript in JSX',
            instructionTitle: 'Embedding Expressions',
            description: 'One of JSX\'s superpowers is embedding JavaScript expressions using <strong>curly braces {}</strong>. Let\'s create a variable and display it.',
            expectedCode: 'const name = "React Developer";',
            output: '// This creates a variable we can use in JSX\n// In your JSX, use: {name}\n// Output: React Developer',
            detailedExplanation: '<strong>Dynamic Content:</strong> Any valid JavaScript expression can go inside curly braces in JSX: variables, function calls, ternary operators, array methods like map(), and more. This is what makes React components dynamic!',
            codeBreakdown: [
                {
                    code: 'const',
                    explanation: 'Declares a constant variable - its value cannot be reassigned.'
                },
                {
                    code: 'name',
                    explanation: 'Variable name that can be referenced in JSX using {name}.'
                },
                {
                    code: '= "React Developer"',
                    explanation: 'The string value we want to display in our component.'
                }
            ],
            tip: 'Use curly braces {} to embed any JavaScript expression in JSX: {name}, {2 + 2}, {user.email}',
            hint: 'Type: const name = "React Developer";'
        }
    ]
};

// Initialize the walkthrough engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(reactBasicsConfig);
});
