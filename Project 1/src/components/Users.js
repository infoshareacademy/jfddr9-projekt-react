import { User } from "./User";

export function Users({ data }) {
  return (
    <>
      {data.map((user) => {
        return <User user={user} key={user.name} />;
      })}
    </>
  );
}
