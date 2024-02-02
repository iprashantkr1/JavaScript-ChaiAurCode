//getter and setter
//name of the method is same as property for both get and set
//both get and set comes together

//Note: this._password is used inside get and set. If we use this.password it will throw error. Because we are setting same value twice once in constrcutor and again in set() method

//class based syntax--> mostly this method is used 95% time
class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}@123`
    }

    set password(value){
        this._password = value
    }
}

const chai = new User("chai@ai.com", "abc")
console.log(chai.email)
console.log(chai.password)


//Proposal: ES2022 - use # to make private