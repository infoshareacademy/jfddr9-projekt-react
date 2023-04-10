import styled from "styled-components"

const SidebarStyle = styled.div`
    background-color: ${({theme}) => theme.backgroundsidebar};
    display: grid;
    grid-area: sidebar;
    align-items: center;
    border-radius: 20px;
    justify-items: center;
    padding: 0 40px;
    color: ${({theme}) => theme.text}
  `

export const Sidebar = ({items}) => { const listItems = items.map((item) => 

    <span key={item.name}> 
      <p>Name: {item.name}</p>
      <p>Link: {item.link}</p>

    </span>)

    return <SidebarStyle> {listItems}          
        </SidebarStyle>
}

 
