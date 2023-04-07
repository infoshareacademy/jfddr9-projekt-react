import { useState } from "react";
import styled from "styled-components";
// import {UglyTheme} from "./components/Telewizor"

const FancyButton = styled.button`
  background-color: ${(mode) =>
    mode.dark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.7)'};
 color:${(mode) =>
        mode.dark ? 'rgb(255, 255, 255)' : 'rgb(0, 15, 44)'};
  border: none;
  border-radius: 22px;
  margin-top: 8px;
  padding: 4px 26px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s linear;
`;


export const ThemeButton = () => {
  const [dark, setDark] = useState(false);
  const toggler = () => {
    setDark(!dark);
  };
  return (
    <FancyButton onClick={toggler} dark={dark}>
      {dark ? "Day" : "Night"}
    </FancyButton>
  );
};
