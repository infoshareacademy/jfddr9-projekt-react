import "./App.css";
import { UsersData } from "../src/data/users-data";
import { Users } from "./components/Users";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
const data = UsersData.map((user) => {
  return { name: user.name, email: user.email };
});
function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <Sidebar /> <Content />
      </div>
      <Footer />
      <Users data={data} />
    </div>
  );
}
export default App;
