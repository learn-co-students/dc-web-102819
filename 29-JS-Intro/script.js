// console.log("hello world!")

//undefined - you havn't set the value yet
// let sec //how many sec until mom answers
// let minutes
//null - explicitly setting value to be NO VALUE
// sec = null

//how to make a copy???
function addTwo(y){
  // let z = Object.assign({}, y)
  let z = y
  z.push(2)
  return z
}

let a = []
let b = addTwo(a)

console.log("a:", a)
console.log("b:", b)
