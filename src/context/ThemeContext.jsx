import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext(); 

export const ThemeProvider = ({ children }) => {
  // The website's theme is either retrieved from local storage or set to 'dark'.
  const [siteMode, setSideMode] = useState(localStorage.getItem('siteMode') || 'dark');

  
  useEffect(() => { // Use useEffect to apply the theme 
        // Reset class
    document.body.className = ''; 
    document.body.classList.add(siteMode);
    localStorage.setItem('siteMode', siteMode); // Save the theme to local storage
  }, [siteMode]);

  // The function that always troggling between light and dark.
  const changeMode = () => {
    setSideMode(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return ( //Receiving state and functionthrough the context provider
    <ThemeContext.Provider value={{ siteMode, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};