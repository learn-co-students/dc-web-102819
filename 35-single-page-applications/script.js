document.addEventListener("DOMContentLoaded", function(){
    gottaFetchEmAll()
    getForm().addEventListener("submit", processNewPokemonForm)

});

function gottaFetchEmAll() {
    fetch("http://localhost:3000/pokemon")
        .then(response => response.json())
        .then(pokemonArray => {
            pokemonArray.forEach(pokemon => renderPokemon(pokemon))
        })

}

function renderPokemon(pokemon) {

    let container = document.getElementById("pokemon-container")
    let pokemonCard = document.createElement("div")
    pokemonCard.classList.add("card")
    pokemonCard.id = `pokemon-${pokemon.id}`
    let header = document.createElement('h3')
    header.innerText = pokemon.name
    pokemonCard.appendChild(header)
    container.appendChild(pokemonCard)
    let image = document.createElement("img")
    image.src = pokemon.sprite
    pokemonCard.appendChild(image)
    pokemonCard.addEventListener("click", deletePokemon)

}

function getForm() {
    return document.getElementById("new-pokemon-form")
}

function processNewPokemonForm(event) {
    event.preventDefault()
    let newName = document.querySelector("#name-input").value
    let newSprite = document.querySelector("#sprite-input").value
    postPokemonData(newName, newSprite)
}

function postPokemonData(name, sprite_url) {
    let newPokemonData = {"name": name,
                          "sprite": sprite_url}
    json_string = JSON.stringify(newPokemonData)
    fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: json_string
    }).then(res => res.json())
    .then(data => renderPokemon(data))
    getForm().reset()
}

function deletePokemon(event) {
    let card = event.currentTarget
    let id = card.id.split("-")[1]
    fetch(`http://localhost:3000/pokemon/${id}`, {
        method: "DELETE"
    }).then(res => card.remove())
    .catch(error => alert(error))
}


















