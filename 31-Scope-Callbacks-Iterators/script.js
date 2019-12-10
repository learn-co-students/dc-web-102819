console.log('connected')
// console.log(cerealData)



function expel(student){
  return `go away ${student}`
}

//make our own map for scratch
//should return a NEW array with transformed data
// function myMap(array, callback){
//   let newArray = []
//   for(let i=0; i<array.length; i++){
//     //array[i] is "harry"/"ron"/"ann"
//     let string = callback(array[i], i, array) //"harry the wizard"
//     newArray.push(string)
//   }
//   return newArray
// }

// function filter(array, callback){
//   let newArray = []
//   for(let i=0; i<array.length; i++){
//     if(callback(array[i])//to be true )
//       newArray.push(array[i])
//   }
//   return newArray
// }









//function expression
// let makeWizard = function(student){
//  return `${student} the wizard`
// }

// let students = ["harry", "ron", "hermione", "ann"]
// let wizards = students.map(makeWizard)
//
// // function declaration
// function makeWizard(student){
//   return `${student} the wizard`
// }





//arrow function
// let makeWizard = (student) => {return `${student} the wizard`}
// let makeWizard = student => `${student} the wizard`




// let shortNamedWizards = students.find(name => name.length === 3)

// function conditional(student){
//   return student.length === 3
// }















// function lecture(teacher){
//   alert(`${teacher} is giving a lecture`)
// }

// function goHome(employee){
//   console.log(`${employee} is leaving work`)
// }

// function doThing(callback, name){
//   debugger
//   callback(name) //this is a function
// }

// doThing(goHome, "Paul")
// doThing(lecture, "Ann")






























//Scope





//global scope


//var, let, const
// var teacher = "Ann"
// var teacher = "Paul"
//var let you redeclare and reassign the same variable

// let teacher = "Ann"
// teacher = "Paul"
//let will NOT allow you to redeclare variables
//BUT you can reassign variables

// const teacher = "Ann"
// teacher = "Paul"
//const CAN't redeclare
//also can't reassign

// let teacher = "Paul"


let teacher = "Paul"

function outerFunction(){
  let teacher = "Ann"

  let innerFunction = () => {
    console.log("inside inner function", teacher)
  }

  innerFunction()
}



outerFunction()
console.log("In Global scope", teacher)











//
