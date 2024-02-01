//inheritance

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USER NAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@gmai.com", "123")

chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe()
//masalaChai.addCourse() //no access

console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true
console.log(masalaChai instanceof User); //true
console.log(masalaChai instanceof Teacher); //false
