import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    return (
        <>
            <AuthContext.Provider value={{ isDarkMode, toggleTheme }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export function useAuth() {
    return useContext(AuthContext)
}