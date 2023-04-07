import styled from "styled-components"

const BeutifulTitle = styled.div`
// background-color: rgb(40, 37, 159);
border-radius: 12px;
padding:24px;
margin-bottom:48px;
font-weight: 600;
text-transform: uppercase
display: flex;
flex-direction: row;
`

export const Header = ({title, logoSrc}) => {
    return( <BeutifulTitle>
        <img src={logoSrc} alt="Logo"/>
        <h1>{title}</h1>
    </BeutifulTitle>)
}