import { MockedUserType } from "../mocks/users";
import { UserProps } from "../components/User";


export const filterUserByQuery = (users: MockedUserType[], query: string) => {
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
  );
};
