//for object iteration we use 'for in loop'
const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObj){
    console.log(`${key} : ${myObj[key]}`);
}

//for-in for array
const arr = ["js", "cpp", "swift", "java", "python"]

for(const key in arr){
    console.log(key);//this will give index of array elements and not the element
    //to get array elements
    console.log(arr[key]);
}
//so avoid using for-in with arrays

//Note: for-in is not used with maps
