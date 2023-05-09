import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../data/users-data';

export const usersSlice = createSlice( {
    name: "users",
    initialState: {
        users: UsersData,
        //message: null,
    },
  
    reducers: {
        deleteUser: (state, action) => {
            const deletedUser = action.payload;
            state.users = state.users.filter(user => user.name !== deletedUser.name)
        },
        filterUsers: (state, action) => {
            const filteredValue = action.payload;
            console.log(action.payload);
            state.users = state.users.filter((user) => user.name.toLowerCase().includes(filteredValue.toLowerCase()));
            console.log(state.users);
        },
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        editUser: (state, action) => {
            state.users = state.users.map((user) => 
              user.id === action.payload.id ? 
              { ...user, ...action.payload.updates } : 
              user 
            );
            //state.message = 'Poprawnie zmieniono dane';
        },
    }
   
})

export const {deleteUser, filterUsers, addUser, editUser} = usersSlice.actions

export const usersReducer = usersSlice.reducer