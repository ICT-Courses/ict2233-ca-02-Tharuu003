// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context with a default value
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get the theme from local storage or default to 'dark'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Use useEffect to apply the theme class to the body element
  useEffect(() => {
    document.body.className = ''; // Reset class
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); // Save the theme to local storage
  }, [theme]);

  // Function to toggle between 'dark' and 'light'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};