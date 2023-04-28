import { useDispatch, useSelector } from "react-redux";
import { User } from "./User";
import { useState } from "react";

export const Users = ({data}) => {
  const [users, setUsers] = useState(data);
  

  const handleChange = (event) => {
    const inputValue = event.target.value;
    filteredUsers(inputValue)
  }
  
  const filteredUsers = (filteredValue) => {
    const filteredUsers = data.filter((user) => user.name.toLowerCase().includes(filteredValue.toLowerCase()))

    if ( filteredValue !=='' ) {
      setUsers(filteredUsers)
    } else {
      setUsers(data)
    }
  }
 
  // const deleteUser = (name) => {
  //   const newUserArray = users.filter((user) => user.name !== name);
  //   setUsers(newUserArray);
  //   console.log(newUserArray);
  // };

 
  return (
    <>

      {!users.length && (
      <p>Users list empty</p>
      )}
      <input className="searchingBox" type="search" onChange={handleChange}/>
      {users.map((user) => {        
        return <User user={user} key={user.name}/>;
      })}
    </>
  );
};
