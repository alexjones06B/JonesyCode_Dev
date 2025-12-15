"use strict";
/**
 * Angular Components Walkthrough - Step definitions
 * Each step teaches how to build Angular components
 */
// Define the walkthrough configuration
const angularComponentsConfig = {
    id: 'angular-components',
    title: 'Angular Components',
    steps: [
        {
            id: 1,
            title: 'Importing Component Decorator',
            instructionTitle: 'The Import Statement',
            description: 'Every Angular component starts with importing the <strong>Component</strong> decorator from @angular/core. This decorator transforms a plain TypeScript class into an Angular component.',
            expectedCode: "import { Component } from '@angular/core';",
            output: '// This import gives us access to the @Component decorator\n// @angular/core is Angular\'s main package with essential building blocks',
            detailedExplanation: '<strong>What This Import Provides:</strong> The Component decorator is a function that adds metadata to your class, telling Angular how to process, instantiate, and use this component. The @angular/core package contains the fundamental pieces of Angular including decorators, dependency injection, and change detection.',
            codeBreakdown: [
                {
                    code: 'import',
                    explanation: 'TypeScript keyword for bringing in external dependencies.'
                },
                {
                    code: '{ Component }',
                    explanation: 'Destructuring to import just the Component decorator from the package.'
                },
                {
                    code: "'@angular/core'",
                    explanation: 'The core Angular package containing essential decorators and types.'
                }
            ],
            tip: 'You\'ll also import Input, Output, OnInit, and other decorators from @angular/core as you learn more!',
            hint: 'Type the import statement with single quotes around @angular/core'
        },
        {
            id: 2,
            title: 'The Component Decorator',
            instructionTitle: 'Defining Component Metadata',
            description: 'The <strong>@Component</strong> decorator marks a class as an Angular component and provides configuration metadata. The most important property is the <strong>selector</strong> - the HTML tag used to place this component.',
            expectedCode: "@Component({\n    selector: 'app-hello',",
            output: '// This component can now be used as:\n// <app-hello></app-hello>\n// in any template where it\'s available',
            detailedExplanation: '<strong>The Selector:</strong> Think of the selector as creating a custom HTML element. When Angular sees <app-hello> in a template, it replaces it with this component\'s template. The "app-" prefix is a convention to avoid conflicts with native HTML elements and third-party components.',
            codeBreakdown: [
                {
                    code: '@Component({',
                    explanation: 'The decorator that transforms this class into an Angular component.'
                },
                {
                    code: "selector: 'app-hello'",
                    explanation: 'The CSS selector that identifies this component in templates. Use kebab-case with an app- prefix.'
                }
            ],
            tip: 'Component selectors should be kebab-case and prefixed (app-, my-, etc.) to avoid conflicts!',
            hint: 'Start with @Component({ then on a new line with 4 spaces: selector: \'app-hello\','
        },
        {
            id: 3,
            title: 'Adding a Template',
            instructionTitle: 'Inline Template',
            description: 'The <strong>template</strong> property defines the HTML that renders when the component is displayed. For simple components, inline templates using backticks allow multi-line HTML.',
            expectedCode: "    template: `\n        <h1>{{ title }}</h1>\n        <p>{{ message }}</p>\n    `",
            output: '// If title = "Hello" and message = "Welcome!"\n// Renders as:\n// <h1>Hello</h1>\n// <p>Welcome!</p>',
            detailedExplanation: '<strong>Templates Are Powerful:</strong> Angular templates look like HTML but with superpowers. The {{ }} syntax (interpolation) displays component properties. Templates can include directives like *ngIf and *ngFor, event bindings like (click), and property bindings like [disabled]. For larger templates, use templateUrl to reference an external .html file.',
            codeBreakdown: [
                {
                    code: 'template:',
                    explanation: 'Defines the inline HTML template for this component.'
                },
                {
                    code: '`...`',
                    explanation: 'Template literals (backticks) allow multi-line strings in JavaScript/TypeScript.'
                },
                {
                    code: '{{ title }}',
                    explanation: 'Interpolation - displays the value of the title property from the component class.'
                }
            ],
            tip: 'Use template for small components, templateUrl for larger ones. Keep templates focused and readable!',
            hint: 'Use backticks for the template and include {{ title }} and {{ message }} interpolations.'
        },
        {
            id: 4,
            title: 'Closing the Decorator',
            instructionTitle: 'Component Class Declaration',
            description: 'After the decorator, we declare the component class using <strong>export class</strong>. The class contains the component\'s data (properties) and behavior (methods).',
            expectedCode: "})\nexport class HelloComponent {",
            output: '// The class is now:\n// 1. Decorated with @Component metadata\n// 2. Exported so other modules can import it\n// 3. Ready to hold properties and methods',
            detailedExplanation: '<strong>Class = Component Logic:</strong> The decorator defines HOW the component is used (selector, template), while the class defines WHAT it does. Properties become the component\'s state, and methods handle user interactions and business logic. The class name typically ends with "Component" by convention.',
            codeBreakdown: [
                {
                    code: '})',
                    explanation: 'Closes the @Component decorator configuration object.'
                },
                {
                    code: 'export class',
                    explanation: 'Makes the class available for import in other files and modules.'
                },
                {
                    code: 'HelloComponent',
                    explanation: 'The class name - by convention, ends with "Component".'
                },
                {
                    code: '{',
                    explanation: 'Opens the class body where properties and methods are defined.'
                }
            ],
            tip: 'Component class names use PascalCase and end with "Component" - HelloComponent, UserListComponent, etc.',
            hint: 'Close the decorator with }) then start the class: export class HelloComponent {'
        },
        {
            id: 5,
            title: 'Adding Properties',
            instructionTitle: 'Component State',
            description: 'Properties store the component\'s data. These values can be displayed in the template using interpolation {{ }} and updated by methods or user interactions.',
            expectedCode: "    title: string = 'Hello Angular!';\n    message: string = 'Welcome to components!';",
            output: '// These properties are now available in the template:\n// {{ title }} displays "Hello Angular!"\n// {{ message }} displays "Welcome to components!"',
            detailedExplanation: '<strong>Component State:</strong> Properties are the heart of your component\'s state. When a property changes, Angular automatically updates the view to reflect the new value - this is called change detection. TypeScript types (: string) ensure you only assign valid values, catching errors at compile time.',
            codeBreakdown: [
                {
                    code: 'title: string',
                    explanation: 'Declares a property named "title" with TypeScript type string.'
                },
                {
                    code: "= 'Hello Angular!'",
                    explanation: 'Initializes the property with a default value.'
                },
                {
                    code: 'message: string',
                    explanation: 'Another string property to demonstrate multiple properties.'
                }
            ],
            tip: 'In Angular, when you change a property value, the view updates automatically - that\'s the magic of data binding!',
            hint: 'Declare both properties with their types and initial values on separate lines.'
        },
        {
            id: 6,
            title: 'Adding Methods',
            instructionTitle: 'Component Behavior',
            description: 'Methods define what your component can DO. They can modify properties, call services, handle events, and perform any logic your component needs.',
            expectedCode: "    updateMessage(newMessage: string): void {\n        this.message = newMessage;\n    }",
            output: '// When called: updateMessage("New text!")\n// The message property becomes "New text!"\n// The template automatically updates to show the new value',
            detailedExplanation: '<strong>Methods Drive Interactivity:</strong> Methods are called from templates (via event binding) or from other methods. The <code>this</code> keyword refers to the component instance, giving access to all properties. When a method changes a property, Angular detects this and re-renders the affected parts of the template.',
            codeBreakdown: [
                {
                    code: 'updateMessage',
                    explanation: 'The method name - use camelCase for methods.'
                },
                {
                    code: '(newMessage: string)',
                    explanation: 'A typed parameter - the method expects a string argument.'
                },
                {
                    code: ': void',
                    explanation: 'Return type - void means this method doesn\'t return a value.'
                },
                {
                    code: 'this.message = newMessage',
                    explanation: '"this" refers to the component instance. We\'re updating its message property.'
                }
            ],
            tip: 'Always use "this" to access component properties inside methods!',
            hint: 'Define a method that takes a string parameter and assigns it to this.message'
        },
        {
            id: 7,
            title: 'Completing the Component',
            instructionTitle: 'Closing the Class',
            description: 'Close the class with a curly brace. Your component is now complete! It can be declared in a module and used via its selector in templates.',
            expectedCode: '}',
            output: '// Complete HelloComponent:\n// - Selector: <app-hello></app-hello>\n// - Properties: title, message\n// - Method: updateMessage()\n// \n// Ready to use in any template!',
            detailedExplanation: '<strong>Component Complete!</strong> You\'ve created a fully functional Angular component. To use it: 1) Declare it in a module\'s declarations array, 2) Use <app-hello></app-hello> in any template within that module. The component will render its template and respond to property changes.',
            codeBreakdown: [
                {
                    code: '}',
                    explanation: 'Closes the component class. The component is now complete and ready to use.'
                }
            ],
            tip: 'Remember: components must be declared in a module\'s declarations array before they can be used!',
            hint: 'Simply close the class with a closing curly brace.'
        }
    ]
};
// Initialize the walkthrough engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(angularComponentsConfig);
});
