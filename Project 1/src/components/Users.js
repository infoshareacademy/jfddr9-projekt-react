import {User} from "./User"

export function Users({ settings }) {
  console.log(settings);
  return (<>
  {
    settings.map((user) => {
        return <User user={user} key={user.name}/>
    })
  }
  </>)
}
