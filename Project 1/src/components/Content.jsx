import styled from "styled-components"

export const ContentStyle = styled.div`
    background-color: ${({theme}) => theme.backgroundcontent};
    display: grid;
    grid-area: content;
    align-items: center;
    border-radius: 20px;
    color: ${({theme}) => theme.text};
    
    `

export const Content = ({children}) => {
   
    return <ContentStyle>{children}</ContentStyle>
}