function multiplyBy5(num) {
    return num * 5 ;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(2));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser (userName, age){
    this.userName = userName;
    this.age = age;
}


// Use regular functions for prototype methods insted of arrow because you know this context in srrow func looks for own block context not its outside thats why it doesnot works here

createUser.prototype.increment = function() {
    this.age++;
};

createUser.prototype.printMe = function() {
    console.log(`Age is ${this.age}.`);
};

/*

Prototypes and Methods

In JavaScript, when you create an object using a constructor function (like Person), you can add methods to the prototype of that constructor function. This means that all instances created with that constructor will have access to those methods. ---- we can understand like simulating the class example as the class there is propeties and methods and we creating  diff methods there where it is avaailbe to use for the instances created using that class

*/

/*he new keyword is crucial for turning a function into a constructor that creates instances of objects. */

const crunky = new createUser ('Anjan', 21);
const hunter = new createUser ('hunt', 18);

// here the new key role plays crucial role 

/*

The new keyword in JavaScript is crucial for creating instances of objects using constructor functions or classes. It plays a significant role in the object-oriented programming model of JavaScript. Here’s a detailed explanation of how new works:
How new Keyword Works

Role of new in Constructor Functions

    Creating a New Object:
        When you use new with a constructor function, it creates a new, empty object. This new object will be used to store properties and methods defined in the constructor function.

    Setting the Prototype:
        The prototype of the newly created object is set to the constructor function's prototype. This means that the new object inherits properties and methods from the prototype of the constructor function.

    Binding this:
        Inside the constructor function, the this keyword refers to the newly created object. This allows you to initialize the new object’s properties.

    Returning the Object:
        By default, new returns the newly created object. If the constructor function explicitly returns an object, that object is returned instead. If a non-object is returned, the newly created object is returned.

*/


crunky.increment();
crunky.printMe();


hunter.printMe();


// ********* NOTES about new key word by ChaiAurCode ******



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

