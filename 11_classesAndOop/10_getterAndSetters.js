class User {
    constructor(email, password){
        this.email = email
        this.password = password;
    }


    // note if we are putting getters and setters we have to put it both not only setters with out getter (viceversa) if we do not define both then there would be an error

    get email(){
        return this._email 
    }

    set email(value){
        this._email = value; // here we defining the new field using _email
    }

    get password(){
        return this._password 
    }

    set password(value){
        this._password = value;
    }

    

}

const Om = new User('Om@gmail.com', 123);
console.log(Om.email);
console.log(Om.password);

/*

When you create a new object and pass a value to the email parameter, it's like calling the set email(value) method behind the scenes. The value is then stored in the private field _email.
Here's a step-by-step breakdown:

    You create a new object: const om = new User('Om@gmail.com', 123);
    The constructor is called with the arguments 'Om@gmail.com' and 123.
    The constructor sets the value of this.email to 'Om@gmail.com'.
    Because email has a setter method set email(value), it's called automatically with the value 'Om@gmail.com'.
    The setter method set email(value) stores the value in the private field _email.

So, in essence, the name of the set method email is indeed calling the value from the object parameter passed by creating a new object, and setting it into this._email.
This is a common pattern in JavaScript, known as "setter injection" or "dependency injection". It allows you to encapsulate data and behavior, making your code more modular and reusable.

*/