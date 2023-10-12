import { Context, createContext } from 'react';

interface ThemeProperties {
    backgroundColor: string,

    shadowColor: string,

    primaryColor: string,
    primaryObjectColor: string,
    primaryTextColor: string,
    secondaryTextColor: string
}

const DarkTheme:ThemeProperties = {
    backgroundColor: 'bg-[#121212]',
    shadowColor: 'shadow-neutral-800',

    primaryColor: '#ff4162',
    primaryObjectColor: 'bg-[#242424]',
    primaryTextColor: 'text-white',
    secondaryTextColor: 'text-gray-200'
};

const LightTheme:ThemeProperties = {
    backgroundColor: 'bg-white',
    shadowColor: 'shadow-neutral-250',

    primaryColor: '#427bf5',
    primaryObjectColor: 'bg-[#ffffff]',
    primaryTextColor: 'text-black',
    secondaryTextColor: 'text-gray-600'
};

let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') === 'light' ? LightTheme : DarkTheme : LightTheme;

export const themeContext:Context<ThemeProperties> = createContext(currentTheme);

export const updateTheme = () => {
    currentTheme = (currentTheme === DarkTheme ? LightTheme : DarkTheme);

    localStorage.setItem('theme', currentTheme === DarkTheme ? 'dark' : 'light');
    window.location.reload();
}
