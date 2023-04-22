import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 5px;
`;

export const ThemeSwitcher = ({ handleToggle }) => {
  return <ButtonStyled onClick={handleToggle}>Zmień Motyw</ButtonStyled>;
};
