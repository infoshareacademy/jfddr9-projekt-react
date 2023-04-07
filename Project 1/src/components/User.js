import styled from "styled-components"

const UserContent = styled.div`
background-color: blue;
`

export const User = ({user}) => {
	return<UserContent>Hello {user.name} {user.email}</UserContent>
}