// "use strict"
// console.log(this)

let ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}

let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet
}

function greet(person){
  console.log("Inside greet, this is: ", this)
  //this == ann
  let setFullName = () => {
    console.log("Inside setFullName, this is: ", this)
    this.fullName = `${this.firstName} ${this.lastName}`
  }
  this.setFullName()
  console.log(`${this.firstName} ${this.lastName} says hi`)
}

// let annGreet = greet.bind(ann)
// let paulGreet = greet.bind(paul)

//
// document.querySelector("#ann").addEventListener("click", greet.bind(ann))
// document.querySelector("#paul").addEventListener("click", greet.bind(paul))
