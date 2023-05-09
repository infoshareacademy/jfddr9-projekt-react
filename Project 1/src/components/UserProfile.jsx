import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


export const UserProfile = () => {
    
    const users = useSelector(state => state.usersReducer.users);
    const {id} = useParams();

    const user = users.find(user => user.id === Number(id));
    
    if (!user) {
        return <div>No user with id {id}</div>;
    }

    return (
        <>
            <div>Name: {user.name}</div>
            <div>Address: {user.address.street}, {user.address.suite}, {user.address.city} {user.address.zipcode}</div>
            <button><Link to={`/user/edit/${user.id}`}>Edit user</Link></button>
        </>
    );
};