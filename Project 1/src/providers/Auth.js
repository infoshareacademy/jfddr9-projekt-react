import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem("userData");
        if (!!user) {
            setIsLogged(true);
            navigate("/home");
        } else {
            navigate("/login");
        }
    }, [isLogged, setIsLogged]);

    return <AuthContext.Provider value={{isLogged, setIsLogged}}>
        {children}
    </AuthContext.Provider>
}