import styled from "styled-components"

const UserContent = styled.div`
background-color: rgb(40, 47, 109, 0.5);
border-radius: 12px;
padding:24px;
margin-top:6px;
margin-bottom:6px;
display: flex;
flex-direction: column;
`

export const User = ({user}) => {
    return <UserContent>{user.name} {user.email}</UserContent>
}