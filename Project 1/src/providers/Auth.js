import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"

export const AuthContext = createContext(undefined)


export const AuthProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        !!localStorage.getItem("user") && setIsLogged(true)
        !!localStorage.getItem("user") ? navigate("/home") : navigate("/login")
    }, [])

    return <AuthContext.Provider value={{isLogged, setIsLogged}}>
        {children}
    </AuthContext.Provider>
}