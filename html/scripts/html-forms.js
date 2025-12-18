/**
 * HTML Forms & Inputs Walkthrough
 */
const htmlFormsConfig = {
    id: 'html-forms',
    title: 'Forms & Inputs',
    steps: [
        {
            id: 1,
            title: 'Form Element',
            instructionTitle: 'Creating a Form Container',
            description: 'The <form> element wraps all form inputs. It defines how data is sent with the action and method attributes.',
            expectedCode: '<form action="/submit" method="POST">',
            codeBreakdown: [
                {
                    code: '<form',
                    explanation: 'Opens the form element'
                },
                {
                    code: 'action="/submit"',
                    explanation: 'Where the form data will be sent when submitted'
                },
                {
                    code: 'method="POST"',
                    explanation: 'How to send the data - POST for sensitive data, GET for searches'
                },
                {
                    code: '>',
                    explanation: 'Closes the opening tag'
                }
            ],
            tip: 'Use POST for forms that change data, GET for forms that retrieve data!',
            hint: 'Include both action and method attributes'
        },
        {
            id: 2,
            title: 'Text Input',
            instructionTitle: 'Creating a Text Field',
            description: 'The <input> element with type="text" creates a single-line text field. The name attribute is essential for form submission.',
            expectedCode: '<input type="text" name="username" placeholder="Enter username">',
            codeBreakdown: [
                {
                    code: 'type="text"',
                    explanation: 'Specifies a text input field'
                },
                {
                    code: 'name="username"',
                    explanation: 'Identifies this field when form is submitted'
                },
                {
                    code: 'placeholder="Enter username"',
                    explanation: 'Hint text shown when field is empty'
                }
            ],
            tip: 'The name attribute is required for the data to be sent with the form!',
            hint: 'input is self-closing - no closing tag needed'
        },
        {
            id: 3,
            title: 'Label Element',
            instructionTitle: 'Adding Accessible Labels',
            description: 'The <label> element labels a form control. The for attribute should match the input\'s id for accessibility.',
            expectedCode: '<label for="email">Email:</label>',
            codeBreakdown: [
                {
                    code: '<label',
                    explanation: 'Opens the label element'
                },
                {
                    code: 'for="email"',
                    explanation: 'Links to an input with id="email" - clicking the label focuses the input'
                },
                {
                    code: '>Email:</label>',
                    explanation: 'The visible text and closing tag'
                }
            ],
            tip: 'Labels improve accessibility and usability - clicking the label activates the input!',
            hint: 'The for attribute value should match an input\'s id'
        },
        {
            id: 4,
            title: 'Email Input',
            instructionTitle: 'Creating an Email Field',
            description: 'The type="email" input provides built-in validation and shows an email keyboard on mobile devices.',
            expectedCode: '<input type="email" id="email" name="email" required>',
            codeBreakdown: [
                {
                    code: 'type="email"',
                    explanation: 'Browser validates that input looks like an email'
                },
                {
                    code: 'id="email"',
                    explanation: 'Links to the label with for="email"'
                },
                {
                    code: 'required',
                    explanation: 'Makes this field mandatory - form won\'t submit without it'
                }
            ],
            tip: 'HTML5 input types provide free validation and better mobile keyboards!',
            hint: 'Add the required attribute at the end'
        },
        {
            id: 5,
            title: 'Submit Button',
            instructionTitle: 'Creating a Submit Button',
            description: 'The button with type="submit" sends the form data to the server when clicked.',
            expectedCode: '<button type="submit">Send</button>',
            codeBreakdown: [
                {
                    code: '<button',
                    explanation: 'Opens the button element'
                },
                {
                    code: 'type="submit"',
                    explanation: 'Tells the browser this button submits the form'
                },
                {
                    code: '>Send</button>',
                    explanation: 'The button text users will see'
                }
            ],
            tip: 'Use descriptive button text like "Sign Up" or "Submit Order" instead of just "Submit"!',
            hint: 'Use button tags with type="submit"'
        }
    ]
};
document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    new WalkthroughEngine(htmlFormsConfig);
});
