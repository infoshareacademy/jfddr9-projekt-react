import './App.css';
import { UsersData } from "../src/data/users-data"
import { Users } from "./components/Users"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { clickfunction } from "./components/Theme"
import { clickfunction2 } from './components/Theme';
import { MenuItems } from './data/menu-items';


const data = UsersData.map((user) => {
  return {name: user.name, email: user.email}
})

function App() {


 
  return (
    <div className="app">
      <Header />
      <div className='two'>
      <Sidebar links={MenuItems}/>  <Content />
      </div>
      <Footer />
      <Users data={data}/>
      <div className='up'>
      <div className="themeButtons">
            <button onClick={() => clickfunction()} className="firstbutton">Czarne tło</button>
            <button onClick={() => clickfunction2()} className="firstbutton">Jasne tło</button>
      </div>
      </div>

    </div>
  );
}

export default App;




