import { Users } from "./Users";
import { useEffect, useState } from "react";

import { SearchBox } from "./Searchbox";

export const User = () => {
    console.log(Users);

    const [list, delUser] = useState(Users);

    const [searchList, searchUser] = useState(list);

    let inputValue = null;

    const handleDelUser = (userName) => {

        const newList = list.filter((user) => {
            return userName !== user.name;
        });

        delUser(newList);

    }

    const handleInputFunction = (event) => {
        inputValue = event.target.value;
        const filteredList = list.filter((user) => user.name.includes(event.target.value))

        if(filteredList.length>=0 && event.target.value!=='')
        {
            searchUser(() => filteredList);
        }
        else {
            searchUser(() => list);
        }
        
    }

    useEffect(() => {
        searchUser(() => list)
    }, [list])


    if(list.length===0 || searchList.length===0)
    {
        return <><SearchBox handleInput={handleInputFunction}/><span>Users list empty!</span></>
    }

    return (
        <>
         <SearchBox handleInput={handleInputFunction}/>
        <ol>
            {searchList.map((user) => {
                return <li key={user.name}>{user.name} {user.email}<button onClick={() => handleDelUser(user.name)}>Usuń</button></li>
            })}
        </ol>
        </>
    )
}