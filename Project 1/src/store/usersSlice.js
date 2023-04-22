import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../data/users-data';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: UsersData,
    searchUsers: UsersData,
    idCounter: 5,
  },
  reducers: {
    delUser(state, action) {
      const userToDelete = action.payload;
      state.users = state.users.filter((user) => user.id !== userToDelete);
      state.searchUsers = state.searchUsers.filter((user) => user.id !== userToDelete);
    },
    searchUser(state, action) {
      const searchString = action.payload;
      if (action.payload !== '') {
        state.searchUsers = state.users.filter((user) => user.name.includes(searchString));
      } else {
        state.searchUsers = state.users;
      }
    },
    addUser(state, action) {
      const name = action.payload.name;
      const username = action.payload.username;
      const id = Math.floor(Math.random() * 10000) + state.idCounter;
      const randomSuite = Math.floor(Math.random() * 1000) + 1;
      state.idCounter += 1;

      const newUser = {
        name: name,
        username: username,
        id: id,
        address: {
          street: 'Rex Trail ' + id,
          suite: 'Suite ' + randomSuite,
          city: 'Howemouth',
          zipcode: '58804-1099',
        },
      };

      state.users.push(newUser);
      state.searchUsers = state.users;
    },
    editUser(state, action) {
      const name = action.payload.name;
      const username = action.payload.username;
      const index = action.payload.actionParameter;

      state.users[index].name = name;
      state.users[index].username = username;
      state.searchUsers = state.users;
    },
  },
});

export const { delUser, searchUser, addUser, editUser } = usersSlice.actions;
