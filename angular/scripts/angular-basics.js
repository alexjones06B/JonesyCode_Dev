"use strict";
/**
 * Angular Basics Walkthrough - Step definitions
 * Each step teaches fundamental Angular concepts about project structure and modules
 */
// Define the walkthrough configuration
const angularBasicsConfig = {
    id: 'angular-basics',
    title: 'Angular Basics',
    steps: [
        {
            id: 1,
            title: 'Understanding Angular Modules',
            instructionTitle: 'The NgModule Decorator',
            description: 'Angular applications are organized into <strong>modules</strong>. Every Angular app has at least one module - the <strong>root module</strong>, conventionally called <code>AppModule</code>. Modules group related functionality and declare what components, directives, and pipes belong to them.',
            expectedCode: '@NgModule({',
            output: '// This decorator marks the class as an Angular module\n// It tells Angular how to compile and run the code',
            detailedExplanation: '<strong>What NgModule Does:</strong> The @NgModule decorator is a function that takes a metadata object describing how to compile the component\'s template and how to create an injector at runtime. It identifies the module\'s own components, directives, and pipes, making them public so external components can use them.',
            codeBreakdown: [
                {
                    code: '@NgModule',
                    explanation: 'A decorator that marks a class as an Angular module. Decorators are prefixed with @ and provide metadata.'
                },
                {
                    code: '({',
                    explanation: 'The decorator takes a configuration object as its argument, which contains metadata about the module.'
                }
            ],
            tip: 'Every Angular application needs at least one NgModule - the root module that bootstraps the app!',
            hint: 'Start with the @ symbol followed by NgModule and an opening parenthesis and curly brace.'
        },
        {
            id: 2,
            title: 'Declaring Components',
            instructionTitle: 'The Declarations Array',
            description: 'The <strong>declarations</strong> array lists all components, directives, and pipes that belong to this module. Components must be declared in exactly one module before they can be used.',
            expectedCode: '    declarations: [AppComponent],',
            output: '// Tells Angular: "These components belong to this module"\n// Components can now be used in this module\'s templates',
            detailedExplanation: '<strong>Why Declarations Matter:</strong> When you create a component, Angular doesn\'t automatically know about it. By adding it to declarations, you\'re registering it with Angular\'s compiler so it can be used in templates. Each component can only be declared in ONE module.',
            codeBreakdown: [
                {
                    code: 'declarations:',
                    explanation: 'This property tells Angular which components, directives, and pipes belong to this module.'
                },
                {
                    code: '[AppComponent]',
                    explanation: 'An array containing the AppComponent class. All your module\'s components go in this array.'
                },
                {
                    code: ',',
                    explanation: 'Comma separates this property from the next one in the configuration object.'
                }
            ],
            tip: 'If you create a new component with ng generate component, the CLI automatically adds it to declarations!',
            hint: 'Use 4 spaces for indentation, followed by declarations: [AppComponent],'
        },
        {
            id: 3,
            title: 'Importing Other Modules',
            instructionTitle: 'The Imports Array',
            description: 'The <strong>imports</strong> array lists other modules whose exported classes are needed by component templates in THIS module. For example, BrowserModule provides essential services for running in a browser.',
            expectedCode: '    imports: [BrowserModule],',
            output: '// Imports BrowserModule which provides:\n// - Common directives (ngIf, ngFor)\n// - Browser-specific rendering\n// - DOM manipulation services',
            detailedExplanation: '<strong>Module Dependencies:</strong> Angular modules are like building blocks. By importing other modules, you gain access to their components, directives, and pipes. BrowserModule is special - it should only be imported once in the root module. Other modules use CommonModule instead.',
            codeBreakdown: [
                {
                    code: 'imports:',
                    explanation: 'Lists other Angular modules this module depends on.'
                },
                {
                    code: '[BrowserModule]',
                    explanation: 'BrowserModule is required for any browser-based Angular app. It includes CommonModule plus browser-specific features.'
                }
            ],
            tip: 'Only import BrowserModule in your root module! Feature modules should import CommonModule instead.',
            hint: 'Similar to declarations, but with imports: and BrowserModule in the array.'
        },
        {
            id: 4,
            title: 'Providing Services',
            instructionTitle: 'The Providers Array',
            description: 'The <strong>providers</strong> array lists services available for injection throughout this module. However, modern Angular prefers using <code>@Injectable({ providedIn: \'root\' })</code> in the service itself.',
            expectedCode: '    providers: [],',
            output: '// Services listed here are available for dependency injection\n// Empty array means no module-scoped services\n// Most services use providedIn: \'root\' instead',
            detailedExplanation: '<strong>Dependency Injection:</strong> Providers tell Angular\'s injector how to create service instances. When empty, no additional services are provided at this module level. The modern approach is to use providedIn: \'root\' in the @Injectable decorator, which makes the service available app-wide without listing it here.',
            codeBreakdown: [
                {
                    code: 'providers:',
                    explanation: 'Defines which services are available for dependency injection in this module.'
                },
                {
                    code: '[]',
                    explanation: 'Empty array - we\'re not registering any module-level services here.'
                }
            ],
            tip: 'With providedIn: \'root\', you rarely need to add services to providers anymore!',
            hint: 'Type providers: followed by an empty array [],'
        },
        {
            id: 5,
            title: 'Bootstrapping the App',
            instructionTitle: 'The Bootstrap Array',
            description: 'The <strong>bootstrap</strong> array defines the root component that Angular creates and inserts into the host page (index.html). This is the component that starts the whole application.',
            expectedCode: '    bootstrap: [AppComponent]',
            output: '// Angular will:\n// 1. Create an instance of AppComponent\n// 2. Find <app-root> in index.html\n// 3. Insert AppComponent\'s template there\n// 4. The app is now running!',
            detailedExplanation: '<strong>Application Startup:</strong> When Angular bootstraps the application, it looks at this array to find the root component(s). It then creates these components and renders them in the DOM. The selector of AppComponent (usually app-root) must exist in your index.html file.',
            codeBreakdown: [
                {
                    code: 'bootstrap:',
                    explanation: 'Defines the entry point component(s) for the application.'
                },
                {
                    code: '[AppComponent]',
                    explanation: 'AppComponent is the root - the first component that loads and contains all others.'
                }
            ],
            tip: 'Most apps have just one bootstrap component, but you can bootstrap multiple if needed!',
            hint: 'No comma after this one since it\'s the last property. Type bootstrap: [AppComponent]'
        },
        {
            id: 6,
            title: 'Exporting the Module Class',
            instructionTitle: 'Completing the Module',
            description: 'Finally, we close the decorator and export the class. The <strong>export</strong> keyword makes this module available to other parts of the application or for testing.',
            expectedCode: '})\nexport class AppModule { }',
            output: '// Complete AppModule is now ready!\n// This is imported in main.ts:\n// platformBrowserDynamic().bootstrapModule(AppModule)\n// \n// This starts your entire Angular application!',
            detailedExplanation: '<strong>Putting It All Together:</strong> The AppModule class itself is empty - all the configuration is in the @NgModule decorator. The export keyword makes it importable. In main.ts, Angular\'s platform bootstraps this module, which triggers the entire application startup process.',
            codeBreakdown: [
                {
                    code: '})',
                    explanation: 'Closes the configuration object and the @NgModule decorator.'
                },
                {
                    code: 'export class AppModule',
                    explanation: 'Exports the module class so it can be imported in main.ts for bootstrapping.'
                },
                {
                    code: '{ }',
                    explanation: 'The class body is empty - all configuration is in the decorator metadata.'
                }
            ],
            tip: 'The AppModule class body is typically empty. All the magic happens in the @NgModule decorator!',
            hint: 'Close with }) then on a new line: export class AppModule { }'
        }
    ]
};
// Initialize the walkthrough engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(angularBasicsConfig);
});
