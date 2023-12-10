'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

type T_Theme = 'light' | 'dark' | ''

type T_ThemeContext = {
    themeMode: T_Theme
    setThemeMode: (themeMode: T_Theme) => void
    saveThemeMode: (themeMode: T_Theme) => void
}

export const ThemeModeContext = createContext<T_ThemeContext>({
    themeMode: '',
    setThemeMode: () => '',
    saveThemeMode: () => ''
});

export const ThemeModeContextProvider = ({children}: {children: ReactNode}) => {
    const [themeMode, setThemeMode] = useState<T_Theme>('')
    
    const loadTheModeFromCookie = () => {
        const cookie: string | undefined = Cookies.get('themeMode');
        if (cookie && cookie === 'dark') setThemeMode('dark')
    }

    const saveThemeMode = (theme: T_Theme) => {
        setThemeMode(theme)
        Cookies.set('themeMode', theme)
    }

    useEffect(() => {
        loadTheModeFromCookie()
    }, [])
    
    return (
        <ThemeModeContext.Provider value={{
            themeMode: themeMode,
            setThemeMode: setThemeMode,
            saveThemeMode: saveThemeMode
        }}>{children}</ThemeModeContext.Provider>
    )
}

export const useThemeMode = () => useContext(ThemeModeContext)
