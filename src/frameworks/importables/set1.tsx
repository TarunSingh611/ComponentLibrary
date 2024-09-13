// reusableComponents.tsx
import React, { useState } from 'react';

// Generic Button Component
export const Button = ({ text = 'Click Me', onClick }: { text?: string; onClick?: () => void }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
            {text}
        </button>
    );
};

// Generic Card Component
export const Card = ({ title = 'Card Title', content = 'This is a simple card component.' }) => {
    return (
        <div className="border rounded shadow-md p-4 bg-white">
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-gray-700">{content}</p>
            <div className="mt-4">
                <Button text="Action" />
            </div>
        </div>
    );
};

// Generic Input Component with State
export const Input = ({ label = 'Label', placeholder = 'Enter text' }) => {
    const [value, setValue] = useState('');

    return (
        <div className="flex flex-col">
            <label className="mb-1 text-gray-700" htmlFor="textInput">{label}</label>
            <input
                id="textInput"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="border rounded p-2"
                placeholder={placeholder}
            />
            <small className="text-gray-500">You typed: {value}</small>
        </div>
    );
};

// Generic Modal Component with State for visibility
export const Modal = ({ title = 'Modal Title', content = 'Modal Content', onClose }: { title?: string; content?: string; onClose: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-4 shadow-lg w-1/3">
                <h2 className="font-bold text-lg">{title}</h2>
                <div className="mt-4">{content}</div>
                <Button text="Close" onClick={onClose} />
            </div>
        </div>
    );
};

// Generic Dropdown Component with State for selection
export const Dropdown = ({ options = ['Option 1', 'Option 2', 'Option 3'] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="border rounded p-2 bg-gray-200"
            >
                {selectedOption || 'Select an option'}
            </button>
            {isOpen && (
                <ul className="absolute border rounded bg-white shadow-lg mt-1">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
