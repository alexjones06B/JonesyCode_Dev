/**
 * CSS Box Model Walkthrough - Step-by-step exercises for learning the CSS box model
 */

const cssBoxModelConfig = {
    id: 'css-box-model',
    title: 'Box Model',
    steps: [
        {
            id: 1,
            title: 'Width and Height',
            instructionTitle: 'Setting Element Dimensions',
            description: 'The width and height properties set the size of the content area. By default, this doesn\'t include padding or borders.',
            expectedCode: '.card {\n    width: 300px;\n    height: 200px;\n}',
            codeBreakdown: [
                {
                    code: 'width: 300px;',
                    explanation: 'Sets the content width to 300 pixels'
                },
                {
                    code: 'height: 200px;',
                    explanation: 'Sets the content height to 200 pixels'
                }
            ],
            tip: 'Use max-width instead of width for responsive designs!',
            hint: 'Set both width and height properties with pixel values'
        },
        {
            id: 2,
            title: 'Padding',
            instructionTitle: 'Adding Space Inside Elements',
            description: 'Padding creates space between the content and the border. It\'s inside the element.',
            expectedCode: '.box {\n    padding: 20px;\n}',
            codeBreakdown: [
                {
                    code: 'padding: 20px;',
                    explanation: 'Adds 20 pixels of space on all four sides inside the element'
                }
            ],
            tip: 'Padding can use 1-4 values: all | vertical horizontal | top horizontal bottom | top right bottom left',
            hint: 'Use padding with a single value for equal spacing on all sides'
        },
        {
            id: 3,
            title: 'Padding Shorthand',
            instructionTitle: 'Setting Different Padding Values',
            description: 'You can set different padding for each side using shorthand: top, right, bottom, left (clockwise from top).',
            expectedCode: '.section {\n    padding: 10px 20px 15px 25px;\n}',
            codeBreakdown: [
                {
                    code: '10px 20px 15px 25px',
                    explanation: 'Top: 10px, Right: 20px, Bottom: 15px, Left: 25px (clockwise from top)'
                }
            ],
            tip: 'Two values = vertical horizontal (e.g., padding: 10px 20px)',
            hint: 'Use four space-separated values for each side'
        },
        {
            id: 4,
            title: 'Border',
            instructionTitle: 'Adding Borders to Elements',
            description: 'The border property adds a visible edge around elements. It has three parts: width, style, and color.',
            expectedCode: '.frame {\n    border: 2px solid #333;\n}',
            codeBreakdown: [
                {
                    code: '2px',
                    explanation: 'Border width - how thick the border is'
                },
                {
                    code: 'solid',
                    explanation: 'Border style - solid, dashed, dotted, double, etc.'
                },
                {
                    code: '#333',
                    explanation: 'Border color - a dark gray'
                }
            ],
            tip: 'Border styles: solid, dashed, dotted, double, groove, ridge, inset, outset',
            hint: 'Use the border shorthand with width, style, and color'
        },
        {
            id: 5,
            title: 'Margin',
            instructionTitle: 'Adding Space Outside Elements',
            description: 'Margin creates space outside the border, separating the element from others. Use "auto" to center block elements.',
            expectedCode: '.container {\n    margin: 0 auto;\n}',
            codeBreakdown: [
                {
                    code: '0',
                    explanation: 'No margin on top and bottom'
                },
                {
                    code: 'auto',
                    explanation: 'Automatically calculate left and right margins to center the element'
                }
            ],
            tip: 'margin: 0 auto only works on elements with a defined width!',
            hint: 'Use two values: vertical margin and horizontal margin',
            output: 'The container will be horizontally centered'
        }
    ]
};

// Initialize the walkthrough when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(cssBoxModelConfig);
});
