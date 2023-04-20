import styled from "styled-components"

const SidebarTekst = styled.div`

width: 25vw;
height: 400px;

border: 3px solid;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 25px;

`



export function Sidebar({links}) {
    return<SidebarTekst>{links.map(x=>{
      return<a>{x.name}{' '}{x.link}</a>
      
      

    })}</SidebarTekst>
        
      }