//Function: a sequence of program instructions that performs a specific task, packaged as a unit. This unit can then be used in programs wherever that particular task should be performed

function sayMyName(){
    console.log("P");
    console.log("K");
}
sayMyName //refrence
sayMyName() //execution

//parameter: variables that we pass inside a function declaration
//argumnets: values/variables that we pass during function call

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3, 4) //7
addTwoNumbers(3, "4") //34 (so we should check if values passed is Number or not)

function addTwo(number1, number2){
    let res = number1 + number2
    return res;
}
const result = addTwo(5, 5)
console.log(result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a valid username!");
        return;
    }
    return `${username} just logged in.`
}
console.log(loginUserMessage("Hitesh"));//Hitesh just logged in.
console.log(loginUserMessage());//Please enter a valid username!

/******Functions with objects and array in javascript***** */

//rest operator '...' => this bundles all the numbers in an array and returns an array
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(200, 500, 400, 2000)); //[ 200, 500, 400, 2000 ]

function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice1(200, 500, 400, 2000));//[ 400, 2000 ] => here first two values go to val1 & val2 and rest to num1

//object 
const user = {
    username: "Sam",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user) //Username is Sam and price is 199

handleObject({
    username: "Hitesh",
    price: 399
}) //Username is Hitesh and price is 399

//arrays
const myNewArray = [200, 400, 100, 500]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myNewArray)); //400


