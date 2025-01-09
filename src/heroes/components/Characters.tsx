import React from "react"
import { CharactersProps } from "../interfaces/charactersProps"

export const Characters : React.FC<CharactersProps>  = ( { characters, alter_ego } ) => {

  if ( characters === alter_ego ) return (<></>)
    
  return (
    <li className="card__tag card__tag--character">
      {characters}
    </li>
  )


 
}
