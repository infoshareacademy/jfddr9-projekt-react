import { createContext, useState } from 'react';
import { StyledContent } from '../components';
import { CustomThemeContext } from './CustomTheme';
import { useContext } from 'react';

export const usersListContext = createContext(null);

export const Content = ({ children }) => {
  const [isSearched, setIsSearched] = useState(false);

  const { isDarkTheme } = useContext(CustomThemeContext);

  return (
    <StyledContent mytheme={isDarkTheme}>
      <usersListContext.Provider value={{ isSearched, setIsSearched }}>{children}</usersListContext.Provider>
    </StyledContent>
  );
};
