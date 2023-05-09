import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from "./router/Home";
import { Login } from "./router/Login";
import { UserProfile } from './components/UserProfile';
import { UserForm } from './components/UserForm';
//import { FormContext } from './components/FormContext';
import { EditUserForm } from './components/EditUserForm';



function App() {

  return (
      
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/user/add" element={<UserForm />} /> 
      <Route path="/user/edit/:id" element={<EditUserForm />}/>

    </Routes>
      
  
)}


export default App;