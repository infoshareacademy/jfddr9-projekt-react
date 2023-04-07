import styled from 'styled-components';
import { MenuItems } from '../data/menu-items';

const SidebarStyled = styled.nav`
width: 20vw;
height: 100%;
background-color: ${props => props.theme.sidebarbg};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;
`;

export const Sidebar = () => {
    return (<SidebarStyled>
        {MenuItems.map((item) => {
            return <a key={item.name} href={item.link}>{item.name}</a>
        })}
    
    </SidebarStyled>)
}