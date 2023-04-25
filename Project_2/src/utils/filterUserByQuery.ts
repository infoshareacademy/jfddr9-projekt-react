type UserType = {
  name: string;
  username: string;
}

export const filterUserByQuery = (users: UserType[], query: string) =>
  users.filter(
    (user) =>
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
  );
