import { Users } from "./Users";
import { useState } from "react";

export const User = () => {
    console.log(Users);

    const [list, delUser] = useState(Users);

    const handleDelUser = (userName) => {

        const newList = list.filter((user) => {
            return userName !== user.name;
        });

        delUser(newList);

    }

    if(list.length===0)
    {
        return <span>Users list empty!</span>
    }

    return (
        <ol>
            {list.map((user) => {
                return <li key={user.name}>{user.name} {user.email}<button onClick={() => handleDelUser(user.name)}>Usuń</button></li>
            })}
        </ol>
    )
}