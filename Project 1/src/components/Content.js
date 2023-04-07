import styled from 'styled-components';

export const Content = styled.div`
width: 80vw;
height: 100%;
background-color: ${props => props.theme.contentbg};
display: flex;
justify-content: center;
word-spacing: 10px;
text-align: left;
`;