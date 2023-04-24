import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./router/Home";
import {Login} from "./router/Login";


import { UsersData } from "../src/data/users-data"
import { Users } from "./components/Users"
import { Header } from './components/Header'
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import logo from "./logo.svg";
import {MenuItems} from '../src/data/menu-items';
import { GlobalStyles, lightTheme, darkTheme } from './components/globalStyles';
import { useDarkMode } from './components/useDarkMode';
import { Toggle } from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import { useContext } from 'react';
import {AuthContext} from "./providers/Auth"




// const data = UsersData.map((user) => ({
//     name: user.name, email: user.email

// }))

// const items = MenuItems.map((item) => ({
//     name: item.name, link: item.link
// }))

// const text = "Footer"

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const {isLogged, setIsLogged} = useContext(AuthContext)

 
  
  return (
   
   <ThemeProvider theme={themeMode}> 
    <div className='app'>
      
      {/* <GlobalStyles/>
      <Header title={"My app"} logo={logo} >
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
      </Header>
      
      <Sidebar items={items}/>

      <Content> 
        <Users data={data}/>    
      </Content>

      <Footer text={text}/> */}

    
        <Routes>
          <Route path={"/home"} component={<Home/>}/>
          <Route path={"/login"} component={<Login/>}/>
        </Routes>


    </div>
    </ThemeProvider>
  );
}

export default App;