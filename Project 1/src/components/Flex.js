import styled from "styled-components"

const BeautifulFlex = styled.div`
display: flex;
flex-direction: column;
`
export const Flex = ({children}) => {
    return <BeautifulFlex>{children}</BeautifulFlex>
}