import { createContext, useState } from 'react';

export const CustomThemeContext = createContext(null);

export const CustomTheme = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return <CustomThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>{children}</CustomThemeContext.Provider>;
};
