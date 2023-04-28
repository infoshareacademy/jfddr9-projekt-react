import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { deleteUser } from "../store/userSlice";

const UserContent = styled.div`
    font-size: 20px;
    color: ${({theme}) => theme.primary}
` 

export const User = ({user}) => {
    
    const dispatch = useDispatch();
    const state = useSelector(state => state)
  
    const handleClick = () => {
      dispatch(deleteUser(user))
    }
    return <UserContent>
        <>{user.name} {user.email}

        <button className="removeBtn" onClick={handleClick}>Remove </button>
        </>
    </UserContent>;
}
