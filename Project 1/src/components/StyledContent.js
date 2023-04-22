import styled from 'styled-components';

export const StyledContent = styled.div`
  width: 80vw;
  height: 100%;
  background-color: ${({ mytheme }) => (mytheme ? '#45103E' : 'purple')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  word-spacing: 10px;
  text-align: left;
`;
