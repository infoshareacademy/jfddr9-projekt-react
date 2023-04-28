import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from "./router/Home";
import { Login } from "./router/Login";
import { useSelector } from 'react-redux';



function App() {
  

  return (
      
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      
  
)}


export default App;