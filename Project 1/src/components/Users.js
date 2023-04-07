import { UsersData } from "../data/users-data";

export const Users = UsersData.map((user) => {
            return {name: user.name, email: user.email}
        })