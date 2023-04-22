import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { UserValidationContext } from '../providers/UserValidation';

import { StyledForm } from '../components/StyledForm';

export const UserEdit = () => {
  const usersArray = useSelector((state) => state.users.users);

  const { setName, setUsername, handleSubmit, name, username } = useContext(UserValidationContext);

  const { id } = useParams();

  const userIndex = usersArray.findIndex((user) => user.id == id);

  useEffect(() => {
    setName(usersArray[userIndex].name);
    setUsername(usersArray[userIndex].username);
  }, []);

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e, userIndex)}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="username">Username</label>
      <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button type="submit">Confirm Edit</button>
      <Link to={`/user/${id}`}>
        <button>Go back</button>
      </Link>
    </StyledForm>
  );
};
