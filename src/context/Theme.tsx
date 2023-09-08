import React, { createContext, useContext, useState } from 'react';

const LOCAL_STORAGE_THEME_KEY = 'theme';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps extends React.PropsWithChildren {}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeContext = createContext<ThemeContextValue | null>(null);

const ThemeContextProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

    if (setTheme) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider',
    );
  }

  return context;
};

export default ThemeContextProvider;
