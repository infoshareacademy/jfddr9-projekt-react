import styled from "styled-components"

const UserContent = styled.div`
padding: 20px;

`

export const User = ({user}) => {
	return<UserContent>Hello {user.name} {user.email}</UserContent>
}