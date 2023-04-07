import styled from "styled-components"

const FooterTekst = styled.div`
background-color: grey;
max-width: 1920px;
height: 150px;
padding: 20px;
border: 2px;
display: flex;
justify-content: center;
align-items: center;
font-size: 45px;
`



export function Footer() {
return<FooterTekst>Tekst w footer</FooterTekst>
    
  }