import { Users } from "./Users";

export const User = () => {
    console.log(Users);
    return (
        <ol>
            {Users.map((user) => {
                return <li key={user.name}>{user.name} {user.email}</li>
            })}
        </ol>
    )
}