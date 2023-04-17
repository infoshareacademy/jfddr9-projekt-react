import "./App.css";
import { UsersData } from "../src/data/users-data";
import { Users } from "./components/Users";

const data = UsersData.map((user) => {
  return { name: user.name, email: user.email };
});

function App() {
  return (
    <div className="app">
      {/*tutaj przekazuje props o nazwie data w któej jest tablica userów (pole email oraz name)*/}
      <Users data={data} />
    </div>
  );
}
