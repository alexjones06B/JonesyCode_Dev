/**
 * TypeScript Interfaces Walkthrough - Step definitions
 */

const typescriptInterfacesConfig: WalkthroughConfig = {
    id: 'typescript-interfaces',
    title: 'TypeScript Interfaces',
    steps: [
        {
            id: 1,
            title: 'Creating Your First Interface',
            instructionTitle: 'Defining Object Shapes',
            description: 'An <strong>interface</strong> defines the structure of an object. It\'s like a contract that says "any object of this type must have these properties."',
            expectedCode: 'interface User {\n    name: string;\n}',
            codeBreakdown: [
                {
                    code: 'interface',
                    explanation: 'The INTERFACE keyword starts an interface definition.'
                },
                {
                    code: 'User',
                    explanation: 'The interface name. Use PascalCase (capitalize first letter) for interface names.'
                },
                {
                    code: '{ }',
                    explanation: 'Curly braces contain the interface body with property definitions.'
                },
                {
                    code: 'name: string;',
                    explanation: 'A required property "name" of type string. All Users must have a name.'
                }
            ],
            tip: 'Interface names typically use PascalCase (User, not user).',
            hint: 'Start with "interface User {" then add "name: string;" inside, and close with "}"'
        },
        {
            id: 2,
            title: 'Multiple Properties',
            instructionTitle: 'Adding More Properties',
            description: 'Interfaces can have multiple properties. Each property has a name and a type.',
            expectedCode: 'interface Product {\n    id: number;\n    name: string;\n    price: number;\n}',
            codeBreakdown: [
                {
                    code: 'interface Product',
                    explanation: 'Defining an interface for products.'
                },
                {
                    code: 'id: number;',
                    explanation: 'A numeric ID property.'
                },
                {
                    code: 'name: string;',
                    explanation: 'A string name property.'
                },
                {
                    code: 'price: number;',
                    explanation: 'A numeric price property.'
                }
            ],
            tip: 'Each property goes on its own line for readability.',
            hint: 'Define three properties: id, name, and price with their types.'
        },
        {
            id: 3,
            title: 'Optional Properties',
            instructionTitle: 'Making Properties Optional',
            description: 'Add a <strong>?</strong> after a property name to make it optional. Objects can be created with or without optional properties.',
            expectedCode: 'interface Config {\n    name: string;\n    debug?: boolean;\n}',
            codeBreakdown: [
                {
                    code: 'name: string;',
                    explanation: 'A required property - every Config must have a name.'
                },
                {
                    code: 'debug?: boolean;',
                    explanation: 'The ? makes this OPTIONAL. Config objects may or may not have debug.'
                }
            ],
            tip: 'Optional properties are great for configuration objects where not all settings are required.',
            hint: 'The question mark goes after the property name: debug?'
        },
        {
            id: 4,
            title: 'Using an Interface',
            instructionTitle: 'Creating Objects with Interfaces',
            description: 'Once you define an interface, use it as a type annotation when creating objects.',
            expectedCode: 'const user: User = {\n    name: "Alice"\n};',
            codeBreakdown: [
                {
                    code: 'const user',
                    explanation: 'Declaring a constant named "user".'
                },
                {
                    code: ': User',
                    explanation: 'Type annotation using the User interface. This object must match the interface.'
                },
                {
                    code: '= { name: "Alice" }',
                    explanation: 'The object value with the required "name" property.'
                }
            ],
            tip: 'TypeScript will error if you miss required properties or add properties not in the interface.',
            hint: 'Use the interface name as the type, then create an object with matching properties.'
        },
        {
            id: 5,
            title: 'Readonly Properties',
            instructionTitle: 'Preventing Property Changes',
            description: 'Use <strong>readonly</strong> to prevent a property from being changed after the object is created.',
            expectedCode: 'interface Point {\n    readonly x: number;\n    readonly y: number;\n}',
            codeBreakdown: [
                {
                    code: 'readonly x: number;',
                    explanation: 'The READONLY modifier prevents x from being changed after creation.'
                },
                {
                    code: 'readonly y: number;',
                    explanation: 'Same for y - it becomes immutable after the object is created.'
                }
            ],
            tip: 'Use readonly for data that should never change, like IDs or coordinates.',
            hint: 'Add "readonly" before each property name.'
        },
        {
            id: 6,
            title: 'Extending Interfaces',
            instructionTitle: 'Building on Other Interfaces',
            description: 'Interfaces can <strong>extend</strong> other interfaces to inherit their properties.',
            expectedCode: 'interface Admin extends User {\n    role: string;\n}',
            codeBreakdown: [
                {
                    code: 'interface Admin',
                    explanation: 'A new interface called Admin.'
                },
                {
                    code: 'extends User',
                    explanation: 'EXTENDS inherits all properties from User. Admin will have "name" plus its own properties.'
                },
                {
                    code: 'role: string;',
                    explanation: 'An additional property only for Admin.'
                }
            ],
            tip: 'Extending interfaces helps avoid repeating common properties.',
            hint: 'Use "extends User" after the interface name.'
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    new WalkthroughEngine(typescriptInterfacesConfig);
});
