/**
 * HTML Links & Images Walkthrough
 */

const htmlLinksImagesConfig = {
    id: 'html-links-images',
    title: 'Links & Images',
    steps: [
        {
            id: 1,
            title: 'Basic Link',
            instructionTitle: 'Creating Your First Link',
            description: 'The <a> (anchor) element creates hyperlinks to other pages, files, or locations. The href attribute specifies the destination.',
            expectedCode: '<a href="https://example.com">Visit Example</a>',
            codeBreakdown: [
                {
                    code: '<a',
                    explanation: 'Opens the anchor (link) element'
                },
                {
                    code: 'href="https://example.com"',
                    explanation: 'The href attribute contains the URL destination'
                },
                {
                    code: '>Visit Example</a>',
                    explanation: 'The clickable text users will see'
                }
            ],
            tip: 'Always use descriptive link text - avoid "click here"!',
            hint: 'Use the a tag with an href attribute'
        },
        {
            id: 2,
            title: 'Link in New Tab',
            instructionTitle: 'Opening Links in New Tabs',
            description: 'The target="_blank" attribute opens the link in a new browser tab. This is useful for external links.',
            expectedCode: '<a href="https://google.com" target="_blank">Google</a>',
            codeBreakdown: [
                {
                    code: 'target="_blank"',
                    explanation: 'Opens the link in a new tab or window'
                }
            ],
            tip: 'For security, add rel="noopener noreferrer" when using target="_blank"!',
            hint: 'Add the target attribute with _blank as the value'
        },
        {
            id: 3,
            title: 'Basic Image',
            instructionTitle: 'Adding Images to Your Page',
            description: 'The <img> element embeds an image. It requires the src attribute for the image location and alt attribute for accessibility.',
            expectedCode: '<img src="photo.jpg" alt="A beautiful photo">',
            codeBreakdown: [
                {
                    code: '<img',
                    explanation: 'The image element - it\'s self-closing (no </img> needed)'
                },
                {
                    code: 'src="photo.jpg"',
                    explanation: 'The source attribute - where the image file is located'
                },
                {
                    code: 'alt="A beautiful photo"',
                    explanation: 'Alternative text - describes the image for screen readers and when images fail to load'
                },
                {
                    code: '>',
                    explanation: 'Self-closing tag'
                }
            ],
            tip: 'Always include meaningful alt text for accessibility!',
            hint: 'img is a self-closing tag - no closing tag needed'
        },
        {
            id: 4,
            title: 'Image with Size',
            instructionTitle: 'Controlling Image Dimensions',
            description: 'You can specify width and height attributes to control image size. This helps browsers reserve space while loading.',
            expectedCode: '<img src="logo.png" alt="Logo" width="200" height="100">',
            codeBreakdown: [
                {
                    code: 'width="200"',
                    explanation: 'Sets the image width to 200 pixels'
                },
                {
                    code: 'height="100"',
                    explanation: 'Sets the image height to 100 pixels'
                }
            ],
            tip: 'Setting dimensions prevents layout shift while images load!',
            hint: 'Add width and height attributes after the alt attribute'
        },
        {
            id: 5,
            title: 'Image as Link',
            instructionTitle: 'Making Images Clickable',
            description: 'You can wrap an image in an anchor tag to make it clickable. This is common for logos that link to the homepage.',
            expectedCode: '<a href="index.html"><img src="logo.png" alt="Home"></a>',
            codeBreakdown: [
                {
                    code: '<a href="index.html">',
                    explanation: 'The link wraps around the image'
                },
                {
                    code: '<img src="logo.png" alt="Home">',
                    explanation: 'The image that becomes clickable'
                },
                {
                    code: '</a>',
                    explanation: 'Closes the anchor tag'
                }
            ],
            tip: 'The alt text should describe where the link goes when used as a link!',
            hint: 'Put the img element inside an anchor element'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    new WalkthroughEngine(htmlLinksImagesConfig);
});
