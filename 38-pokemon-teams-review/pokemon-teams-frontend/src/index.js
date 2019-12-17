const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', function(){
    getAllTrainers()
})

function getAllTrainers() {
    fetch(TRAINERS_URL)
        .then(res => res.json())
        .then(trainers => {
            trainers.forEach(trainer => {
                renderSingleTrainer(trainer)
            })
        })
    }
    
function renderSingleTrainer(trainer) {
    const pokemonContainer = document.querySelector('main')

    const trainerCard = document.createElement('div')
    trainerCard.dataset.id = trainer.id
    pokemonContainer.append(trainerCard)

    const trainerName = document.createElement('p')
    trainerName.innerText = trainer.name
    trainerCard.append(trainerName)

    const addPokemonBtn = document.createElement('button')
    addPokemonBtn.innerText = "Add Pokemon"
    addPokemonBtn.addEventListener('click', () => {addNewPokemon(trainer.id)})
    trainerCard.append(addPokemonBtn)

    const pokeList = document.createElement('ul')
    pokeList.id = `trainer-list-${trainer.id}`
    trainerCard.append(pokeList)

    trainer.pokemons.forEach(mon => {renderSinglePokemon(mon, pokeList)})
    
}

function renderSinglePokemon(mon, pokeList) {
    const pokeLi = document.createElement('li')
    pokeLi.id = `pokemon-${mon.id}`
    pokeLi.innerText = `${mon.nickname} (${mon.species})`
    pokeList.append(pokeLi)

    const pokeBtn = document.createElement('button')
    pokeBtn.innerText = 'Release'
    pokeBtn.dataset.pokemonId = mon.id
    pokeBtn.addEventListener('click', releasePokemon)
    pokeBtn.classList.add('release')
    pokeLi.append(pokeBtn)
}

function addNewPokemon(id) {
    // post  http://localhost/pokemons
    const trainerList = document.getElementById(`trainer-list-${id}`)
    const pokeCount = trainerList.childElementCount
    debugger
    // const trainerId = event.currentTarget.parentElement.dataset.id
    if (pokeCount < 6) {
        fetch(POKEMONS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
            body: JSON.stringify({
                trainer_id: id
            })
        })
        .then(res => res.json())
        .then(pokemon => {
            const trainerId = pokemon.trainer_id
            const trainer = document.getElementById(`trainer-list-${trainerId}`)
            renderSinglePokemon(pokemon, trainer)
        })
    } else {
        alert("Stop catchin em all!")
    }
}

// Disclaimer: This function releases pokemon into the wild and should no way be construed as harmful
// No pokemon were harmed in the making of this function
function releasePokemon(event) {
    const pokeId = event.target.dataset.pokemonId
    fetch(POKEMONS_URL + `/${pokeId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then(res => {
        if (res.ok) {
            // Remove pokemon list item from the page
            // This is an example of pessimistic (de)rendering
            const splitArr = res.url.split('/')
            const pokemonId = splitArr[splitArr.length -1]
            const pokemonListItem  = document.getElementById(`pokemon-${pokemonId}`)
            pokemonListItem.remove()
        } else {
            // Alert the error message
            alert('Check your pockets for a Psyduck')
        }
    })
    .catch(error => console.log(error))
}

/* <div class="card" data-id="1"><p>Prince</p>
    <button data-trainer-id="1">Add Pokemon</button>
    <ul>
        <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
        <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
        <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
        <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
        <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
    </ul>
</div> */