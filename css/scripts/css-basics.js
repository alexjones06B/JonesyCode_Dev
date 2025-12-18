/**
 * CSS Basics Walkthrough - Step-by-step exercises for learning CSS fundamentals
 */
const cssBasicsConfig = {
    id: 'css-basics',
    title: 'CSS Basics',
    steps: [
        {
            id: 1,
            title: 'CSS Rule Structure',
            instructionTitle: 'Understanding CSS Rules',
            description: 'Every CSS rule has two parts: a selector that targets HTML elements, and a declaration block containing property-value pairs.',
            expectedCode: 'p {\n    color: blue;\n}',
            codeBreakdown: [
                {
                    code: 'p',
                    explanation: 'The selector - targets all <p> (paragraph) elements in the HTML'
                },
                {
                    code: '{',
                    explanation: 'Opening curly brace - starts the declaration block'
                },
                {
                    code: 'color: blue;',
                    explanation: 'A declaration: "color" is the property, "blue" is the value, semicolon ends it'
                },
                {
                    code: '}',
                    explanation: 'Closing curly brace - ends the declaration block'
                }
            ],
            tip: 'Always end each declaration with a semicolon!',
            hint: 'Type p, then curly braces, with color: blue; inside',
            output: 'All paragraphs will appear in blue text',
            detailedExplanation: 'CSS rules are made of selectors and declarations. The selector tells the browser which elements to style, and declarations (inside curly braces) specify the styling.'
        },
        {
            id: 2,
            title: 'Class Selector',
            instructionTitle: 'Targeting Classes with CSS',
            description: 'Class selectors start with a dot (.) and target elements with a matching class attribute. Classes are reusable across multiple elements.',
            expectedCode: '.highlight {\n    background-color: yellow;\n}',
            codeBreakdown: [
                {
                    code: '.highlight',
                    explanation: 'The dot (.) indicates this is a class selector, targeting elements with class="highlight"'
                },
                {
                    code: 'background-color: yellow;',
                    explanation: 'Sets the background color of the element to yellow'
                }
            ],
            tip: 'Class names are case-sensitive! ".Highlight" and ".highlight" are different.',
            hint: 'Start with a dot followed by the class name, then add the background-color property'
        },
        {
            id: 3,
            title: 'ID Selector',
            instructionTitle: 'Targeting Unique Elements',
            description: 'ID selectors start with a hash (#) and target a single unique element. Each ID should only appear once per page.',
            expectedCode: '#header {\n    font-size: 24px;\n}',
            codeBreakdown: [
                {
                    code: '#header',
                    explanation: 'The hash (#) indicates this is an ID selector, targeting the element with id="header"'
                },
                {
                    code: 'font-size: 24px;',
                    explanation: 'Sets the font size to 24 pixels'
                }
            ],
            tip: 'Use IDs sparingly - classes are more flexible for reusable styles.',
            hint: 'Start with # followed by the ID name'
        },
        {
            id: 4,
            title: 'Multiple Properties',
            instructionTitle: 'Adding Multiple Styles',
            description: 'You can add multiple declarations to a single rule. Each property-value pair is separated by a semicolon.',
            expectedCode: '.button {\n    background-color: blue;\n    color: white;\n    padding: 10px;\n}',
            codeBreakdown: [
                {
                    code: 'background-color: blue;',
                    explanation: 'Sets the background to blue'
                },
                {
                    code: 'color: white;',
                    explanation: 'Sets the text color to white'
                },
                {
                    code: 'padding: 10px;',
                    explanation: 'Adds 10 pixels of space inside the element on all sides'
                }
            ],
            tip: 'Keep properties organized - put related properties together!',
            hint: 'Add three declarations inside the .button rule'
        },
        {
            id: 5,
            title: 'Descendant Selector',
            instructionTitle: 'Targeting Nested Elements',
            description: 'Descendant selectors target elements that are inside other elements. Use a space between selectors to create this relationship.',
            expectedCode: 'nav a {\n    text-decoration: none;\n}',
            codeBreakdown: [
                {
                    code: 'nav a',
                    explanation: 'Targets all <a> elements that are inside a <nav> element (at any level)'
                },
                {
                    code: 'text-decoration: none;',
                    explanation: 'Removes the underline from links'
                }
            ],
            tip: 'The space between selectors means "inside of" - nav a means "links inside navigation"',
            hint: 'Type two selectors with a space between them'
        },
        {
            id: 6,
            title: 'Grouping Selectors',
            instructionTitle: 'Applying Styles to Multiple Elements',
            description: 'You can apply the same styles to multiple selectors by separating them with commas. This reduces code repetition.',
            expectedCode: 'h1, h2, h3 {\n    font-family: Arial, sans-serif;\n}',
            codeBreakdown: [
                {
                    code: 'h1, h2, h3',
                    explanation: 'Comma-separated list of selectors - the rule applies to all three heading levels'
                },
                {
                    code: 'font-family: Arial, sans-serif;',
                    explanation: 'Sets the font to Arial, with sans-serif as a fallback'
                }
            ],
            tip: 'Grouping selectors keeps your CSS DRY (Don\'t Repeat Yourself)!',
            hint: 'List multiple selectors separated by commas before the opening brace'
        }
    ]
};
// Initialize the walkthrough when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(cssBasicsConfig);
});
