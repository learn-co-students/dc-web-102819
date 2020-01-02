//find difference between
//max and min numbers within the each array
//inside the greater data array
//add all the difference together for a total sum
//nested array

//input -> an array of arrays
//output -> a single number

//Plan (psuedo-code)
// iterate through subarray
// [409, 194, 207, 470, 178] -> [276]
// Math.max() and Math.min()
// subtract them to get the difference
// remember that difference to be added later
// get the sum of all differences and that's your answer!!!


//for each through the data
//sorted each array
//find diff using data[length-1] - data[0]
//adding to a running total
//return

let data = []

function findSortedCheckSum(data){
  let checksum = 0
  for(let i=0; i<data.length; i++){
    let subarray = data[i]
    subarray.sort( (a, b) => a-b )
    checksum += subarray[subarray.length-1] - subarray[0]
  }
  return checksum
}

function findCheckSum(data){
  let checksum = 0
  for(let i=0; i<data.length; i++){

    let max = Math.max(...data[i])
    let min = Math.min(...data[i])
    let diff = max - min
    checksum += diff
  }
  return checksum
}

//console.log(findCheckSum(data)) //using Math.
//console.log(findSortedCheckSum(data)) //using sort
