export const filterUserByQuery = (users: any[], query: any) =>
  users.filter(
    (user) =>
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query)
  );
