function fetchCats() {
    fetch("http://localhost:3000/cats")
        .then(res => res.json())
        .then(catArray => catArray.forEach(cat => renderCat(cat)))
}

function renderCat(cat) {
    let catContainer = document.querySelector("#cats")
    let catDiv = document.createElement("div")
    catContainer.appendChild(catDiv)
    catDiv.classList.add("ui", "card")
    catDiv.innerHTML = `
          <div class="image">
            <img src=${cat.img}>
          </div>
          <div class="content">
            <a class="header">${cat.name}</a>
          </div>
          <ul class="extra content cat-hobbies">
          </ul>
    `
    cat.hobbies.forEach(hobby => {
        let hobbyContainer = catDiv.querySelector("ul.cat-hobbies")
        let hobbyLi = document.createElement("li")
        hobbyContainer.appendChild(hobbyLi)
        hobbyLi.innerText = hobby.name

        
    })
}

function getCatForm() {
    return document.querySelector("form")
}

function createCat(e) {
    e.preventDefault()
    let catName = event.target.name.value
    let catImage = event.target.image.value 
    let payloadData = JSON.stringify({name: catName, img: catImage})
    fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: payloadData
    }).then(res => res.json()).then(cat => renderCat(cat))
    e.currentTarget.reset()
}