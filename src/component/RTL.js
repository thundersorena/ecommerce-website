import React, { createContext, useState, useContext, useEffect } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


// تم دارک
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#eb5326',

        },
        secondary: {
            main: '#eb5326',
        },
        info: {
            main: '#ffffff',
        },

        text: {
            primary: '#ffffff',
            secondary: '#ffff',
            disabled: '#ffff'

        },
        background: {
            default: '#1A1A19',
            paper: '#1A1A19',

        },
        divider: "#ffffff"
    },
    typography: {
        direction: 'rtl',
        fontSize: 16,
        fontFamily: [
            "IRANSansWeb"
        ].join(",")
    }
});

// تم لایت
const lightTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#F36F25',
        },
        secondary: {
            main: '#282928',
        },
        info: {
            main: '#000000',
        },
        text: {
            primary: '#000000',
            secondary: '#F36F25',
            disabled: '#e7a825'


        },
        background: {
            default: '#f1f1f1',
            paper: '#ffffff',
        },
        divider: "#000000",


    },
    typography: {
        direction: 'rtl',
        fontSize: 16,
        fontFamily: [
            "IRANSansWeb"
        ].join(",")
    }
});

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('themeMode');
        return savedMode ? JSON.parse(savedMode) : true;
    });

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('themeMode', JSON.stringify(newMode));
    };

    const currentTheme = isDarkMode ? lightTheme : darkTheme;
    return (
        <ThemeModeContext.Provider value={{ isDarkMode, toggleTheme }} >
            <ThemeProvider theme={currentTheme}>
                <CssBaseline />
                <CacheProvider value={cacheRtl}>
                    {children}
                </CacheProvider>
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};

// یک هوک برای دسترسی به Context
export const useThemeMode = () => useContext(ThemeModeContext);
