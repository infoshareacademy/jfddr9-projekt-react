import React from "react";
import styled from "styled-components";
import {ThemeButton} from "./ThemeButton";

const DarkBody = styled.div`
  background-color: ${(mode) =>
    mode.dark ? '#a81d4e' : '#1da840'}
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 9998;;
`;
export const DarkTheme = () => {
  return (
    <DarkBody>
      <ThemeButton></ThemeButton>
    </DarkBody>
  );
};
