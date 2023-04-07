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
const Head = styled.h1`
font-size: 28px;
color: rgb(0, 204, 187);
&:hover{
    scale:1.04;
    color: rgb(90, 217, 228);
    transition: 0.3s;

`

export const Header = ({title, logoSrc}) => {
    return( <BeutifulTitle>
        <img src={logoSrc} alt="Logo"/>
        <Head>{title}</Head>
    </BeutifulTitle>)
}