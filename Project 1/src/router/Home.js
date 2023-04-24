import {UsersData} from "../data/users-data";
import {Users} from "../components/Users";
import {LogoutButton} from "../components/LogoutButton";
import {useSelector} from "react-redux";



function Home() {
    const users = useSelector(state => state.usersReducer.users)
    const data = users.map((user) => {
        return {name: user.name, email: user.email}
    })

    return (
        <div className="app">
            <LogoutButton />
            <Users data={data}/>
        </div>
    );
}

export default Home;