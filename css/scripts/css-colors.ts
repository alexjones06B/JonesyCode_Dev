/**
 * CSS Colors Walkthrough - Step-by-step exercises for learning CSS colors and backgrounds
 */

const cssColorsConfig = {
    id: 'css-colors',
    title: 'Colors & Backgrounds',
    steps: [
        {
            id: 1,
            title: 'Named Colors',
            instructionTitle: 'Using Color Names',
            description: 'CSS supports 140+ named colors like red, blue, coral, and tomato. These are easy to remember and great for quick styling.',
            expectedCode: 'h1 {\n    color: coral;\n}',
            codeBreakdown: [
                {
                    code: 'color: coral;',
                    explanation: 'Sets the text color using the named color "coral" - a light orange-red color'
                }
            ],
            tip: 'Common named colors: red, blue, green, orange, purple, pink, gray, black, white',
            hint: 'Use the color property with a named color value',
            output: 'The heading text will appear in coral color'
        },
        {
            id: 2,
            title: 'Hexadecimal Colors',
            instructionTitle: 'Using Hex Color Codes',
            description: 'Hexadecimal colors use a # followed by 6 characters (0-9, A-F) representing Red, Green, and Blue values.',
            expectedCode: '.box {\n    background-color: #3498db;\n}',
            codeBreakdown: [
                {
                    code: '#3498db',
                    explanation: '#34 = Red, 98 = Green, db = Blue. This creates a nice sky blue color'
                }
            ],
            tip: 'Shorthand: #RGB can be used when pairs repeat (e.g., #fff = #ffffff = white)',
            hint: 'Use the background-color property with a hex value starting with #'
        },
        {
            id: 3,
            title: 'RGB Colors',
            instructionTitle: 'Using RGB Values',
            description: 'RGB colors specify Red, Green, and Blue values from 0-255. This gives you precise control over colors.',
            expectedCode: 'p {\n    color: rgb(52, 152, 219);\n}',
            codeBreakdown: [
                {
                    code: 'rgb(52, 152, 219)',
                    explanation: 'Red: 52, Green: 152, Blue: 219 - creates the same blue as #3498db'
                }
            ],
            tip: 'rgb(0, 0, 0) is black, rgb(255, 255, 255) is white',
            hint: 'Use rgb() with three comma-separated numbers'
        },
        {
            id: 4,
            title: 'RGBA Transparency',
            instructionTitle: 'Adding Transparency',
            description: 'RGBA adds an alpha channel (0-1) for transparency. 0 is fully transparent, 1 is fully opaque.',
            expectedCode: '.overlay {\n    background-color: rgba(0, 0, 0, 0.5);\n}',
            codeBreakdown: [
                {
                    code: 'rgba(0, 0, 0, 0.5)',
                    explanation: 'Black color (0,0,0) at 50% opacity (0.5) - creates a semi-transparent overlay'
                }
            ],
            tip: 'Semi-transparent overlays are great for modals and image captions!',
            hint: 'Use rgba() with four values - the last is the alpha/opacity'
        },
        {
            id: 5,
            title: 'Linear Gradient',
            instructionTitle: 'Creating Color Gradients',
            description: 'Linear gradients create smooth transitions between colors in a specified direction.',
            expectedCode: '.gradient {\n    background: linear-gradient(to right, #667eea, #764ba2);\n}',
            codeBreakdown: [
                {
                    code: 'linear-gradient(to right, #667eea, #764ba2)',
                    explanation: 'Creates a gradient flowing from left to right, from blue (#667eea) to purple (#764ba2)'
                }
            ],
            tip: 'Directions: to right, to bottom, 45deg, etc. You can add more color stops!',
            hint: 'Use linear-gradient() as the background value',
            output: 'A smooth blue-to-purple gradient flowing horizontally'
        }
    ]
};

// Initialize the walkthrough when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(cssColorsConfig);
});
