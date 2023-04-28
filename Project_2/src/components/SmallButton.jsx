import styled from 'styled-components';

const NewSmallButton = styled.button`
background-color: ${props => props.backgroundColor};
color: white;
font-size: 18px;
padding: 12px 18px;
border-radius: 28px;
margin: 4px;

&:hover{
    filter: contrast(2);
    transition: 0.3s;
}
`
export function SmallButton ({nazwaTegoSmallButtona, colorTegoSmallButtona, onClick}){
    return <NewSmallButton onClick={onClick} backgroundColor = {colorTegoSmallButtona}>{nazwaTegoSmallButtona}</NewSmallButton>
}