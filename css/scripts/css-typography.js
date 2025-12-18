/**
 * CSS Typography Walkthrough - Step-by-step exercises for learning CSS typography
 */
const cssTypographyConfig = {
    id: 'css-typography',
    title: 'Typography',
    steps: [
        {
            id: 1,
            title: 'Font Family',
            instructionTitle: 'Choosing Fonts',
            description: 'The font-family property sets the typeface. Always include fallback fonts in case the preferred font isn\'t available.',
            expectedCode: 'body {\n    font-family: \'Helvetica Neue\', Arial, sans-serif;\n}',
            codeBreakdown: [
                {
                    code: "'Helvetica Neue'",
                    explanation: 'Primary font choice - quotes needed for multi-word names'
                },
                {
                    code: 'Arial',
                    explanation: 'First fallback - a similar font available on most systems'
                },
                {
                    code: 'sans-serif',
                    explanation: 'Generic fallback - browser will use its default sans-serif font'
                }
            ],
            tip: 'Generic font families: serif, sans-serif, monospace, cursive, fantasy',
            hint: 'List fonts separated by commas, ending with a generic family'
        },
        {
            id: 2,
            title: 'Font Size',
            instructionTitle: 'Setting Text Size',
            description: 'Font size can use different units: px (pixels), em (relative to parent), rem (relative to root), or % (percentage).',
            expectedCode: 'h1 {\n    font-size: 2.5rem;\n}',
            codeBreakdown: [
                {
                    code: '2.5rem',
                    explanation: '2.5 times the root font size (usually 16px, so this = 40px)'
                }
            ],
            tip: 'rem is great for accessibility - it respects user font size preferences!',
            hint: 'Use rem units for scalable typography'
        },
        {
            id: 3,
            title: 'Font Weight',
            instructionTitle: 'Making Text Bold',
            description: 'Font weight controls the thickness of text. Use keywords or numbers from 100 (thin) to 900 (black).',
            expectedCode: '.bold-text {\n    font-weight: 700;\n}',
            codeBreakdown: [
                {
                    code: 'font-weight: 700;',
                    explanation: '700 equals "bold". Normal weight is 400. Range is 100-900.'
                }
            ],
            tip: 'Keywords: normal (400), bold (700). Some fonts support 100-900 weights.',
            hint: 'Use a numeric value for font-weight'
        },
        {
            id: 4,
            title: 'Line Height',
            instructionTitle: 'Setting Line Spacing',
            description: 'Line height controls the vertical space between lines of text. Use unitless numbers for the most flexible results.',
            expectedCode: 'p {\n    line-height: 1.6;\n}',
            codeBreakdown: [
                {
                    code: 'line-height: 1.6;',
                    explanation: 'The line height will be 1.6 times the font size - great for readability'
                }
            ],
            tip: '1.5-1.8 is ideal for body text readability!',
            hint: 'Use a unitless number for line-height'
        },
        {
            id: 5,
            title: 'Text Styling',
            instructionTitle: 'Transforming and Decorating Text',
            description: 'Combine text-transform, text-decoration, and letter-spacing for complete text styling control.',
            expectedCode: '.heading {\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}',
            codeBreakdown: [
                {
                    code: 'text-transform: uppercase;',
                    explanation: 'Converts all text to uppercase letters'
                },
                {
                    code: 'letter-spacing: 2px;',
                    explanation: 'Adds 2 pixels of space between each letter'
                }
            ],
            tip: 'text-transform options: uppercase, lowercase, capitalize, none',
            hint: 'Combine text-transform and letter-spacing properties'
        }
    ]
};
// Initialize the walkthrough when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(cssTypographyConfig);
});
