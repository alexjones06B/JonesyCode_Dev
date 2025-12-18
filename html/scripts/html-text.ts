/**
 * HTML Text & Typography Walkthrough
 */

const htmlTextConfig = {
    id: 'html-text',
    title: 'Text & Typography',
    steps: [
        {
            id: 1,
            title: 'Main Heading',
            instructionTitle: 'Creating the Most Important Heading',
            description: 'The <h1> element represents the most important heading on a page. There should typically be only one h1 per page, describing the main topic.',
            expectedCode: '<h1>Welcome to HTML</h1>',
            codeBreakdown: [
                {
                    code: '<h1>',
                    explanation: 'Opens the level 1 heading - the most important heading'
                },
                {
                    code: 'Welcome to HTML',
                    explanation: 'The text content of the heading'
                },
                {
                    code: '</h1>',
                    explanation: 'Closes the heading element'
                }
            ],
            tip: 'Search engines use h1 to understand your page content. Make it descriptive!',
            hint: 'Use h1 tags around your heading text'
        },
        {
            id: 2,
            title: 'Subheading',
            instructionTitle: 'Adding Section Headings',
            description: 'The <h2> element is used for section headings. It\'s less important than h1 but still a major heading. HTML has h1 through h6 for different heading levels.',
            expectedCode: '<h2>Getting Started</h2>',
            codeBreakdown: [
                {
                    code: '<h2>',
                    explanation: 'Opens a level 2 heading - great for major sections'
                },
                {
                    code: 'Getting Started',
                    explanation: 'Section heading text'
                },
                {
                    code: '</h2>',
                    explanation: 'Closes the h2 element'
                }
            ],
            tip: 'Use heading levels in order - don\'t skip from h1 to h4!',
            hint: 'Same pattern as h1, but use h2 instead'
        },
        {
            id: 3,
            title: 'Paragraph',
            instructionTitle: 'Writing Paragraph Text',
            description: 'The <p> element defines a paragraph of text. Browsers automatically add space before and after paragraphs.',
            expectedCode: '<p>HTML is the foundation of the web.</p>',
            codeBreakdown: [
                {
                    code: '<p>',
                    explanation: 'Opens a paragraph element'
                },
                {
                    code: 'HTML is the foundation of the web.',
                    explanation: 'The paragraph text content'
                },
                {
                    code: '</p>',
                    explanation: 'Closes the paragraph'
                }
            ],
            tip: 'Use multiple p elements for multiple paragraphs, not line breaks!',
            hint: 'Wrap your text in p tags'
        },
        {
            id: 4,
            title: 'Bold Text',
            instructionTitle: 'Making Text Stand Out',
            description: 'The <strong> element indicates text that has strong importance. Browsers typically display it as bold.',
            expectedCode: '<strong>Important</strong>',
            codeBreakdown: [
                {
                    code: '<strong>',
                    explanation: 'Opens the strong element - indicates importance'
                },
                {
                    code: 'Important',
                    explanation: 'The emphasized text'
                },
                {
                    code: '</strong>',
                    explanation: 'Closes the strong element'
                }
            ],
            tip: 'Use <strong> for semantic importance, not just for visual bold styling!',
            hint: 'Use strong tags around the word Important',
            detailedExplanation: 'The strong element represents text of strong importance. Unlike the old <b> tag which was purely visual, <strong> has semantic meaning that helps screen readers and search engines.'
        },
        {
            id: 5,
            title: 'Italic Text',
            instructionTitle: 'Adding Emphasis',
            description: 'The <em> element marks text that has emphasis. Browsers typically display it in italics.',
            expectedCode: '<em>emphasized text</em>',
            codeBreakdown: [
                {
                    code: '<em>',
                    explanation: 'Opens the emphasis element'
                },
                {
                    code: 'emphasized text',
                    explanation: 'The text to emphasize'
                },
                {
                    code: '</em>',
                    explanation: 'Closes the em element'
                }
            ],
            tip: 'Screen readers change their tone when reading emphasized text!',
            hint: 'Use em tags around the text'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    new WalkthroughEngine(htmlTextConfig);
});
