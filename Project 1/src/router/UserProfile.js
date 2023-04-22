import '../App.css';

import logo from '../logo.svg';

import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CustomThemeContext } from '../providers/CustomTheme';
import { AuthContext } from '../providers/Auth';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Content } from '../providers/Content';
import { Footer } from '../components/Footer';

export const UserProfile = () => {
  const { isLogged } = useContext(AuthContext);
  const { isDarkTheme, setIsDarkTheme } = useContext(CustomThemeContext);

  const usersArray = useSelector((state) => state.users.users);

  const { id } = useParams();

  const userIndex = usersArray.findIndex((user) => user.id == id);

  const navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate('/login');
  }, [isLogged]);

  const toggleTheme = () => {
    setIsDarkTheme(isDarkTheme ? false : true);
  };

  return (
    <div className="app">
      <Header title="User Profile" logoSrc={logo} fn={toggleTheme}></Header>
      <main>
        <Sidebar />
        <Content>
          <h1>Name</h1>
          <p>{usersArray[userIndex].name}</p>
          <h1>Address</h1>
          <p>{usersArray[userIndex].address.street}</p>
          <p>{usersArray[userIndex].address.suite}</p>
          <p>{usersArray[userIndex].address.city}</p>
          <p>{usersArray[userIndex].address.zipcode}</p>
          <Link to={`/user/edit/${id}`}>
            <button>Edit User</button>
          </Link>
          <Link to={`/home`}>
            <button>Go back</button>
          </Link>
        </Content>
      </main>
      <Footer text="Stopka" />
    </div>
  );
};
