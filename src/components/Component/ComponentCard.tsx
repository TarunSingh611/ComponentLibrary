"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faClipboard, faCog } from '@fortawesome/free-solid-svg-icons';
import Preview from './Preview';

const ComponentCard = ({ component }: { component: any }) => {

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

    const handleClick = () => {
        copyToClipboard();
        // Optionally navigate to the customization page
        window.location.href = `/customize/${component.id}`;
    };

    return (
        <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white w-full h-[70vh] overflow-hidden">
            <div className="p-4 h-full flex flex-col">
                <h2 className="font-bold text-lg mb-2">{component.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{component.description}</p>

                {/* Preview */}
                <div className="flex-grow bg-gray-300 mb-2 relative">
                    <div className="absolute mt-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
                        <Preview code={component.code} />
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <div
                        onClick={copyToClipboard}
                        className="flex items-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faClipboard} className="mr-2" />
                        Copy Code
                    </div>
                    <Link href={`/customize/${component.id}`} className="flex items-center bg-gray-200 text-gray-800 p-2 rounded hover:bg-gray-300 transition">
                        <FontAwesomeIcon icon={faCog} className="mr-2" />
                        Customize Code
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ComponentCard;
