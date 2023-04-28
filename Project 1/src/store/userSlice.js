import { createSlice } from '@reduxjs/toolkit';
import { UsersData } from '../data/users-data';

export const usersSlice = createSlice( {
    name: "users",
    initialState: {
        users: UsersData
    },
    reducers: {
        deleteUser: (state, action) => {
            const deletedUser = action.payload;
            state = state.users.filter(user => user.name !== deletedUser.name)
        }
    }
})

export const {deleteUser} = usersSlice.actions

export const usersReducer = usersSlice.reducer