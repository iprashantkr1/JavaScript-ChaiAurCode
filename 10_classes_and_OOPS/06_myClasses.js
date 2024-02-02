//ES6

//inside a class a fucntion is called method

class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc#`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Chai", "chai@gmail.com", "1234@1")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//behind the scene
//if class is not available this is how codes were before

function User1(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

Object.prototype.encryptPassword = function(){
    return `${this.password}abc#`
}

Object.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("Tea", "tea@gmail.com", "123tea@")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


