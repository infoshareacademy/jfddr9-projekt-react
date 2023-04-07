import styled from 'styled-components';
import { ThemeSwitcher } from './ThemeSwitcher';

const HeaderStyle = styled.header`
width: 100vw;
height: 15vh;
background-color: ${props => props.theme.headerbg};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Header = (props) => {
    return (
        <HeaderStyle><h1>{props.title}</h1><img src={props.logoSrc} alt="logo" /><ThemeSwitcher fn={props.fn}/></HeaderStyle>
    )
}