<<<<<<< HEAD
import styled from "styled-components";
=======
import styled from "styled-components"
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../store/usersSlice";
>>>>>>> b309689daec6288131f2e65468db1c824211b75b

const UserContent = styled.p`
  background-color: #61dafb;
  font-size: 40px;
`;

<<<<<<< HEAD
export const User = ({ user }) => {
  return (
    <UserContent>
      Hello {user.name} {user.email}
    </UserContent>
  );
};
=======
export const User = ({user}) => {

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(deleteUser(user))
    }


    return <div><UserContent>Hello {user.name} {user.email}</UserContent><button onClick={handleClick}>Delete {user.name}</button></div>
}
>>>>>>> b309689daec6288131f2e65468db1c824211b75b
