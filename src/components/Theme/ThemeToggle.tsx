// src/components/Theme/ThemeToggle.tsx
'use client'; 

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setIsDarkMode(currentTheme === 'dark');
            document.documentElement.classList.toggle('dark', currentTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button onClick={toggleTheme} className="p-2">
            {isDarkMode ? '🌙' : '☀️'} {/* Icon for theme toggle */}
        </button>
    );
};

export default ThemeToggle;
