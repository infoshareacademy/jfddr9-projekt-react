import styled from 'styled-components';

const NewButton = styled.button`
background-color: ${props => props.backgroundColor};
// background-color: #5970FC;
color: white;
font-size: 18px;
padding: 16px 22px;
border-radius: 38px;
font-weight: bold;
margin:10px 0;
&:hover{
    filter: contrast(2);
    transition: 0.3s;
}
`
export function Button ({nazwaTegoButtona, colorTegoButtona}){
    return <NewButton backgroundColor = {colorTegoButtona}>{nazwaTegoButtona}</NewButton>
}