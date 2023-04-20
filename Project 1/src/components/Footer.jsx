import styled from "styled-components"

const FooterTekst = styled.div`

max-width: 100%;
height: 150px;

border: 3px solid;
display: flex;
justify-content: center;
align-items: center;
font-size: 45px;
`



export function Footer() {
return<FooterTekst>Tekst w footer</FooterTekst>
    
  }