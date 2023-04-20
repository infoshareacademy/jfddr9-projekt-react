import {useContext, useState} from "react";
import {AuthContext} from "../providers/Auth";


export const Login = () => {
    const {setIsLogged} = useContext(AuthContext)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const logIn = () => {
        localStorage.setItem("user", login)
        setIsLogged(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login && password && logIn()
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label>Login</label>
            <input name={"login"} onChange={(e) => setLogin(e.target.value) }/>
        </div>
        <div>
            <label>Password</label>
            <input name={"password"} type="password" onChange={(e) => setPassword(e.target.value) }/>
        </div>
        <button type="submit">Login</button>
    </form>
}