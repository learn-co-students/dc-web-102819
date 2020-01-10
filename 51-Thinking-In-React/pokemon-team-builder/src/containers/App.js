import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header'
import PokemonList from './PokemonList'
import Details from '../components/Details'
import Searchbar from '../components/Searchbar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      allPokemon: [],
      activePokemon: null,
      team: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(res => res.json())
    .then(data => {
      this.setState({allPokemon: data.results})
    })
  }

  onSearch = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  filteredPokemon(){
    return this.state.allPokemon.filter(
      p => !this.state.team.includes(p)
    ).filter(p => p.name.includes(this.state.searchTerm))
  }

  //state changing callback
  onAddPokemon = (pokeObj) => {
    // console.log("attempting to add pokemon to team", obj)
    if(this.state.team.length < 6){
      if(this.state.team.includes(pokeObj)){
        alert("cannot add same pokemon twice")
      }else{
        this.setState({team: [...this.state.team, pokeObj]})
      }
    }else{
      alert("Cannot have more than 6 pokemon you dummy!")
    }
  }

  onRemovePokemon = (pokeObj) => {
    this.setState({
      team: this.state.team.filter(p => p !== pokeObj)
    })
  }

  onActivatePokemon = (pokemon) => {
    // console.log("activate pokemon", pokemon)
    //this.setState({activePokemon: ???})
    fetch(pokemon.url)
    .then(res=>res.json())
    .then(data => {
      this.setState({activePokemon: data})
    })
  }

  onReset = () => {
    this.setState({team: []})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PokemonList
          title="Team:"
          pokemons={this.state.team}
          onDBclick={this.onRemovePokemon}
          onActivatePokemon={this.onActivatePokemon}
        />
        <br/>
        {
          this.state.team.length === 0 ? null :
          <button onClick={this.onReset}>Reset Team</button>
        }
        <br/>
        {
          this.state.activePokemon ?
            <Details activePokemon={this.state.activePokemon}/>
              :
            null
        }
        <Searchbar onSearch={this.onSearch}/>
        <PokemonList
          title="Available Pokemon:"
          pokemons={this.filteredPokemon()}
          onDBclick={this.onAddPokemon}
          onActivatePokemon={this.onActivatePokemon}
        />
      </div>
    );
  }
}

export default App;
