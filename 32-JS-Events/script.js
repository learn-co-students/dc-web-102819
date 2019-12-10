//all code that DEPENDS on the DOM
document.addEventListener("DOMContentLoaded", ()=>{
  let emailEls = document.getElementsByClassName("email")
  for(let i=0; i<emailEls.length; i++){
    emailEls[i].addEventListener("click", clickEmail)
  }
  let formEl = document.querySelector("form")

  formEl.addEventListener("submit", submitForm)
})

function submitForm(event){
  event.preventDefault()
  console.log("submit???")
  let firstName = document.getElementById("firstNameInput").value
  let lastName = document.getElementById("lastNameInput").value
  let email = document.getElementById("emailInput").value
  addInstructor(firstName, lastName, email)
  event.target.reset()
}

function clickEmail(event){
  let emailAddr = event.target.innerText
  alert(`Do you want to send email to ${emailAddr}?`)
}

function addInstructor(firstName, lastName, email){
  var trElement = document.createElement("tr")
  var tBodyEl = document.querySelector("tbody")
  tBodyEl.appendChild(trElement) //appending it to the <tbody>

  var firstNameEl = document.createElement("td")//creating the <td>
  firstNameEl.innerText = firstName//updating the <td> to have a innerText of Jane

  var lastNameEl = document.createElement("td")//creating the <td>
  lastNameEl.innerText = lastName//updating the <td> to have a innerText of Jane

  var emailEl = document.createElement("td")//creating the <td>
  emailEl.innerText = email//updating the <td> to have a innerText of Jane
  emailEl.addEventListener("click", clickEmail)

  trElement.append(firstNameEl, lastNameEl, emailEl)//appending to the tbody
}

//not great when working with event
// function addInstructor(firstName, lastName, email){
//   var tBodyEl = document.querySelector("tbody")
//   tBodyEl.innerHTML = tBodyEl.innerHTML + `<tr>
//     <td class="firstName">${firstName}</td>
//     <td class="lastName">${lastName}</td>
//     <td class="email">${email}</td>
//   </tr>`
// }
