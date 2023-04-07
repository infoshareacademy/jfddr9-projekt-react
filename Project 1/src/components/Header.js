import styled from 'styled-components';

const HeaderStyle = styled.header`
width: 100vw;
height: 15vh;
background-color: ${props => props.theme.headerbg};
`;

export const Header = (props) => {
    return (
        <HeaderStyle><h1>{props.title}</h1><img src={props.logoSrc} alt="logo" /></HeaderStyle>
    )
}