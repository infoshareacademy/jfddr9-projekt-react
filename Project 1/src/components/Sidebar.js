import styled from 'styled-components';
import { MenuItems } from '../data/menu-items';
import { CustomThemeContext } from '../providers/CustomTheme';
import { useContext } from 'react';

const SidebarStyled = styled.nav`
  width: 20vw;
  height: 100%;
  background-color: ${({ mytheme }) => (mytheme ? 'darkblue' : 'blue')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Sidebar = () => {
  const { isDarkTheme } = useContext(CustomThemeContext);

  return (
    <SidebarStyled mytheme={isDarkTheme}>
      {MenuItems.map((item) => {
        return (
          <a key={item.name} href={item.link}>
            {item.name}
          </a>
        );
      })}
    </SidebarStyled>
  );
};
