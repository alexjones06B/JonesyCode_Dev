/**
 * HTML Basics Walkthrough - Step-by-step exercises for learning HTML fundamentals
 */
const htmlBasicsConfig = {
    id: 'html-basics',
    title: 'HTML Basics',
    steps: [
        {
            id: 1,
            title: 'The DOCTYPE Declaration',
            instructionTitle: 'Every HTML Document Starts Here',
            description: 'The DOCTYPE declaration tells the browser what version of HTML the page is written in. For HTML5, we use a simple declaration at the very top of every HTML document.',
            expectedCode: '<!DOCTYPE html>',
            codeBreakdown: [
                {
                    code: '<!DOCTYPE html>',
                    explanation: 'This tells the browser "This is an HTML5 document". It must be the very first line of your HTML file.'
                }
            ],
            tip: 'DOCTYPE is not case-sensitive, but the convention is to write it in uppercase!',
            hint: 'Start with <! then DOCTYPE followed by html>',
            output: 'Browser now knows to render this as HTML5',
            detailedExplanation: 'The DOCTYPE declaration is not an HTML tag - it is an instruction to the web browser about what version of HTML the page is written in.'
        },
        {
            id: 2,
            title: 'The HTML Root Element',
            instructionTitle: 'Creating the HTML Container',
            description: 'The <html> element is the root element that contains all other HTML elements. We add the lang attribute to specify the language of the document.',
            expectedCode: '<html lang="en">',
            codeBreakdown: [
                {
                    code: '<html',
                    explanation: 'Opens the html element - this is the root of the document'
                },
                {
                    code: 'lang="en"',
                    explanation: 'The lang attribute specifies English as the document language. This helps screen readers and search engines.'
                },
                {
                    code: '>',
                    explanation: 'Closes the opening tag'
                }
            ],
            tip: 'Common language codes: "en" for English, "es" for Spanish, "fr" for French',
            hint: 'Remember to include the lang attribute with "en" as the value'
        },
        {
            id: 3,
            title: 'The Head Section',
            instructionTitle: 'Creating the Document Head',
            description: 'The <head> element contains metadata about the document - information that doesn\'t appear on the page itself but is important for browsers and search engines.',
            expectedCode: '<head>',
            codeBreakdown: [
                {
                    code: '<head>',
                    explanation: 'Opens the head section where we put metadata, links to stylesheets, and the page title'
                }
            ],
            tip: 'The head section is where you link CSS files, set the character encoding, and define the page title!',
            hint: 'Just type the opening head tag'
        },
        {
            id: 4,
            title: 'Character Encoding',
            instructionTitle: 'Setting the Character Set',
            description: 'The meta charset tag tells the browser which character encoding to use. UTF-8 supports almost all characters and symbols from all languages.',
            expectedCode: '<meta charset="UTF-8">',
            codeBreakdown: [
                {
                    code: '<meta',
                    explanation: 'Meta tags provide metadata about the HTML document'
                },
                {
                    code: 'charset="UTF-8"',
                    explanation: 'UTF-8 encoding supports international characters, emojis, and special symbols'
                },
                {
                    code: '>',
                    explanation: 'Meta tags are self-closing - no need for </meta>'
                }
            ],
            tip: 'UTF-8 is the most widely used character encoding on the web!',
            hint: 'Use the meta tag with the charset attribute set to UTF-8'
        },
        {
            id: 5,
            title: 'Page Title',
            instructionTitle: 'Giving Your Page a Title',
            description: 'The <title> element defines the title shown in the browser tab and used by search engines. It\'s one of the most important elements for SEO.',
            expectedCode: '<title>My First Page</title>',
            codeBreakdown: [
                {
                    code: '<title>',
                    explanation: 'Opens the title element'
                },
                {
                    code: 'My First Page',
                    explanation: 'The text that appears in the browser tab'
                },
                {
                    code: '</title>',
                    explanation: 'Closes the title element - this is required!'
                }
            ],
            tip: 'Good page titles are concise, descriptive, and include relevant keywords!',
            hint: 'The title needs both an opening and closing tag',
            output: 'Browser Tab: "My First Page"'
        },
        {
            id: 6,
            title: 'The Body Section',
            instructionTitle: 'Creating the Document Body',
            description: 'The <body> element contains all the visible content of your webpage - text, images, links, and everything users see and interact with.',
            expectedCode: '<body>',
            codeBreakdown: [
                {
                    code: '<body>',
                    explanation: 'Opens the body section - everything visible goes inside here'
                }
            ],
            tip: 'The body is where all your visible content lives - headings, paragraphs, images, and more!',
            hint: 'Just type the opening body tag'
        }
    ]
};
// Initialize the walkthrough when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    new WalkthroughEngine(htmlBasicsConfig);
});
