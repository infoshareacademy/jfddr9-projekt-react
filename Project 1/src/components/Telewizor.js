import styled from "styled-components";
const VeryUglyTheme = styled.div`
backgound-color: rgb(0, 0, 0);
`

export const UglyTheme = ({children}) => {
        return <VeryUglyTheme>{children}</VeryUglyTheme>
}