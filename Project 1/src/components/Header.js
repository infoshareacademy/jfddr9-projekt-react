import styled from 'styled-components';
import { ThemeSwitcher } from './ThemeSwitcher';
import { AuthContext } from '../providers/Auth';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CustomThemeContext } from '../providers/CustomTheme';

const HeaderStyle = styled.header`
  width: 100vw;
  height: 20vh;
  background-color: ${({ mytheme }) => (mytheme ? 'darkgreen' : 'lightgreen')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = (props) => {
  const { setIsLogged } = useContext(AuthContext);

  const { isDarkTheme } = useContext(CustomThemeContext);

  const logOut = () => {
    localStorage.removeItem('user');
    setIsLogged(false);
  };

  return (
    <HeaderStyle mytheme={isDarkTheme}>
      <h1>{props.title}</h1>
      <img src={props.logoSrc} alt="logo" />
      <ThemeSwitcher handleToggle={props.handleToggle} />
      <button onClick={logOut}>Log out</button>
      <Link to={'/user/add'}>
        <button>Add User</button>
      </Link>
    </HeaderStyle>
  );
};
