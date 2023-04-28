import styled from 'styled-components';

const Dividi = styled.div`
dispaly: flex;
flex-direction: row;
`
export const NewDiv = ({children}) =>{
    return <Dividi>{children}</Dividi>
}