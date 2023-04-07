import styled from "styled-components"

const BeutifulFooter = styled.div`
border-radius: 12px;
padding:24px;
margin-top:48px;
font-weight: 600;
text-transform: lowercase
`

export const Footer = ({text}) => {
    return( <BeutifulFooter>
        <h2>{text}</h2>
    </BeutifulFooter>)
}