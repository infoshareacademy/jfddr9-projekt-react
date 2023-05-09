import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/Auth";

export const LogOutButton = () => {
    const {setIsLogged} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsLogged(false)
        localStorage.removeItem("userData")
        navigate('/login')

    }
    return <button className='logoutBtn' onClick={handleClick}>Logout</button>
}