const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this); // this is  about the current context means current working block  in user obj
  },
};

// console.log(this);
// while running in node it gives the empty obj but if you run this in browser 
// it gives window obj containing whole builtin methods of js

// understanding constructor by simulating the function example and new keyword

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Anjan", 7, true);
const userTwo = new User("Crunky", 9, false);

console.log(userOne);
console.log(userTwo);


// about new key word concept
// when we use new keyword it creates the empty object  and it helps to a prevents fields from overriding data

console.log(userOne.constructor); // output: User
/*
Think of .constructor like a "birth certificate" for an object.
It tells you:

    Who created me? (the constructor function or class)
    Where did I come from? (the original blueprint or template)
    
In JavaScript, (.constructor) is a property of an object that refers to the function that created the instance of that object.
It's a way to identify the constructor function or class that was used to create the object.
*/


/*

**************instanceof***************

Instance of
In JavaScript, instanceof is an operator that checks if an object is an instance of a particular constructor function or class.

Syntax:

object instanceof Constructor // ouput : true/false 

    object: The object you want to test.
    Constructor: The function or class you want to test against.

How It Works

The instanceof operator checks the prototype chain of the object to see if it contains the Constructor's prototype.
If it does, the result is true; otherwise, it's false.

Example using Function:

        function Car() {}
        
        And you create an object myCar using that constructor:
        JavaScript
        
        let myCar = new Car();
        
        To check if myCar is an instance of Car, you can use instanceof
        
        console.log(myCar instanceof Car); // Output: true

Example using Class: 
    class Vehicle {}
    class Car extends Vehicle {}
    
    let myCar = new Car();
    
    console.log(myCar instanceof Car); // Output: true
    console.log(myCar instanceof Vehicle); // Output: true


*/
