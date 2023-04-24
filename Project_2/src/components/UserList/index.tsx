import { User } from "../User";
import { MockedUserType } from "../../mocks/users"

type UserListProps = {
  users: MockedUserType[];  
}

export const UserList = ({ users }: UserListProps) => {

return(
  <div className="flex justify-center pt-4">
    <ul className="bg-white rounded-lg w-120 text-gray-900 border-t border-gray-200">
      {/* @ts-ignore */}
      {users?.map(({ username, name }, index) => (
        <User name={name} username={username} index={index} key={name} />
      ))}
    </ul>
  </div>
);
}
