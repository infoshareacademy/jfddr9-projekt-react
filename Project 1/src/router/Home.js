import '../App.css';
import { AuthContext } from '../providers/Auth';

import logo from '../logo.svg';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Content } from '../providers/Content';
import { SearchBox } from '../components/Searchbox';
import { Footer } from '../components/Footer';

import { Users } from '../components/Users';

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { CustomThemeContext } from '../providers/CustomTheme';

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
      <Header title="Home" logoSrc={logo} fn={toggleTheme}></Header>
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
