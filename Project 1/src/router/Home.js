import { Users } from "../components/Users"
import { UsersData } from "../data/users-data";
import { MenuItems } from "../data/menu-items";
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { Content } from '../components/Content';
import logo from "../logo.svg";
import { GlobalStyles, lightTheme, darkTheme } from '../components/globalStyles';
import { useDarkMode } from '../components/useDarkMode';
import { Toggle } from '../components/Toggle';
import { ThemeProvider } from 'styled-components';



const data = UsersData.map((user) => ({
        name: user.name, email: user.email
    
    }))
    
    const items = MenuItems.map((item) => ({
        name: item.name, link: item.link
    }))
    
    const text = "Footer"



function Home() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

 
  
  return (
   
   <ThemeProvider theme={themeMode}> 
    <div className='app'>
      
      <GlobalStyles/>
      <Header title={"My app"} logo={logo} >
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
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