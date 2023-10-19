import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';

const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === 'dark') {
            setIsDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.body.style.backgroundColor = '#111827';
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#333';
        }
    }, [isDarkMode]);

    const toggleButton = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleButton }}>
            {props.children}
        </ThemeContext.Provider>
    )

}
export default ThemeContextProvider;
export const useThemeContext = () => useContext(ThemeContext);