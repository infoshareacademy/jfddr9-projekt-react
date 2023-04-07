import styled from "styled-components"

const VeryBeautifulFlex = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
export const Mainflex = ({children}) => {
    return <VeryBeautifulFlex>{children}</VeryBeautifulFlex>
}