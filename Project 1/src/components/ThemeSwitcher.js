import styled from 'styled-components';

const ButtonStyled = styled.button`
padding: 15px;
`

export const ThemeSwitcher = ({fn}) => {
    return (
        <ButtonStyled onClick={fn}>Zmień Motyw</ButtonStyled>
    )
}