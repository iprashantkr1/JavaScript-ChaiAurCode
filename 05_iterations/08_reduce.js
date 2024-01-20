//*************Array.reduce()********************
const array1 = [1, 2, 3, 4, 5]
const initialValue = 0
const sum = array1.reduce( (accumulator , currentValue) => accumulator + currentValue , initialValue)

console.log(sum); //15

const arr = [1, 2, 3]
const total = arr.reduce( function(acc, currVal) {
    console.log(`acc = ${acc} and currVal = ${currVal}`)
    return acc + currVal
}, 0)
console.log(total) 
/*
Output:
acc = 0 and currVal = 1
acc = 1 and currVal = 2
acc = 3 and currVal = 3
6
*/

const arr1 = [1, 2, 3, 4]
const arr1Total = arr1.reduce( (acc, currVal) => acc + currVal , 0)
console.log(arr1Total); //10


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0 )
console.log(priceToPay); //22996