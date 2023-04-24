import { useContext, useState } from "react"
import {AuthProvider} from "../providers/Auth"
import { AuthContext } from "../providers/Auth"


export const Login = () => {

    const {setIsLogged} = useContext(AuthContext)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const logIn = () => {
        localStorage.setItem("user, login")

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login && password && logIn()
        console.log({login, password});
    } 

    return <form onSubmit={handleSubmit}>
        <div>
            <label>Login</label>
            <input name={"login"} onChange={(e) => setLogin(e.target.value)}/>
        </div>
        <div>
            <label>Password</label>
            <input name={"Password"} type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="sumbit">Login</button>

    </form>
}
