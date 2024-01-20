const userEmail = "hitesh@gpt.ai"

if(userEmail){
    console.log("Got email ID");
}
else{
    console.log("Don't have user email.");
}

//"hitesh" =>true
//"" => false
//[] => true

//falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values => "0", 'false', " ", [], {}, function(){}

const arr = []
if(arr.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty.");
}

/*
false == 0 //true
false == '' //true
0 == '' //true
*/


//Nullish Coalescing Operator (??) : null, undefined

let val1;
val1 = 5 ?? 10
console.log(val1); //5

val1 = null ?? 10
console.log(val1); //10

val1 = undefined ?? 15
console.log(val1); //15

val1 = null ?? 10 ?? 20
console.log(val1); //10


//Terniary operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less tah 80") : console.log("more than 80") 
//more than 80

