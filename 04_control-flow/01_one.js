/*
//if statement
if(condition){
    //statements
}

// <, >, <=, >=, ==, ===, !=, !==

//if-else
if(condition){
    //if condition is true run this block
}
else{
    //if false runs this block
}
*/

const score = 200

if(score > 100){
    const power = "Fly"
    console.log(`User power: ${power}`);
}
else{
    console.log(`Score less than 100, so can't fly.`);
}

const balance = 1000

//if(balance > 500)   console.log("test1"), console.log("test2"); //correct but bad code

//if else-if
if(balance < 500){
    console.log("Less than 500")
}
else if(balance < 1000){
    console.log("Less than 1000");
}
else{
    console.log("Balance greater than or equal to 1000");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Sllow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}
