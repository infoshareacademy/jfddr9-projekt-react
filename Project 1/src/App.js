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

    </div>
  );
}

export default App;