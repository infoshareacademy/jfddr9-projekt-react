import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';

export const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', name: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.username ) {
        alert('Username is required');}
    if (!formData.name) {alert('Name is required');}
  
    const id = Math.floor(Math.random() * 1000) + 1; 
    const newUser = { ...formData, id };
    dispatch(addUser(newUser));
    setFormData({ username: '', name: '' }); 
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
      <button type="submit">Add user</button>
    </form>
  );
};