import styled from "styled-components"

const UserContent = styled.div`
    font-size: 20px;
    color: ${({theme}) => theme.primary}
` 

export const User = ({user, onClick}) => {
    
   const removeAction = () => {
        onClick(user.name)
   }

    return <UserContent>
        <>{user.name} {user.email}

        <button className="removeBtn" onClick={removeAction}>Remove</button>
        </>
    </UserContent>;
}
