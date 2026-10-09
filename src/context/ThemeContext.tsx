import {createContext, type ReactNode, useEffect, useState} from "react";

type ThemeContextType ={
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext =createContext<ThemeContextType | undefined>(undefined) ;
export const ThemeProvider=({ children }: { children: ReactNode })=> {
    const [theme,setTheme]=useState('light');
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme === 'light' ? 'dark' :'light'))
};
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

