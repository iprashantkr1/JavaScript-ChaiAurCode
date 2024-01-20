const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num + 10 )

console.log(newNums); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//chaining
const newNumChain = myNums
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 50)

console.log(newNumChain) //[ 51, 61, 71, 81, 91, 101 ]

//The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.