import styled from 'styled-components';

const NewSmallButtoni = styled.button`
background-color: ${props => props.backgroundColor};
color: white;
font-size: 10px;
padding: 6px 12px;
border-radius: 22px;
margin: 2px;

&:hover{
    filter: contrast(2);
    transition: 0.3s;
}
`
export function SmallButtoni ({name, color, onClick}){
    return <NewSmallButtoni onClick={onClick} backgroundColor = {color}>{name}</NewSmallButtoni>
}