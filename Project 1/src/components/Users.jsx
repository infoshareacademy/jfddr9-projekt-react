import { User } from "./User";
import { useState } from "react";
//import { useEffect } from "react";

export const Users = ({ data }) => {
  const [users, setUsers] = useState(data);
  

  // useEffect(() => {
  //   setUsers(data);

  //   return () => {};
  // }, [data]);

  if (users.length === 0) {
    return <div> "Users list empty!" </div>;
  }

  const deleteUser = (name) => {
    const newUserArray = users.filter((user) => user.name !== name);
    setUsers(newUserArray);
    console.log(newUserArray);

  };

  return (
    <>
      {users.map((user) => {        
        return <User onClick={deleteUser} user={user} key={user.name} />;
      })}
    </>
  );
};
