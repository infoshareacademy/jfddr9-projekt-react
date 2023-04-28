import styled from 'styled-components';

const NewParag = styled.p`
color: black;
font-size: 24px;
margin: 4px;
`
export function Paragraph ({textContent}){
    return <NewParag>{textContent}</NewParag>
}