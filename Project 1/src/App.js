import { Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './router/Login';
import { Home } from './router/Home';
import { UserAdd } from './router/UserAdd';
import { UserProfile } from './router/UserProfile';
import { UserEdit } from './router/UserEdit';
import { AuthContext } from './providers/Auth';
import { useContext, useEffect } from 'react';

function App() {
  const { isLogged } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    isLogged ? navigate('/home') : navigate('/login');
  }, [isLogged]);

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/:id" element={<UserProfile />} />
      <Route path="/user/add" element={<UserAdd />} />
      <Route path="/user/edit/:id" element={<UserEdit />} />
    </Routes>
  );
}

export default App;
