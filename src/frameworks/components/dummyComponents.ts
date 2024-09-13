import React from 'react';
import { Button, Card, Input, Modal, Dropdown } from '@/frameworks/importables/set1';

const dummyComponents = [
    {
        id: '1',
        name: 'Button',
        description: 'A versatile button component that supports different styles and sizes.',
        code: `
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
                Click Me
            </button>
        `,
        preview: <Button />,
    },
    {
        id: '2',
        name: 'Card',
        description: 'A flexible card component with an optional header and footer.',
        code: `
            <div className="border rounded shadow-md p-4 bg-white">
                <h2 className="font-bold text-lg">Card Title</h2>
                <p className="text-gray-700">This is a simple card component that can hold any content.</p>
                <div className="mt-4">
                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">Action</button>
                </div>
            </div>
        `,
        preview: <Card />,
    },
    {
        id: '3',
        name: 'Input',
        description: 'A customizable text input component with support for validation.',
        code: `
            <div className="flex flex-col">
                <label className="mb-1 text-gray-700" htmlFor="textInput">Label</label>
                <input 
                    id="textInput" 
                    type="text" 
                    className="border rounded p-2" 
                    placeholder="Enter text" 
                    aria-describedby="textInputHelp" 
                />
                <small id="textInputHelp" className="text-gray-500">This is a help text for the input.</small>
            </div>
        `,
        preview: <Input />,
    },
    {
        id: '4',
        name: 'Modal',
        description: 'A reusable modal component that can be easily customized.',
        code: `
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-4 shadow-lg w-1/3">
                    <h2 className="font-bold text-lg">Modal Title</h2>
                    <div className="mt-4">Modal Content</div>
                    <button 
                        className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        `,
        preview: () => {
            const [isOpen, setIsOpen] = React.useState(true);
            return isOpen ? <Modal title="Modal Title" content="Modal Content" onClose={() => setIsOpen(false)} /> : null;
        },
    },
    {
        id: '5',
        name: 'Dropdown',
        description: 'A customizable dropdown component with options for selection.',
        code: `
            <div className="relative">
                <button className="border rounded p-2 bg-gray-200">Select an option</button>
                <ul className="absolute border rounded bg-white shadow-lg mt-1">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                </ul>
            </div>
        `,
        preview: () => (
            <Dropdown />
        ),
    },
];

export default dummyComponents;
