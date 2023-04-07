import styled from "styled-components"

const ItemsContent = styled.div`
color: rgb(0, 0, 0);
border-radius: 12px;
padding:21px;
margin-right:100px;
display: flex;
flex-direction: column;

`
const ListItem = styled.ul`
list-style:none;
background-color: rgb(40, 47, 109, 0.2);
border-radius: 12px;
padding: 25px;

&:hover{
scale:1.06;
background-color: rgb(40, 47, 109, 0.5);

}
`
const SingleItem = styled.a`
text-transform: uppercase;
font-size: 22px;
font-weight:600;
text-decoration: none;
color: rgb(0, 224, 187);
&:focus{
    color: rgb(0, 0, 0);
}
&:hover{
    color:white;
    ;
}
`
export const Item = ({item}) => {
    return <ItemsContent>
        <ListItem key={item.name}>
        <SingleItem href={item.link}>{item.name}</SingleItem></ListItem></ItemsContent>
}