/**
 * CSS Flexbox Walkthrough - Step-by-step exercises for learning CSS Flexbox layout
 */
const cssFlexboxConfig = {
    id: 'css-flexbox',
    title: 'Flexbox Layout',
    steps: [
        {
            id: 1,
            title: 'Creating a Flex Container',
            instructionTitle: 'Enabling Flexbox',
            description: 'To use Flexbox, set display: flex on a container element. All direct children become flex items.',
            expectedCode: '.container {\n    display: flex;\n}',
            codeBreakdown: [
                {
                    code: 'display: flex;',
                    explanation: 'Transforms the element into a flex container. Children automatically become flex items in a row.'
                }
            ],
            tip: 'By default, flex items are placed in a row from left to right.',
            hint: 'Use display: flex to create a flex container',
            output: 'Children will be arranged horizontally in a row'
        },
        {
            id: 2,
            title: 'Justify Content',
            instructionTitle: 'Aligning Items Horizontally',
            description: 'justify-content controls how flex items are positioned along the main axis (horizontal by default).',
            expectedCode: '.navbar {\n    display: flex;\n    justify-content: space-between;\n}',
            codeBreakdown: [
                {
                    code: 'justify-content: space-between;',
                    explanation: 'First item at start, last at end, equal space between items'
                }
            ],
            tip: 'Values: flex-start, flex-end, center, space-between, space-around, space-evenly',
            hint: 'Add justify-content after display: flex'
        },
        {
            id: 3,
            title: 'Align Items',
            instructionTitle: 'Aligning Items Vertically',
            description: 'align-items controls how flex items are positioned along the cross axis (vertical by default).',
            expectedCode: '.center-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}',
            codeBreakdown: [
                {
                    code: 'justify-content: center;',
                    explanation: 'Centers items horizontally'
                },
                {
                    code: 'align-items: center;',
                    explanation: 'Centers items vertically'
                }
            ],
            tip: 'This combo is the easiest way to perfectly center content!',
            hint: 'Combine justify-content and align-items: center',
            output: 'Content will be perfectly centered both horizontally and vertically'
        },
        {
            id: 4,
            title: 'Flex Direction',
            instructionTitle: 'Changing the Main Axis',
            description: 'flex-direction changes the main axis direction. Use "column" to stack items vertically.',
            expectedCode: '.sidebar {\n    display: flex;\n    flex-direction: column;\n}',
            codeBreakdown: [
                {
                    code: 'flex-direction: column;',
                    explanation: 'Items stack vertically instead of horizontally'
                }
            ],
            tip: 'Values: row (default), row-reverse, column, column-reverse',
            hint: 'Add flex-direction: column to stack items'
        },
        {
            id: 5,
            title: 'Flex Wrap',
            instructionTitle: 'Wrapping Flex Items',
            description: 'flex-wrap allows items to wrap to new lines when they don\'t fit in one row.',
            expectedCode: '.card-grid {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n}',
            codeBreakdown: [
                {
                    code: 'flex-wrap: wrap;',
                    explanation: 'Items wrap to the next line when they exceed container width'
                },
                {
                    code: 'gap: 20px;',
                    explanation: 'Adds 20px of space between flex items (rows and columns)'
                }
            ],
            tip: 'gap is a cleaner alternative to margins for spacing flex items!',
            hint: 'Use flex-wrap and gap together'
        },
        {
            id: 6,
            title: 'Flex Grow',
            instructionTitle: 'Growing Flex Items',
            description: 'flex-grow controls how much a flex item should grow relative to others when there\'s extra space.',
            expectedCode: '.main-content {\n    flex: 1;\n}',
            codeBreakdown: [
                {
                    code: 'flex: 1;',
                    explanation: 'Shorthand that sets flex-grow: 1. The item will grow to fill available space.'
                }
            ],
            tip: 'flex: 1 on multiple items makes them share space equally!',
            hint: 'Use the flex shorthand property',
            output: 'The element expands to fill remaining space in the container'
        }
    ]
};
// Initialize the walkthrough when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(cssFlexboxConfig);
});
