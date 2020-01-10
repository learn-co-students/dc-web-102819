import React from 'react'
import Card from '../components/Card'

class PokemonList extends React.Component {
  render(){
    return (
      <div><h3>{this.props.title}</h3>
        {this.props.pokemons.map(pokemon => <Card
          key={pokemon.name}
          pokemonObj={pokemon}
          onDBclick={this.props.onDBclick}
          onActivatePokemon={this.props.onActivatePokemon}
        />)}
      </div>
    )
  }
}

export default PokemonList
