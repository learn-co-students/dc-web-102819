import React from 'react'

const Card = (props) => {
  // console.log(props.onAddPokemon)
  return (
    <div
      className="pokemon card"
      onDoubleClick={()=>props.onDBclick(props.pokemonObj)}
      onClick={()=>props.onActivatePokemon(props.pokemonObj)}
    >
      {props.pokemonObj.name}
    </div>
  )
}

export default Card
