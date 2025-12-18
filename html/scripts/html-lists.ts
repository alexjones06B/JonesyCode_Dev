/**
 * HTML Lists Walkthrough
 */

const htmlListsConfig = {
    id: 'html-lists',
    title: 'Lists',
    steps: [
        {
            id: 1,
            title: 'Unordered List',
            instructionTitle: 'Creating a Bullet List',
            description: 'The <ul> element creates an unordered (bulleted) list. Each item inside uses the <li> (list item) element.',
            expectedCode: '<ul>\n    <li>First item</li>\n</ul>',
            codeBreakdown: [
                {
                    code: '<ul>',
                    explanation: 'Opens an unordered list - displays with bullet points'
                },
                {
                    code: '<li>First item</li>',
                    explanation: 'A list item - each item needs its own li tags'
                },
                {
                    code: '</ul>',
                    explanation: 'Closes the unordered list'
                }
            ],
            tip: 'Use unordered lists when the order of items doesn\'t matter!',
            hint: 'Use ul for the list and li for items'
        },
        {
            id: 2,
            title: 'Ordered List',
            instructionTitle: 'Creating a Numbered List',
            description: 'The <ol> element creates an ordered (numbered) list. The browser automatically numbers the items.',
            expectedCode: '<ol>\n    <li>Step one</li>\n</ol>',
            codeBreakdown: [
                {
                    code: '<ol>',
                    explanation: 'Opens an ordered list - displays with numbers'
                },
                {
                    code: '<li>Step one</li>',
                    explanation: 'List items work the same as in unordered lists'
                },
                {
                    code: '</ol>',
                    explanation: 'Closes the ordered list'
                }
            ],
            tip: 'Use ordered lists for steps, rankings, or when sequence matters!',
            hint: 'Same as ul, but use ol instead'
        },
        {
            id: 3,
            title: 'Multiple List Items',
            instructionTitle: 'Adding More Items',
            description: 'Lists can have multiple items. Each item gets its own <li> element.',
            expectedCode: '<li>Apple</li>\n<li>Banana</li>\n<li>Cherry</li>',
            codeBreakdown: [
                {
                    code: '<li>Apple</li>',
                    explanation: 'First list item'
                },
                {
                    code: '<li>Banana</li>',
                    explanation: 'Second list item'
                },
                {
                    code: '<li>Cherry</li>',
                    explanation: 'Third list item'
                }
            ],
            tip: 'Each li element should contain one item or concept!',
            hint: 'Create three separate li elements, each on its own line'
        },
        {
            id: 4,
            title: 'Description List',
            instructionTitle: 'Creating Term-Definition Pairs',
            description: 'The <dl> element creates a description list with terms (<dt>) and descriptions (<dd>). Great for glossaries!',
            expectedCode: '<dl>\n    <dt>HTML</dt>\n    <dd>HyperText Markup Language</dd>\n</dl>',
            codeBreakdown: [
                {
                    code: '<dl>',
                    explanation: 'Description list container'
                },
                {
                    code: '<dt>HTML</dt>',
                    explanation: 'Description term - the word being defined'
                },
                {
                    code: '<dd>HyperText Markup Language</dd>',
                    explanation: 'Description details - the definition'
                }
            ],
            tip: 'Description lists are perfect for FAQs, glossaries, and metadata!',
            hint: 'dl contains dt and dd pairs'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    new WalkthroughEngine(htmlListsConfig);
});
