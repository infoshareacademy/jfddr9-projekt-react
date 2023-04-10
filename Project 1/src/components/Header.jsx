import styled from "styled-components"


const HeaderStyle = styled.header`
    display: grid;    
    grid-area: header;
    align-content: center;
    background-color: ${({theme}) => theme.backgroundheader};
    max-height: 200px;
    padding: 50px;
    border-radius: 20px;
    color: ${({theme}) => theme.textheader};
    justify-content: center;
    
    `

export const Header = ({title, logo, children}) => {
 
    return <HeaderStyle>
        {children}
        <h1>{title}</h1>
        <img src={logo} alt="Logo" width="150px"/>
    </HeaderStyle>
}