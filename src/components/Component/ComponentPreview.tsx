"use client";

import { useState } from 'react';
import { toast } from 'react-toastify';
import Preview from './Preview';


export default function ComponentPreview({ component }: { component: any }) {

    const [activeTab, setActiveTab] = useState("preview");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(component.code)
            .then(() => {
                toast.success("Code copied to clipboard!");
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
                toast.error("Failed to copy code!");
            });
    };


    return (
        <>
            <div className="p-4">
                <h2 className="font-bold text-2xl">{component.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{component.description}</p>

                {/* Tabs for Preview and Code */}
                <div className="flex border-b mb-4">
                    <button
                        onClick={() => setActiveTab('preview')}
                        className={`flex-1 py-2 text-center rounded-t-lg ${activeTab === 'preview' ? 'bg-blue-500 text-white font-bold' : 'bg-gray-200 text-gray-800'} transition duration-300 ease-in-out transform hover:scale-105`}
                    >
                        Preview
                    </button>
                    <button
                        onClick={() => setActiveTab('code')}
                        className={`flex-1 py-2 text-center rounded-t-lg ${activeTab === 'code' ? 'bg-blue-500 text-white font-bold' : 'bg-gray-200 text-gray-800'} transition duration-300 ease-in-out transform hover:scale-105`}
                    >
                        Code
                    </button>
                </div>


                <div className="border rounded-lg p-4 min-h-[40vh] bg-gray-50 relative">
                {activeTab === "preview" && <Preview code={component.code} />}
                    {activeTab === "code" && (
                        <pre className="bg-gray-100 p-2 rounded overflow-auto">
                            <code className="whitespace-pre">{component.code}</code>
                        </pre>
                    )}
                </div>

                <button
                    onClick={copyToClipboard}
                    className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors w-full"
                >
                    Copy Code
                </button>
            </div>
        </>
    );
}
