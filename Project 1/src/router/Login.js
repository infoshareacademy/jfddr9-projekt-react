import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/Auth';
import { StyledForm } from '../components/StyledForm';
import { useNavigate } from 'react-router';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const { isLogged, setIsLogged } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    isLogged ? navigate('/home') : navigate('/login');
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login && password) {
      localStorage.setItem('user', login);
      setIsLogged(true);
    } else {
      alert('Login and password cannot be empty!');
    }
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="login">Login</label>
      <input type="text" name="login" onChange={(e) => setLogin(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </StyledForm>
  );
};
