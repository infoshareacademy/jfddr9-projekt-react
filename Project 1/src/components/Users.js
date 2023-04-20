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