// console.log('connected')
// //objects in JS
//
// // function createTeacher(fn, ln){
// //   return {
// //     firstName: fn,
// //     lastName: ln
// //   }
// // }
// //
// // let ann = createTeacher("Ann", "Duong")
// // let paul = createTeacher("Paul", "Nicholsen")
//
// //constructor function

// function Instructor(fn, ln){
//   this.firstName = fn
//   this.lastName = ln
// }
//
// Teacher.prototype.greet = function(){
//     console.log(`${this.firstName} says hi`)
// }
//
// Teacher.prototype.lecture = function(){
//   console.log(`${this.firstName} is lecturing`)
// }
//
// let paul = new Teacher("Paul", "Nicholsen")
// let ann = new Teacher("Ann", "Duong")
// let chine = new Teacher("Chine", "Anikwe")
// //let ann = Teacher.bind({})
// //new is a special keyword
// //create {}, invokes Teacher() where this is that new empty obj
//
// Array.prototype.helloWorld = function(){
//   return "HELLO WORLD"
// }
//
// Object.prototype.helloUniverse = function(){
//   return "Hello UNiverse"
// }
//
// let array = [1, 2, 3]
//
//
//
//
//
//
//

//ES6 class syntax
class Person {
  constructor(fn, ln){
    this.firstName = fn;
    this.lastName = ln;
  }

  greet(){
    console.log(`${this.firstName} says hi`)
  }

}

class Teacher extends Person {
  constructor(x, y){
    super(x, y) //go to the constructor in the parent class
    // this.employeeID = Math.random()*10
  }

  leaveWork(){
    console.log("Baiii")
  }

   lecture(){
     console.log(`let's start lecture`)
   }
}

let ann = new Teacher("Ann", "Duong")













let paul  = new Teacher("Paul", "Nicholsen")
let jane = new Person("Jane", "Doe")






//
