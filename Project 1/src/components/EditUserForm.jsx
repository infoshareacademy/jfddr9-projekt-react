import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editUser } from '../store/userSlice';

export const EditUserForm = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector((state) =>
      state.usersReducer.users.find((user) => user.id === Number(id))
    );
    const [formData, setFormData] = useState({
      name: user.name,
      username: user.username
      
    });
  
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editUser(Number(id), { id: Number(id), updates: formData }));
        alert('Poprawnie zmieniono dane');
      };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Edit user</button>
    </form>
  );
};