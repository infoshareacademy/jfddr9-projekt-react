import {Item} from "./Item"

export function Sidebar({ asses }) {
  console.log(asses);
  return (<>
  {
    asses.map((item) => {
        return <Item item={item} key={item.name}/>
    })
  }
  </>)
}
