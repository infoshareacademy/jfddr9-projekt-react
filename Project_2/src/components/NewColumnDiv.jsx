import styled from 'styled-components';

const Dividii = styled.div`
dispaly: flex;
flex-direction: column;
margin: 10px;
`
export const NewColumnDiv = ({children}) =>{
    return <Dividii>{children}</Dividii>
}