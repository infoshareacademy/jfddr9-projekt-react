import { useState } from "react"

export const SearchBox = ({handleInput}) => {

    return <input type="text" onInput={handleInput}/>
}