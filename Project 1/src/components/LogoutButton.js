import {useContext} from "react";
import {AuthContext} from "../providers/Auth";
import {useNavigate} from "react-router-dom";

export const LogoutButton = () => {
  const {setIsLogged} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleClick = () => {
      setIsLogged(false)
      localStorage.removeItem("user")
        navigate("/login")

    }

    return <button onClick={handleClick}>Logout</button>
}