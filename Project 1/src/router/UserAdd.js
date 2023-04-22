import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserValidationContext } from '../providers/UserValidation';

import { StyledForm } from '../components/StyledForm';

export const UserAdd = () => {
  const { setName, setUsername, handleSubmit } = useContext(UserValidationContext);

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e, 'add')}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
      <label htmlFor="username">Username</label>
      <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
      <button type="submit">Add User</button>
      <Link to={`/home`}>
        <button>Go back</button>
      </Link>
    </StyledForm>
  );
};
