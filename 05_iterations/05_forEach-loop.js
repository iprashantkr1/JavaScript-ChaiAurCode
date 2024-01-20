//forEach loop

const coding = ["js", "ruby",
"java", "cpp", "python"]

//Way-1
coding.forEach( function(val){
    console.log(val);
} )

//Way-2
coding.forEach( (item) => {
    console.log(item)
} )

//Way-3
function printMe(item){
    console.log(item);
}

coding.forEach(printMe) //Note:here we only pass function reference

/*
Output of all 3:
js
ruby
java
cpp
python
*/

//forEach have access to index and whole array, apart from array items

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})
/*
Output:
js 0 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
ruby 1 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
java 2 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
cpp 3 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
python 4 [ 'js', 'ruby', 'java', 'cpp', 'python' ]
 */


//array off objects

const myCoding = [
    {
        languageName: "javascript",
        fileName: "js"
    },
    {
        languageName: "python",
        fileName: "py"
    },
    {
        languageName: "C++",
        fileName: "cp"
    } 
]

myCoding.forEach( (item) => {
    console.log(item.fileName);
})

/**
Output:
js
py
cp
*/


