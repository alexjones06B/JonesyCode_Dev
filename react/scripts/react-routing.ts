/**
 * React Router Walkthrough - Step definitions
 * Each step teaches navigation, routing, and dynamic routes
 */

// Define the walkthrough configuration
const reactRoutingConfig: WalkthroughConfig = {
    id: 'react-routing',
    title: 'React Router',
    steps: [
        {
            id: 1,
            title: 'Installing React Router',
            instructionTitle: 'Setting Up React Router',
            description: 'React Router is the standard routing library for React. First, import the necessary components from <strong>react-router-dom</strong>.',
            expectedCode: 'import { BrowserRouter, Routes, Route } from "react-router-dom";',
            output: '// BrowserRouter - Provides routing context\n// Routes - Container for Route components\n// Route - Maps a path to a component',
            detailedExplanation: '<strong>React Router v6:</strong> These are the core components for routing. BrowserRouter uses the HTML5 history API to keep UI in sync with the URL. Routes replaces the older Switch component and provides improved matching. Route defines a mapping between a URL path and a component.',
            codeBreakdown: [
                {
                    code: 'BrowserRouter',
                    explanation: 'The router component that uses clean URLs (no hash). Wrap your entire app with this.'
                },
                {
                    code: 'Routes',
                    explanation: 'Container that holds all Route components and handles matching.'
                },
                {
                    code: 'Route',
                    explanation: 'Defines a single route: which component renders at which path.'
                }
            ],
            tip: 'Install with: npm install react-router-dom',
            hint: 'Import BrowserRouter, Routes, and Route from "react-router-dom"'
        },
        {
            id: 2,
            title: 'Setting Up the Router',
            instructionTitle: 'Wrapping Your App',
            description: 'Wrap your entire application with <strong>BrowserRouter</strong> to enable routing throughout your app.',
            expectedCode: 'function App() {\n    return (\n        <BrowserRouter>\n            <Routes>\n                <Route path="/" element={<Home />} />\n            </Routes>\n        </BrowserRouter>\n    );\n}',
            output: '// When URL is "/", Home component renders\n// BrowserRouter enables navigation\n// Routes finds the matching Route',
            detailedExplanation: '<strong>Router Structure:</strong> BrowserRouter should wrap your entire app (usually in index.js or App.js). Routes contains all your Route definitions. Each Route has a path and an element - when the URL matches the path, the element renders. This is the foundation of React SPA navigation!',
            codeBreakdown: [
                {
                    code: '<BrowserRouter>',
                    explanation: 'Provides routing context to all children. Only need one per app.'
                },
                {
                    code: '<Routes>',
                    explanation: 'Container for Route components. Picks the best matching route.'
                },
                {
                    code: 'path="/"',
                    explanation: 'The URL path to match. "/" is the home/root path.'
                },
                {
                    code: 'element={<Home />}',
                    explanation: 'The component to render when path matches. Note: it\'s JSX, not just the component name!'
                }
            ],
            tip: 'In React Router v6, use element={<Component />} not component={Component}!',
            hint: 'Wrap Routes in BrowserRouter, with a Route for the home path'
        },
        {
            id: 3,
            title: 'Adding Multiple Routes',
            instructionTitle: 'Defining Application Routes',
            description: 'Add more Route components for different pages in your application. Each maps a URL to a component.',
            expectedCode: '<Routes>\n    <Route path="/" element={<Home />} />\n    <Route path="/about" element={<About />} />\n    <Route path="/contact" element={<Contact />} />\n</Routes>',
            output: '// "/" → Home component\n// "/about" → About component\n// "/contact" → Contact component\n// Only ONE route renders at a time!',
            detailedExplanation: '<strong>Route Matching:</strong> React Router v6 picks the best matching route. Routes are matched based on the URL path. Only one route renders at a time (the best match). Order doesn\'t matter in v6 - it automatically picks the most specific match!',
            codeBreakdown: [
                {
                    code: 'path="/"',
                    explanation: 'Home route - matches exactly "/".'
                },
                {
                    code: 'path="/about"',
                    explanation: 'About page - matches "/about".'
                },
                {
                    code: 'path="/contact"',
                    explanation: 'Contact page - matches "/contact".'
                }
            ],
            tip: 'Route order doesn\'t matter in v6 - it picks the most specific match!',
            hint: 'Add Routes for home, about, and contact paths'
        },
        {
            id: 4,
            title: 'Navigation Links',
            instructionTitle: 'The Link Component',
            description: 'Use <strong>Link</strong> instead of anchor tags for navigation. This prevents full page reloads and enables SPA behavior.',
            expectedCode: 'import { Link } from "react-router-dom";\n\nfunction Navbar() {\n    return (\n        <nav>\n            <Link to="/">Home</Link>\n            <Link to="/about">About</Link>\n        </nav>\n    );\n}',
            output: '// Clicking links changes URL without page reload\n// React Router updates the view\n// Browser history works (back/forward buttons)',
            detailedExplanation: '<strong>Link vs Anchor:</strong> Regular <a> tags cause full page reloads. Link components prevent the reload and let React Router handle navigation. The URL changes, history is updated (back button works), but only the matched route component re-renders. This is the SPA experience!',
            codeBreakdown: [
                {
                    code: 'import { Link }',
                    explanation: 'Import Link from react-router-dom for SPA navigation.'
                },
                {
                    code: '<Link to="/">',
                    explanation: 'The "to" prop specifies the destination path (like href for anchors).'
                },
                {
                    code: 'Home</Link>',
                    explanation: 'The link text that users click on.'
                }
            ],
            tip: 'Use NavLink instead of Link to get active styling for navigation menus!',
            hint: 'Create Navbar with Link components for Home and About'
        },
        {
            id: 5,
            title: 'Dynamic Routes',
            instructionTitle: 'URL Parameters',
            description: 'Use <strong>:paramName</strong> syntax in paths to capture dynamic segments. Access them with the useParams hook.',
            expectedCode: '<Route path="/user/:userId" element={<UserProfile />} />',
            output: '// Matches: /user/123, /user/alex, /user/42\n// The "userId" part is dynamic\n// Access with useParams(): { userId: "123" }',
            detailedExplanation: '<strong>URL Parameters:</strong> The colon syntax (:userId) creates a dynamic segment. When the URL is "/user/123", userId equals "123". This is perfect for detail pages - user profiles, product pages, blog posts. The parameter is available via the useParams hook in the rendered component.',
            codeBreakdown: [
                {
                    code: 'path="/user/:userId"',
                    explanation: ':userId is a dynamic parameter. Matches any value in that URL position.'
                },
                {
                    code: 'element={<UserProfile />}',
                    explanation: 'UserProfile component receives access to the userId via useParams().'
                }
            ],
            tip: 'Use multiple params: /user/:userId/post/:postId matches /user/5/post/42',
            hint: 'Create a Route with :userId parameter for UserProfile'
        },
        {
            id: 6,
            title: 'Reading URL Parameters',
            instructionTitle: 'The useParams Hook',
            description: 'Inside a routed component, use <strong>useParams</strong> to access the dynamic segments from the URL.',
            expectedCode: 'import { useParams } from "react-router-dom";\n\nfunction UserProfile() {\n    const { userId } = useParams();\n    return <h1>User ID: {userId}</h1>;\n}',
            output: '// If URL is /user/42:\n// useParams() returns { userId: "42" }\n// Destructuring gives us userId = "42"\n// Renders: <h1>User ID: 42</h1>',
            detailedExplanation: '<strong>useParams Hook:</strong> This hook returns an object with key/value pairs of URL parameters. The keys match the :names from your Route path. All values are strings - convert to numbers if needed! This hook only works in components rendered by a Route.',
            codeBreakdown: [
                {
                    code: 'import { useParams }',
                    explanation: 'Import the hook from react-router-dom.'
                },
                {
                    code: 'const { userId } = useParams()',
                    explanation: 'Destructure to get the userId parameter from the URL.'
                },
                {
                    code: '{userId}',
                    explanation: 'Display the URL parameter value in the component.'
                }
            ],
            tip: 'URL params are always strings - use parseInt() or Number() if you need numbers!',
            hint: 'Create UserProfile that uses useParams to display the userId'
        }
    ]
};

// Initialize the walkthrough engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(reactRoutingConfig);
});
