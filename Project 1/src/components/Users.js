<<<<<<< HEAD
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
=======
import {User} from "./User"
import {useSelector} from "react-redux";

export function Users({data}) {
    const state = useSelector(state => state.usersReducer.users)

    if (state.length === 0) {
        return <div>No users</div>
    }

    return (<>
            {
                data.map((user) => {
                    return <User user={user} key={user.name} />
                })
            }
        </>
    )
}
>>>>>>> b309689daec6288131f2e65468db1c824211b75b
