let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  getAllTheToys()
  getCreateForm().addEventListener('submit', createNewToy)
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })

})


function getAllTheToys() {
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(data => data.forEach(toy => renderToy(toy)))
}


function renderToy(toy) {
  // created card for each toy and appended it to toy-collection
  const toyCard = document.createElement('div')
  toyCard.classList.add('card')
  toyCard.id = toy.id
  const toyCollection = document.querySelector('#toy-collection')
  toyCollection.appendChild(toyCard)

  // `h2` tag with the toy's name
  const toyName = document.createElement('h2')
  toyName.innerText = toy.name
  toyCard.appendChild(toyName)

  // `img` tag with the`src` of the toy's image attribute and the class name "toy-avatar"
  const toyImage = document.createElement('img')
  toyImage.src = toy.image
  toyImage.classList.add('toy-avatar')
  toyCard.appendChild(toyImage)

  // `p` tag with how many likes that toy has
  const toyLikeCount = document.createElement('p')
  toyLikeCount.innerText = `${toy.likes} Like(s)`
  toyCard.appendChild(toyLikeCount)

  // `button` tag with a class "like-btn"
  const likeButton = document.createElement('button')
  likeButton.classList.add('like-btn')
  likeButton.innerText = "Like <3"
  toyCard.appendChild(likeButton)

  // Add event listener for the like button
  likeButton.addEventListener('click', () => increaseLikes(toy.id, toyLikeCount))
}

function getCreateForm(){
  return document.querySelector('.add-toy-form')
}

function createNewToy(e){
  e.preventDefault()
  console.log('Im clicking the create btn')
  
  const newToyName = e.target.name.value
  const newToyImage = e.target.image.value

  const configOptions = {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name: newToyName, image: newToyImage, likes: 0 })
  }

  fetch("http://localhost:3000/toys", configOptions)
  .then(response => response.json())
  .then(toy => {
    renderToys(toy)
    e.target.reset()
  }) 
  .catch(error => console.log(error.message))
}

function increaseLikes(toyId, likesP) {
  const likeCount =  parseInt(likesP.innerText)

  const configOptions = {

    method: 'PATCH',
      headers: {
        
        "Content-Type": "application/json",
        "Accept": "application/json"

      },
      body: JSON.stringify({likes: likeCount + 1 })
  }

  fetch(`http://localhost:3000/toys/${toyId}`, configOptions)
  .then(response => response.json())
  .then(toy => displayNewLikes(toy, likesP))
}

function displayNewLikes(toy, likesP) {
  likesP.innerText = toy.likes + " like(s)";
}