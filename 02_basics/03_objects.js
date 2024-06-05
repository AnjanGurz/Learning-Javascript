// learning objects:


// singleton -> obj created by constructors
// example : object.create -> this is called singleton, it cretes obj using constructors

// object literals


// In js we can add any data like array boolean number string etc in the form of key value pairs and we access then with the dot notation and name of key.

/* 
In JavaScript, an object is a collection of properties, where each property is a key-value pair. Objects can be used to store data and functionalities, encapsulating related data and methods in a single entity.
*/

/*

Creating an Object

You can create an object using object literal syntax or the Object constructor.

1. Object Literal Syntax

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isMarried: true,
    greet: function() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
};

2. Object Constructor

let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.isMarried = true;
person.greet = function() {
    console.log("Hello, " + this.firstName + " " + this.lastName);
};


*/

/* Symbols in JavaScript are unique identifiers often used as property keys in objects. They provide a way to create private properties, avoid name clashes, and customize object behavior. Their unique nature and non-enumerability make them valuable tools in JavaScript programming. */
// declaring symbol
const mySym = Symbol("key unique");


// creating an object using object literal

const JsUser = {
    name : "Anjan",                        // string
    [mySym] : "key1", // we have to use the bracket [] to add the key vlaue pairs of symbol boj
    age : 19,                             // num
    location : "Tbay",                     // string
    email : `anjanguru@gmail.com`,        // string
    isLoggedIn : true,                    // boolean
    lastLoginDays : [`monday`, `tuesday`] // array

}

console.log(`JsUser object Created`);
console.log(JsUser);
/*

=> Accessing Properties of obj

You can access object properties using dot notation or bracket notation.

*/

console.log(`Accessing Properties of obj....`);

// Dot Notation
let objvalue = JsUser.name;
console.log(`Accessed using dot notation`);
console.log(objvalue);
console.log(JsUser.name);

// Bracket Notation 
//-> note always remeber to the key in string while using bracket notation
console.log(`Accessed using [](bracket) notation`);
console.log(JsUser["age"]);


/*

=> Adding and Modifying Properties

We can add new properties or modify existing ones.

*/

// changing/modifying properties(values of a key)
console.log(`Adding and Modifying Properties.....`);
console.log(`name changed...`);
JsUser.name = "Crunky"; // using dot notation
console.log(`email upadted with newemail id`);
JsUser["email"]= "hunter45@gmail.com"; // using bracket notation


/* 
Deleting Properties
You can delete a property using the delete keyword. 
*/

console.log(`jsuse age is being removed`);
delete JsUser["age"];

console.log(`jsuse age is deleted`);
console.log(JsUser["age"]); // checking if it is deleted

console.log(JsUser);

// Adding a new key-value pair
JsUser.age = 20;

// console.log(`age added again`);
// console.log(JsUser);


// freeze the obj to stop from changing and modifying 

// Object.freeze(JsUser);
// console.log(`jsuser obj is freezed cannot make any chnages at the moment`);
JsUser.name = "Anjan"; // changing the value of key of a obj but won't be change due to freeze
// console.log(JsUser);

// adding function into obj

JsUser.greeting = function(){
    console.log(`hello Js User`);
}

JsUser.greetingTwo = function(){
    console.log(`hello Js User ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); // above i unfrrezed the obj


/*
Summary

    Creating Objects: Use literals or constructors.
    Accessing Properties: Use dot or bracket notation.
    Modifying Properties: Direct assignment.
    Deleting Properties: Use delete keyword.
    Freezing Objects: Use Object.freeze() to prevent changes.
    Methods: Attach functions to object properties.


    ****for this keyword for future understanding too****
    Summary

    Method Context: this refers to the object the method belongs to.
    Global Context: this refers to the global object (or undefined in strict mode).
    Constructor Functions: this refers to the instance being created.
    Arrow Functions: this is inherited from the outer scope.

*/

/*

********** more about symbol*********

When using symbols as keys in JavaScript objects, it's essential to follow a specific approach:
1. Creating a Symbol

First, you need to create a symbol using the Symbol() function. This function generates a unique symbol every time it's called. You can also provide an optional description string for debugging purposes.

Example:

const mySymbol = Symbol("description");

2. Using the Symbol as a Key

To use the symbol as a key in an object, enclose the symbol variable in square brackets [] when defining the property. This allows you to assign a value to the property associated with that symbol.

Example:

const obj = {
    [mySymbol]: "value"
};

3. Accessing the Symbol Property

You can access the property associated with the symbol using the same square bracket notation []. This retrieves the value stored under that symbol key in the object.

Example:

console.log(obj[mySymbol]); // Output: value

4. Symbol Uniqueness

It's important to note that each call to Symbol() returns a new, unique symbol, even if the description strings are identical(similar/same). This uniqueness ensures that symbols created with the same description are distinct and not equal to each other.

Example:

const mySymbol1 = Symbol("description");
const mySymbol2 = Symbol("description");

console.log(mySymbol1 === mySymbol2); // Output: false

but variable names must be unique within the same scope. 

By following this methodology, you can effectively utilize symbols as unique keys in JavaScript objects, enabling the creation of private or non-colliding properties.




*/