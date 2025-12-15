"use strict";
/**
 * Angular Services & Dependency Injection Walkthrough - Step definitions
 * Each step teaches how to create and use services in Angular
 */
// Define the walkthrough configuration
const angularServicesConfig = {
    id: 'angular-services',
    title: 'Services & Dependency Injection',
    steps: [
        {
            id: 1,
            title: 'Importing Injectable',
            instructionTitle: 'The Injectable Decorator',
            description: 'Services in Angular use the <strong>@Injectable</strong> decorator. This marks the class as available for dependency injection, allowing Angular to create and provide instances where needed.',
            expectedCode: "import { Injectable } from '@angular/core';",
            output: '// This import gives us access to @Injectable\n// Injectable marks a class as a service that can be injected\n// It\'s the foundation of Angular\'s DI system',
            detailedExplanation: '<strong>What is a Service?</strong> A service is a class that handles logic that doesn\'t belong in a component - like fetching data from an API, managing state, or sharing data between components. The @Injectable decorator tells Angular this class participates in the dependency injection system.',
            codeBreakdown: [
                {
                    code: 'import',
                    explanation: 'TypeScript keyword for bringing in external dependencies.'
                },
                {
                    code: '{ Injectable }',
                    explanation: 'The decorator that marks a class as injectable.'
                },
                {
                    code: "'@angular/core'",
                    explanation: 'Angular\'s core package containing essential decorators.'
                }
            ],
            tip: 'Services keep your components lean - components handle UI, services handle logic and data!',
            hint: 'Import Injectable from @angular/core'
        },
        {
            id: 2,
            title: 'The Injectable Decorator',
            instructionTitle: 'Providing the Service',
            description: 'The <strong>@Injectable</strong> decorator with <code>providedIn: \'root\'</code> makes the service available throughout your entire application as a singleton - one instance shared everywhere.',
            expectedCode: "@Injectable({\n    providedIn: 'root'\n})",
            output: '// This service is now:\n// ✓ Available app-wide (no need to add to providers)\n// ✓ A singleton (one instance shared everywhere)\n// ✓ Tree-shakable (removed if unused)',
            detailedExplanation: '<strong>providedIn: \'root\':</strong> This is the recommended way to provide services. It registers the service at the application root, meaning one instance is shared across all components. If no component injects it, the service is tree-shaken (removed from the bundle). This is more efficient than the older providers array approach.',
            codeBreakdown: [
                {
                    code: '@Injectable({',
                    explanation: 'The decorator that enables dependency injection for this class.'
                },
                {
                    code: "providedIn: 'root'",
                    explanation: 'Registers this service at the root level - available everywhere, single instance.'
                },
                {
                    code: '})',
                    explanation: 'Closes the decorator configuration.'
                }
            ],
            tip: 'providedIn: \'root\' means the service is a singleton - all components share the same instance!',
            hint: 'Add @Injectable with providedIn: \'root\' in the configuration object'
        },
        {
            id: 3,
            title: 'Creating the Service Class',
            instructionTitle: 'Service with Data',
            description: 'The service class contains properties and methods that provide functionality to components. Let\'s create a simple UserService that manages a list of users.',
            expectedCode: "export class UserService {\n    private users: string[] = [];",
            output: '// UserService now has:\n// - A private users array (only accessible within the service)\n// - Encapsulated data that components can access via methods',
            detailedExplanation: '<strong>Service Encapsulation:</strong> By making the users array private, we control how components interact with the data. They can\'t directly modify the array - they must use our methods. This is a key principle of good service design: expose functionality through methods, keep implementation details private.',
            codeBreakdown: [
                {
                    code: 'export class UserService',
                    explanation: 'The service class, exported so components can import it.'
                },
                {
                    code: 'private users: string[]',
                    explanation: 'A private property - only accessible within this class, not from components.'
                },
                {
                    code: '= []',
                    explanation: 'Initialize as an empty array.'
                }
            ],
            tip: 'Use private for service internals. Components should interact through public methods!',
            hint: 'Export the class and declare a private users array of strings'
        },
        {
            id: 4,
            title: 'Adding Service Methods',
            instructionTitle: 'Public API Methods',
            description: 'Add methods that components can call to interact with the service. These methods form the service\'s public API - the contract between the service and its consumers.',
            expectedCode: "    addUser(name: string): void {\n        this.users.push(name);\n    }\n\n    getUsers(): string[] {\n        return [...this.users];\n    }",
            output: '// Components can now:\n// userService.addUser("Alice");  // Add a user\n// userService.getUsers();         // Get all users\n// \n// The service manages all user data operations!',
            detailedExplanation: '<strong>Service Methods:</strong> addUser modifies the internal state, while getUsers returns a copy of the data (using spread operator [...this.users]). Returning a copy prevents external code from accidentally modifying the internal array. This pattern protects your data integrity.',
            codeBreakdown: [
                {
                    code: 'addUser(name: string): void',
                    explanation: 'A method to add a new user. Takes a name, returns nothing.'
                },
                {
                    code: 'this.users.push(name)',
                    explanation: 'Adds the name to the private users array.'
                },
                {
                    code: 'getUsers(): string[]',
                    explanation: 'Returns the list of users. Return type is string array.'
                },
                {
                    code: '[...this.users]',
                    explanation: 'Spread operator creates a copy, protecting the internal array.'
                }
            ],
            tip: 'Return copies of arrays/objects from services to prevent external modification!',
            hint: 'Add addUser and getUsers methods with proper TypeScript types'
        },
        {
            id: 5,
            title: 'Using the Service in a Component',
            instructionTitle: 'Constructor Injection',
            description: 'To use a service in a component, inject it through the <strong>constructor</strong>. Angular\'s DI system automatically provides an instance of the service.',
            expectedCode: "constructor(private userService: UserService) {\n    this.users = this.userService.getUsers();\n}",
            output: '// When this component is created:\n// 1. Angular sees UserService in the constructor\n// 2. Angular provides the singleton instance\n// 3. Component can immediately use it to get users\n// \n// No need to create the service manually!',
            detailedExplanation: '<strong>How DI Works:</strong> When Angular creates your component, it looks at the constructor parameters. For each one with a type annotation (UserService), it checks its injector for a provider. With providedIn: \'root\', Angular finds the service and injects the singleton instance. The "private" keyword automatically creates a class property.',
            codeBreakdown: [
                {
                    code: 'constructor(',
                    explanation: 'The constructor where dependencies are injected.'
                },
                {
                    code: 'private userService: UserService',
                    explanation: 'Declares a private property and tells Angular to inject UserService.'
                },
                {
                    code: 'this.userService.getUsers()',
                    explanation: 'Call the service method to get data.'
                }
            ],
            tip: 'The private keyword in the constructor automatically creates and assigns the property!',
            hint: 'Create a constructor with UserService injected, then call getUsers()'
        }
    ]
};
// Initialize the walkthrough engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WalkthroughEngine(angularServicesConfig);
});
