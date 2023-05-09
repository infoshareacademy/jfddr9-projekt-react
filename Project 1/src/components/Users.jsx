import { useDispatch, useSelector } from "react-redux";
import { User } from "./User";
import { useEffect, useState } from "react";
import { filterUsers } from "../store/userSlice";
import { Link } from "react-router-dom";

export const Users = ({data}) => {
  const state = useSelector(state => state.usersReducer.users);
  console.log(state);
 
  const [users, setUsers] = useState(data);
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    const inputValue = event.target.value;
    if ( inputValue !=='' ) {
      dispatch(filterUsers(inputValue));
      setUsers(state);
    } else {
      setUsers(data);
    }
  };

  // useEffect(() => {
  //   setUsers(state);
  // }, [state]);
 
  return (
    <>


      {!state.length && (<div>Users list is empty</div>)}
  
      <input className="searchingBox" type="search" onChange={handleChange}/>
      <Link to="/user/add">
        <button>Add User</button>
      </Link>
      {data.map((user) => {        
        return <User user={user} key={user.name} />;
        
      })}
    </>
  );
};
