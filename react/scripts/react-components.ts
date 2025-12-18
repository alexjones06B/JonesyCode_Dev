/**
 * React Components & Props Walkthrough - Step definitions
 * Each step teaches how to build and compose React components
 */

// Define the walkthrough configuration
const reactComponentsConfig: WalkthroughConfig = {
    id: 'react-components',
    title: 'Components & Props',
    steps: [
        {
            id: 1,
            title: 'Creating a Component with Props',
            instructionTitle: 'Accepting Props in a Component',
            description: 'Props are how components receive data from their parent. They\'re passed to the component as a <strong>single object parameter</strong>.',
            expectedCode: 'function Greeting(props) {',
            output: '// props is an object containing all passed attributes\n// Example: <Greeting name="Alex" />\n// Inside component: props.name === "Alex"',
            detailedExplanation: '<strong>What are Props?</strong> Props (short for properties) are read-only inputs to components. When you write <Greeting name="Alex" />, React passes { name: "Alex" } as the props object. Components should never modify their own props - they\'re immutable!',
            codeBreakdown: [
                {
                    code: 'function Greeting',
                    explanation: 'Creates a functional component named Greeting. Capital letter is required!'
                },
                {
                    code: '(props)',
                    explanation: 'The props parameter receives all attributes passed to this component as an object.'
                },
                {
                    code: '{',
                    explanation: 'Opens the function body where we\'ll return JSX.'
                }
            ],
            tip: 'Props are read-only! Never try to modify props inside a component.',
            hint: 'Type: function Greeting(props) {'
        },
        {
            id: 2,
            title: 'Using Props in JSX',
            instructionTitle: 'Displaying Props Data',
            description: 'Access prop values using <strong>dot notation</strong> inside curly braces. This is how parent components pass data to children.',
            expectedCode: '    return <h1>Hello, {props.name}!</h1>;',
            output: '// If parent passes: <Greeting name="Alex" />\n// This renders: <h1>Hello, Alex!</h1>\n// \n// props.name gets the value of the name attribute',
            detailedExplanation: '<strong>Dynamic Rendering:</strong> The curly braces {} tell React to evaluate the JavaScript expression inside. props.name accesses the name property from the props object, allowing each instance of Greeting to display different names.',
            codeBreakdown: [
                {
                    code: 'return',
                    explanation: 'Returns the JSX to be rendered.'
                },
                {
                    code: '<h1>',
                    explanation: 'An HTML heading element in JSX syntax.'
                },
                {
                    code: '{props.name}',
                    explanation: 'Curly braces embed JavaScript - this outputs the value of props.name.'
                }
            ],
            tip: 'Any JavaScript expression works inside curly braces: {props.name.toUpperCase()}',
            hint: 'Use 4 spaces, then return <h1>Hello, {props.name}!</h1>;'
        },
        {
            id: 3,
            title: 'Destructuring Props',
            instructionTitle: 'Cleaner Props Access',
            description: 'Instead of using props.name everywhere, you can <strong>destructure</strong> props right in the parameter. This is the modern, preferred way!',
            expectedCode: 'function UserCard({ name, email }) {',
            output: '// Destructuring extracts properties directly\n// Same as: const { name, email } = props;\n// Now use "name" instead of "props.name"',
            detailedExplanation: '<strong>Destructuring Assignment:</strong> The curly braces in the parameter list extract specific properties from the props object. This is cleaner than writing props.name and props.email throughout your component. You can also set default values: { name = "Guest" }',
            codeBreakdown: [
                {
                    code: 'function UserCard',
                    explanation: 'Component name - represents a card displaying user information.'
                },
                {
                    code: '({ name, email })',
                    explanation: 'Destructures props to extract name and email directly. Cleaner than props.name!'
                },
                {
                    code: '{',
                    explanation: 'Opens the function body.'
                }
            ],
            tip: 'You can set default values: function UserCard({ name = "Guest", email }) { ... }',
            hint: 'Type: function UserCard({ name, email }) {'
        },
        {
            id: 4,
            title: 'Returning Multiple Elements',
            instructionTitle: 'Using React Fragments',
            description: 'React components must return a single element. Use <strong>Fragments</strong> (<>...</>) to group elements without adding extra DOM nodes.',
            expectedCode: '    return (\n        <>\n            <h2>{name}</h2>\n            <p>{email}</p>\n        </>\n    );',
            output: '// Fragments group elements without extra DOM nodes\n// The output HTML has no wrapper div:\n// <h2>Alex</h2>\n// <p>alex@email.com</p>',
            detailedExplanation: '<strong>Why Fragments?</strong> React requires a single root element. Before Fragments, we\'d wrap in a <div>, but that adds unnecessary DOM nodes. Fragments (<> or <React.Fragment>) let you group children without polluting the DOM.',
            codeBreakdown: [
                {
                    code: '<>',
                    explanation: 'Short syntax for React.Fragment - groups elements without creating a DOM node.'
                },
                {
                    code: '<h2>{name}</h2>',
                    explanation: 'Heading displaying the destructured name prop.'
                },
                {
                    code: '<p>{email}</p>',
                    explanation: 'Paragraph displaying the destructured email prop.'
                },
                {
                    code: '</>',
                    explanation: 'Closing tag for the Fragment.'
                }
            ],
            tip: 'Use the full <React.Fragment key={id}> syntax when you need to add a key prop.',
            hint: 'Return a Fragment containing h2 and p elements with the prop values'
        },
        {
            id: 5,
            title: 'Composing Components',
            instructionTitle: 'Using Components Inside Components',
            description: 'React\'s power comes from <strong>composition</strong> - building complex UIs by combining simple components together.',
            expectedCode: 'function App() {\n    return (\n        <div>\n            <Greeting name="Alex" />\n            <UserCard name="Alex" email="alex@dev.com" />\n        </div>\n    );\n}',
            output: '// App composes Greeting and UserCard\n// This renders:\n// Hello, Alex!\n// Alex\n// alex@dev.com',
            detailedExplanation: '<strong>Component Composition:</strong> Instead of building one massive component, React encourages breaking your UI into small, focused components. The App component here combines Greeting and UserCard. Each component is reusable and can be used with different props.',
            codeBreakdown: [
                {
                    code: 'function App()',
                    explanation: 'A parent component that composes other components.'
                },
                {
                    code: '<Greeting name="Alex" />',
                    explanation: 'Uses the Greeting component, passing "Alex" as the name prop.'
                },
                {
                    code: '<UserCard name="Alex" email="alex@dev.com" />',
                    explanation: 'Uses UserCard with two props: name and email.'
                }
            ],
            tip: 'Think of components like LEGO blocks - build small pieces and combine them!',
            hint: 'Create an App function that renders Greeting and UserCard inside a div'
        },
        {
            id: 6,
            title: 'The Children Prop',
            instructionTitle: 'Passing Content Between Tags',
            description: 'Content placed between a component\'s opening and closing tags is passed as the special <strong>children</strong> prop.',
            expectedCode: 'function Card({ children, title }) {\n    return (\n        <div className="card">\n            <h3>{title}</h3>\n            {children}\n        </div>\n    );\n}',
            output: '// Usage: <Card title="Welcome">Content here</Card>\n// Renders:\n// <div class="card">\n//     <h3>Welcome</h3>\n//     Content here\n// </div>',
            detailedExplanation: '<strong>The Children Pattern:</strong> The children prop is special - it contains whatever is placed between the opening and closing tags of your component. This pattern is perfect for wrapper components like cards, modals, and layouts. The children can be text, elements, or other components!',
            codeBreakdown: [
                {
                    code: '{ children, title }',
                    explanation: 'Destructures children (content between tags) and title from props.'
                },
                {
                    code: 'className="card"',
                    explanation: 'In JSX, use className instead of class (class is reserved in JavaScript).'
                },
                {
                    code: '{children}',
                    explanation: 'Renders whatever was passed between the component\'s opening and closing tags.'
                }
            ],
            tip: 'Use className instead of class in JSX - class is a reserved word in JavaScript!',
            hint: 'Create a Card component that renders title in h3 and children inside a div'
        },
        {
            id: 7,
            title: 'Rendering Lists',
            instructionTitle: 'Mapping Arrays to Components',
            description: 'Use <strong>map()</strong> to transform arrays into lists of elements. Each element needs a unique <strong>key</strong> prop.',
            expectedCode: 'function UserList({ users }) {\n    return (\n        <ul>\n            {users.map(user => (\n                <li key={user.id}>{user.name}</li>\n            ))}\n        </ul>\n    );\n}',
            output: '// Given: users = [{id: 1, name: "Alex"}, {id: 2, name: "Sam"}]\n// Renders:\n// <ul>\n//     <li>Alex</li>\n//     <li>Sam</li>\n// </ul>',
            detailedExplanation: '<strong>Lists and Keys:</strong> The map() function transforms each array item into JSX. The key prop helps React identify which items changed, were added, or removed. Keys must be unique among siblings - use IDs from your data, not array indices (indices can cause issues when items reorder).',
            codeBreakdown: [
                {
                    code: 'users.map(user =>',
                    explanation: 'Maps over each user in the array, transforming them to JSX elements.'
                },
                {
                    code: 'key={user.id}',
                    explanation: 'Unique key helps React efficiently update the list. Use stable IDs, not indices!'
                },
                {
                    code: '{user.name}',
                    explanation: 'Displays the name property of each user object.'
                }
            ],
            tip: 'Never use array index as key if items can be reordered - use unique IDs from your data!',
            hint: 'Create UserList that maps users array to li elements with key and name'
        }
    ]
};

// Initialize the walkthrough engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(reactComponentsConfig);
});
