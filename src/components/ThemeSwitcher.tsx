// src/components/ThemeSwitcher.tsx
import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher: React.FC = () => {
  // Default theme is 'dark'. It will toggle to 'light'
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]); // Rerun whenever 'theme' state changes

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none absolute top-4 right-4 z-50
                 text-light-foreground dark:text-dark-foreground
                 hover:bg-light-gray-200 dark:hover:bg-dark-gray-200"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <FaMoon className="w-5 h-5 text-blue-500" />
      )}
    </button>
  );
};

export default ThemeSwitcher;