const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", () => {
  console.log("dom loaded")
  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(trainers => {
    app = new App(trainers)
    document.body.innerHTML += app.render()
  })
})
