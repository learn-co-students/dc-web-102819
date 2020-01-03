class Trainer {
  //<div class="card"></div>
  constructor(trainer){
    this.id = trainer.id
    this.name = trainer.name
    //trainer.pokemons is an array of pokemon object, NOT of Pokemon instances
    this.pokemons = trainer.pokemons.map(pokemon => new Pokemon(pokemon))
  }

  render(){
    return `
    <div class="card" data-id="${this.id}"><p>${this.name}</p>
      <button data-trainer-id="${this.id}">Add Pokemon</button>
      <ul>
        ${this.pokemons.map(pokemon => pokemon.render()).join("")}
      </ul>
    </div>
    `
  }
}
