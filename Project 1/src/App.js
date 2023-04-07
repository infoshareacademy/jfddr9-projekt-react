import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme , darkTheme} from './components/themes';

import logo from './logo.svg'

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

import { User } from './components/User';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div className="app">
      <Header title="Nagłówek" logoSrc={logo}/>
      <main>
        <Sidebar />
        <Content><User /></Content>
      </main>
      <Footer text="Stopka"/>
    </div>
    </ThemeProvider>
  );
}

export default App;