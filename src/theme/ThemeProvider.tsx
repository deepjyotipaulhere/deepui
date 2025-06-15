import React, { createContext, useContext, ReactNode } from 'react'
import { defaultTheme, Theme } from './theme'

const ThemeContext = createContext<Theme>(defaultTheme)

export const useTheme = (): Theme => useContext(ThemeContext);


export const ThemeProvider = ({ children, theme = defaultTheme }: { children: ReactNode; theme?: typeof defaultTheme }) => {
    React.useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--primary-color', theme.colors?.primary ?? '');
        root.style.setProperty('--secondary-color', theme.colors?.secondary ?? '');
        root.style.setProperty('--font-primary', theme.typography?.fontFamily ?? '');
        root.style.setProperty('--border-radius', theme.borderRadius ? `${theme.borderRadius}px` : '');
    }, [theme]);
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider;