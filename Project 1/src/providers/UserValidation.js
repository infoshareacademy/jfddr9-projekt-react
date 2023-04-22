import { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser } from '../store/usersSlice';
import { editUser } from '../store/usersSlice';

export const UserValidationContext = createContext(null);

export const UserValidation = ({ children }) => {
  const [name, setName] = useState('');

  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e, actionParameter) => {
    e.preventDefault();
    console.log(actionParameter);
    if (name && username) {
      if (actionParameter === 'add') {
        dispatch(addUser({ name, username }));
        alert('User Added!');
      } else {
        dispatch(editUser({ name, username, actionParameter }));
        alert('User Edited!');
      }
    } else {
      alert('Name and username cannot be empty!');
    }
  };

  return (
    <UserValidationContext.Provider value={{ setName, setUsername, handleSubmit, name, username }}>
      {children}
    </UserValidationContext.Provider>
  );
};
