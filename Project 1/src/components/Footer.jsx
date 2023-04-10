import styled from "styled-components"

const FooterStyle = styled.div`
    background-color:  ${({theme}) => theme.backgroundfooter};
    padding: 50px;
    font-size: 25px;
    font-weight: bold;
    color: ${({theme}) => theme.text};
    align-items: center;
    border-radius: 20px;
    display: grid;
    grid-area: footer;    
    `

export const Footer = ({text}) => {
 
    return <FooterStyle> {text} </FooterStyle>
}