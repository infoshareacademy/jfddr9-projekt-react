import styled from 'styled-components';

const FooterStyled = styled.footer`
width: 100vw;
height: 15vh;
background-color: ${props => props.theme.footerbg};
color: white;
`;

export const Footer = ({text}) => {
    return <FooterStyled>{text}</FooterStyled>
}