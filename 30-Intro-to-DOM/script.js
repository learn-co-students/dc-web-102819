console.log("connected")

// function addInstructor(firstName, lastName, email){
//   let tbodyEl = document.querySelector('tbody')
//   tbodyEl.innerHTML += `
//   <tr>
//     <td class="firstName">${firstName}</td>
//     <td class="lastName">${lastName}</td>
//     <td class="email">${email}</td>
//   </tr>
//   `
// }

function addInstructor(firstName, lastName, email){
  //create a tr
  //create 3 td's
  //make sure they are on the DOM in the right place
  //data is Jane Doe

  //manually creating and manipulating our nodes
  let trEl = document.createElement("tr") //create tr, and add it to tbody
  var tbodyEl = document.querySelector("tbody")

  let tdFirst = document.createElement("td")
  let tdLast = document.createElement("td")
  let tdEmail = document.createElement("td")

  tdFirst.innerText = firstName
  tdLast.innerText = lastName
  tdEmail.innerText = email

  tbodyEl.appendChild(trEl)
  trEl.append(tdFirst, tdLast, tdEmail)
}
