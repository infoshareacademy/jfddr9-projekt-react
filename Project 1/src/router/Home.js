import '../App.css';
import { UsersData } from "../../src/data/users-data"
import { Users } from "../components/Users"
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { Content } from '../components/Content';
import logo from "../../src/logo.svg";
import {MenuItems} from '../../src/data/menu-items';
import { GlobalStyles, lightTheme, darkTheme } from '../components/globalStyles';
import { useDarkMode } from '../components/useDarkMode';
import { Toggle } from '../components/Toggle';
import { ThemeProvider } from 'styled-components';
import { LogOutButton } from '../components/LogOutButton';
import { useSelector } from 'react-redux';
// import { useContext } from 'react';
// import {AuthContext} from "../providers/Auth"






const items = MenuItems.map((item) => ({
    name: item.name, link: item.link
}))

const text = "Footer"

function Home() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const users = useSelector(state => state.usersReducer.users)
  const data = users.map((user) => ({name: user.name, email: user.email}))

  

 
  
  return (
   
   <ThemeProvider theme={themeMode}> 
    <div className='app'>
      
      <GlobalStyles/>
      <Header title={"My app"} logo={logo} >
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
        <LogOutButton/>
      </Header>
      
      <Sidebar items={items}/>

      <Content> 
        <Users data={data}/>    
      </Content>

      <Footer text={text}/>

    </div>
     </ThemeProvider>
  );
}

export default Home;