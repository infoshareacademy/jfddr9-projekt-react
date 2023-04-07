import styled from "styled-components"

const UserContent = styled.p`
  background-color: #61dafb;
  font-size: 40px;
`

export const User = ({user}) => {
    return<UserContent>Hello {user.name} {user.email}</UserContent>
}