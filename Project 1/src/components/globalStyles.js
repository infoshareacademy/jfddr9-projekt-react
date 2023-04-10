import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition: all .5s linear
}

p {
    padding-top: 10px;
}
.toggleBtn {
    background: ${({theme}) => theme.backgroundheader};
    color: ${({theme}) => theme.primary};
    padding: 15px 10px;
    border: 2px solid white;
    border-radius: 20px;
    transition: all .5s linear;
    margin-left: auto;
    position: absolute;
    align-self: center
}

.removeBtn {
    background: ${({theme}) => theme.backgroundcontent};
    color: ${({theme}) => theme.primary};
    padding: 10px;
    border: 2px solid white;
    border-radius: 20px;
    transition: all .5s linear;
    margin-left: 50px;
}
`

export const lightTheme= {
    body: 'white',
    text: '#252169',
    primary: 'white',
    backgroundcontent: '#4d91ea',
    backgroundheader:'#085c91',
    backgroundsidebar: '#19c9d2',
    backgroundfooter: '#085c91',
    textheader: '#61DBFB' 
};
export const darkTheme= {
    body: 'black',
    text: 'white',
    primary: 'white',
    backgroundcontent: 'hsla(0, 0%, 20%, 0.4)',
    backgroundheader:'hsla(0, 0%, 20%, 0.8)',
    backgroundsidebar: 'hsla(0, 0%, 20%, 0.4)',
    backgroundfooter: 'hsla(0, 0%, 20%, 0.4)',
    textheader: 'white'
}