import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className='flex justify-end mx-20'>
            <button
                onClick={toggleTheme}
                className="btn btn-outline btn-xs">
                {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            </button>
        </div>
    );
};

export default ThemeToggle;