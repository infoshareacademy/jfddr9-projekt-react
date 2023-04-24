<<<<<<< HEAD
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
=======
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./router/Home";
import {Login} from "./router/Login";
import {useSelector} from "react-redux";


function App() {
    const users = useSelector(state => state.usersReducer.users)
    console.log(users)
  return (
    <div className="app">

            <Routes>
                <Route path={"/home"} element={<Home />}  />
                <Route path={"/login"} element={<Login />} />
            </Routes>

>>>>>>> b309689daec6288131f2e65468db1c824211b75b
    </div>
  );
}
