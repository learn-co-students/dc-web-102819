function fetchHobbies() {
    fetch("http://localhost:3000/hobbies")
        .then(res => res.json())
        .then(hobbyArray => hobbyArray.forEach(hobby => renderHobby(hobby)))
}

function renderHobby(hobby) {
    let hobbyDiv = document.querySelector("#hobbies")
    let newHobby = document.createElement("li")
    newHobby.innerText = `${hobby.name}: ${hobby.description}`
    hobbyDiv.appendChild(newHobby)
}