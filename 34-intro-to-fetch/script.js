// let promise = fetch("http://animal-farm-api.herokuapp.com/animals")
//     .then(response => {return response.json()})
//     .then(data => console.log(data))

document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("button")
    button.addEventListener("click", loadAnimals)
})


function loadAnimals() {
    fetch("http://animal-farm-api.herokuapp.com/animals")
        .then(response => response.json())
        .then(animalArray => {
            animalArray.forEach((animal) => 
                makeAnimalCard(animal))
            }
    )
}
// render each animal on a card
function makeAnimalCard(animal) {
    let container = document.querySelector(".container")
    let animalDiv = document.createElement("div")
    // put that card on the DOM
    container.appendChild(animalDiv)
    let animalTitle = document.createElement("h3")
    animalDiv.appendChild(animalTitle)
    animalTitle.innerText = `${animal.name} the ${animal.species}`
    let animalImg = document.createElement("img")
    animalImg.src = animal.img
    animalDiv.appendChild(animalImg)
    animalImg.style.width = "200px"

}

fetch("http://localhost:3000/hello/3")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => alert(error))
