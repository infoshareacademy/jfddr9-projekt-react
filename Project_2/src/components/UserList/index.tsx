import { User } from "../User";
import { UserType } from "../../types";

// export type UsersTypes = {
//   users: UserType[]
// }


export const UserList = ({ users }: any) => (
  <div className="flex justify-center pt-4">
    <ul className="bg-white rounded-lg w-120 text-gray-900 border-t border-gray-200">
      {/* @ts-ignore */}
      {users?.map(({ username, name }, index) => (
        <User name={name} username={username} index={index} key={name} />
      ))}
    </ul>
  </div>
);
