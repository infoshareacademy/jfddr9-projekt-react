import styled from 'styled-components';
import { CustomThemeContext } from '../providers/CustomTheme';
import { useContext } from 'react';

const FooterStyled = styled.footer`
  width: 100vw;
  height: 10vh;
  background-color: ${({ mytheme }) => (mytheme ? 'black' : 'gray')};
  color: white;
`;

export const Footer = ({ text }) => {
  const { isDarkTheme } = useContext(CustomThemeContext);

  return <FooterStyled mytheme={isDarkTheme}>{text}</FooterStyled>;
};
