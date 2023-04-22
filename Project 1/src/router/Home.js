import '../App.css';

import logo from '../logo.svg';

import { Header, Sidebar, SearchBox, Footer, Users } from '../components';

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { AuthContext } from '../providers/Auth';
import { CustomThemeContext } from '../providers/CustomTheme';
import { Content } from '../providers/Content';

export function Home() {
  const { isLogged } = useContext(AuthContext);

  const { isDarkTheme, setIsDarkTheme } = useContext(CustomThemeContext);

  const navigate = useNavigate();

  useEffect(() => {
    isLogged ? navigate('/home') : navigate('/login');
  }, [isLogged]);

  const toggleTheme = () => {
    setIsDarkTheme(() => (isDarkTheme ? false : true));
  };

  return (
    <div className="app">
      <Header title="Home" logoSrc={logo} handleToggle={toggleTheme} />
      <main>
        <Sidebar />
        <Content>
          <SearchBox />
          <Users />
        </Content>
      </main>
      <Footer text="Stopka" />
    </div>
  );
}
