import { useDispatch } from "react-redux";
import styled from "styled-components"
import { deleteUser } from "../store/userSlice";
import { NavLink, useParams } from "react-router-dom";
import { UserProfile } from "./UserProfile";

const UserContent = styled.div`
    font-size: 20px;
    color: ${({theme}) => theme.primary}
` 

export const User = ({user}) => {
    
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(deleteUser(user))
    }
 

    
    return <UserContent>
        <>
        <NavLink to={`/user/${user.id}`} >{user.name} {user.email}</NavLink>
        <button className="removeBtn" onClick={handleClick}>Remove </button>
       
        </>
    </UserContent>;
}

// const CustomNavLink = ({ to, children }) => {
//     const isActiveStyles = ({ isActive}) => 
//     isActive 
//     ? {
//         fontWeight: "bold",
        
//     }
//     : undefined;
//     return (
//         <NavLink style={isActiveStyles} to={to}>
//             {children}
//         </NavLink>
      
//     );

// };
