import './App.css';
import { UsersData } from "../src/data/users-data"
import { Users } from "./components/Users"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Content } from "./components/Content"
import { Footer } from "./components/Footer"
import { clickfunction } from "./components/Theme"
import { clickfunction2 } from './components/Theme';



const data = UsersData.map((user) => {
  return {name: user.name, email: user.email}
})

function App() {


 
  return (
    <div className="app">
      <Header />
      <div className='two'>
      <Sidebar />  <Content />
      </div>
      <Footer />
      <Users data={data}/>
      
      <div className="themeButtons">
            <button onclick="clickfunction()" class="firstbutton">Czarne tło</button>
            <button onclick="clickfunction2()" class="firstbutton">Jasne tło</button>
        </div>
    </div>
  );
}

export default App;




