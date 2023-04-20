import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../store/usersSlice";

const UserContent = styled.p`
  background-color: #61dafb;
  font-size: 40px;
`

export const User = ({user}) => {

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteUser(user))
    }


    return <div><UserContent>Hello {user.name} {user.email}</UserContent><button onClick={handleClick}>Delete {user.name}</button></div>
}