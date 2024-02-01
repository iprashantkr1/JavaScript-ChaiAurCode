//static properties

//static: to prevent access to a method we use static

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")

hitesh.logMe()///logMe() is accessible

//console.log(hitesh.createId()); //createId() method cant be accessed now. Because it is static

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe() //logMe() is accessible

//console.log(iphone.createId()); //createId() method cant be accessed now. Because it is static

//Note: static is used to prevent inheritance