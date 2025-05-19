import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='flex justify-end mx-2 md:mx-5'>
            <button
                onClick={toggleTheme}
                className="btn btn-ghost p-2 text-xl text-sky-600 dark:text-yellow-400"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
                {theme === 'light' ? <FiMoon /> : <FiSun />}
            </button>
        </div>
    );
};

export default ThemeToggle;
