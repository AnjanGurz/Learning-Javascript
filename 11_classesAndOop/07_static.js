class User {
    constructor(userName){
        this.userName = userName 

    }

    logMe(){
        console.log(`Username : ${this.userName}`);
    }

    static createId(){
        return `123`
    }
}

const anjan = new User('anjan')
// console.log(anjan.createId());

console.log(User.createId());

class Teacher extends User{
    constructor(userName, email){
        super(userName)
        this.email = email
    }
}


const iphone = new Teacher('apple','i@apple.com')

iphone.logMe();
iphone.createId(); // error coz this is static method -> static members(prorpeties of class created with static ) are accessed through the class itself, not through instances.

User.createId(); // sucesssful to run > accessed through the class itself