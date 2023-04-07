import "./App.css";
import { UsersData } from "../src/data/users-data";
import { Users, users } from "../src/components/Users";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Flex } from "./components/Flex";
import { Mainflex } from "./components/Mainflex";
import logo from "./logo.png";
import { MenuItems } from "../src/data/menu-items";

const data = UsersData.map((user) => {
  return { name: user.name, email: user.email };
});
const links = MenuItems.map((item) => {
  return { name: item.name, link: item.link };
});

function App() {
  return (
    <div className="app">
      <Header title="Some human beeings..." logoSrc={logo} />
      <Mainflex>
        <Flex>
          <Sidebar asses={links} />
        </Flex>
        <Flex>
          <Users settings={data} />
        </Flex>
      </Mainflex>
      <Footer text="footer" />
      <div></div>
    </div>
  );
}

export default App;
