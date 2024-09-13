// src/components/Layouts/Header.tsx
'use client';
import React from 'react';
import ThemeToggle from '@/components/Theme/ThemeToggle';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Component Library</h1>
                <ul className="flex space-x-4">
                    <li>
                    <ThemeToggle />
                    </li>
                    <li>
                        <Link href="/" className="hover:underline">Home</Link>
                    </li>
                    {/* You can add more navigation links here */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
