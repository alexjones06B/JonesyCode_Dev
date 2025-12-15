/**
 * Angular Templates & Data Binding Walkthrough - Step definitions
 * Each step teaches Angular template syntax and binding concepts
 */

// Define the walkthrough configuration
const angularTemplatesConfig: WalkthroughConfig = {
    id: 'angular-templates',
    title: 'Templates & Data Binding',
    steps: [
        {
            id: 1,
            title: 'Interpolation',
            instructionTitle: 'Displaying Data with {{ }}',
            description: '<strong>Interpolation</strong> is the simplest way to display component data in templates. Use double curly braces to insert the value of a property or expression into your HTML.',
            expectedCode: '<h1>{{ title }}</h1>',
            output: '// If component has: title = "Welcome"\n// Renders as: <h1>Welcome</h1>\n// \n// Angular evaluates the expression and converts it to text',
            detailedExplanation: '<strong>How Interpolation Works:</strong> Angular evaluates the expression inside {{ }}, converts the result to a string, and inserts it into the DOM. You can use simple properties, expressions ({{ 1 + 1 }}), method calls ({{ getTitle() }}), and even the safe navigation operator ({{ user?.name }}). Interpolation is one-way: data flows FROM component TO template.',
            codeBreakdown: [
                {
                    code: '{{ }}',
                    explanation: 'Double curly braces - the interpolation syntax. Angular replaces this with the expression\'s value.'
                },
                {
                    code: 'title',
                    explanation: 'A property from the component class. Could also be an expression like {{ firstName + " " + lastName }}.'
                }
            ],
            tip: 'Interpolation converts everything to strings. For complex bindings, use property binding instead!',
            hint: 'Create an h1 element with {{ title }} inside it.'
        },
        {
            id: 2,
            title: 'Property Binding',
            instructionTitle: 'Binding Element Properties',
            description: '<strong>Property binding</strong> sets a property of an HTML element or component to a value from your component. Use square brackets [property] to bind to DOM properties.',
            expectedCode: '<img [src]="imageUrl" [alt]="imageAlt">',
            output: '// If imageUrl = "/avatar.png" and imageAlt = "User avatar"\n// Renders as: <img src="/avatar.png" alt="User avatar">\n// \n// Properties update automatically when values change!',
            detailedExplanation: '<strong>Property vs Attribute:</strong> Property binding sets DOM properties, not HTML attributes. Properties are the live values in JavaScript, while attributes are the initial values in HTML. For example, [disabled]="isDisabled" sets the disabled PROPERTY. Angular updates properties dynamically when your component data changes.',
            codeBreakdown: [
                {
                    code: '[src]',
                    explanation: 'Square brackets indicate property binding. This binds to the src property.'
                },
                {
                    code: '"imageUrl"',
                    explanation: 'The component property whose value will be assigned to src.'
                },
                {
                    code: '[alt]',
                    explanation: 'Another property binding for the alt attribute.'
                }
            ],
            tip: 'Use property binding for dynamic values. Use regular attributes for static values like class="header".',
            hint: 'Bind both src and alt using square brackets to component properties.'
        },
        {
            id: 3,
            title: 'Event Binding',
            instructionTitle: 'Responding to User Actions',
            description: '<strong>Event binding</strong> listens for DOM events (clicks, input, etc.) and calls a method in your component. Use parentheses (event) for event binding.',
            expectedCode: '<button (click)="handleClick()">Click Me</button>',
            output: '// When user clicks the button:\n// 1. Angular captures the click event\n// 2. Calls the handleClick() method in your component\n// 3. The method can update properties, call APIs, etc.',
            detailedExplanation: '<strong>Events Drive Interactivity:</strong> Event binding is how your component responds to user input. Common events include (click), (input), (submit), (keyup), (mouseenter), and (change). You can also access the event object with $event: (click)="handleClick($event)". This enables rich, interactive applications.',
            codeBreakdown: [
                {
                    code: '(click)',
                    explanation: 'Parentheses indicate event binding. Listens for the click event.'
                },
                {
                    code: '"handleClick()"',
                    explanation: 'The component method to call when the event fires. Include () to invoke it.'
                }
            ],
            tip: 'You can access the event object with $event: (keyup)="onKey($event)" to get keyboard info!',
            hint: 'Create a button with (click) bound to handleClick()'
        },
        {
            id: 4,
            title: 'Two-Way Binding',
            instructionTitle: 'The [(ngModel)] Syntax',
            description: '<strong>Two-way binding</strong> combines property and event binding. Changes in the component update the input, AND changes in the input update the component. The "banana in a box" syntax [( )] makes this easy.',
            expectedCode: '<input [(ngModel)]="username">',
            output: '// If username = "Alex" in component:\n// - Input displays "Alex"\n// \n// When user types "Bob":\n// - username in component becomes "Bob"\n// - Any {{ username }} updates to "Bob"',
            detailedExplanation: '<strong>How Two-Way Binding Works:</strong> [(ngModel)] is shorthand for [ngModel]="username" (ngModelChange)="username = $event". It binds the input\'s value to the property AND listens for changes to update the property. This requires importing FormsModule in your module. Two-way binding keeps your UI and data perfectly in sync.',
            codeBreakdown: [
                {
                    code: '[( )]',
                    explanation: '"Banana in a box" - combines [] property binding and () event binding.'
                },
                {
                    code: 'ngModel',
                    explanation: 'A directive from FormsModule that enables form control binding.'
                },
                {
                    code: '"username"',
                    explanation: 'The component property that syncs with the input value.'
                }
            ],
            tip: 'Remember to import FormsModule in your module to use ngModel! It\'s in @angular/forms.',
            hint: 'Create an input with [(ngModel)] bound to username'
        },
        {
            id: 5,
            title: 'Structural Directive - ngIf',
            instructionTitle: 'Conditional Rendering',
            description: '<strong>*ngIf</strong> adds or removes elements from the DOM based on a condition. The asterisk (*) indicates a structural directive that modifies the DOM structure.',
            expectedCode: '<div *ngIf="isLoggedIn">\n    Welcome back, {{ username }}!\n</div>',
            output: '// If isLoggedIn = true:\n// <div>Welcome back, Alex!</div> appears\n// \n// If isLoggedIn = false:\n// The entire div is REMOVED from the DOM (not just hidden)',
            detailedExplanation: '<strong>DOM Manipulation:</strong> Unlike hiding with CSS, *ngIf completely removes the element and its children from the DOM when false. This saves memory and prevents unnecessary component initialization. You can also use *ngIf with else: *ngIf="condition; else elseBlock" and define a template with #elseBlock.',
            codeBreakdown: [
                {
                    code: '*ngIf',
                    explanation: 'Structural directive that conditionally includes this element. The * is required.'
                },
                {
                    code: '"isLoggedIn"',
                    explanation: 'The condition to evaluate. If truthy, element is included; if falsy, it\'s removed.'
                },
                {
                    code: '{{ username }}',
                    explanation: 'Interpolation inside the conditional block - only rendered when condition is true.'
                }
            ],
            tip: 'Use *ngIf for conditional content. The element is fully removed, not just hidden with CSS!',
            hint: 'Create a div with *ngIf="isLoggedIn" containing a welcome message with {{ username }}'
        },
        {
            id: 6,
            title: 'Structural Directive - ngFor',
            instructionTitle: 'Looping Over Lists',
            description: '<strong>*ngFor</strong> repeats an element for each item in a collection. It\'s like a for-each loop in your template - essential for displaying lists of data.',
            expectedCode: '<ul>\n    <li *ngFor="let item of items">{{ item.name }}</li>\n</ul>',
            output: '// If items = [{name: "Apple"}, {name: "Banana"}, {name: "Cherry"}]\n// Renders:\n// <ul>\n//   <li>Apple</li>\n//   <li>Banana</li>\n//   <li>Cherry</li>\n// </ul>',
            detailedExplanation: '<strong>Iterating Collections:</strong> *ngFor creates one instance of the element for each item in the array. The "let item" syntax declares a template variable for the current item. You can also access the index: *ngFor="let item of items; let i = index". For performance with large lists, use trackBy: *ngFor="let item of items; trackBy: trackById".',
            codeBreakdown: [
                {
                    code: '*ngFor',
                    explanation: 'Structural directive that repeats this element for each item in a collection.'
                },
                {
                    code: 'let item of items',
                    explanation: '"item" is the loop variable, "items" is the array from your component.'
                },
                {
                    code: '{{ item.name }}',
                    explanation: 'Access properties of the current item in the loop.'
                }
            ],
            tip: 'Always use trackBy with *ngFor for better performance with large or frequently changing lists!',
            hint: 'Create a ul with an li that uses *ngFor to loop through items'
        }
    ]
};

// Initialize the walkthrough engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(angularTemplatesConfig);
});
