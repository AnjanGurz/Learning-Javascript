//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100; // datatype check : Number
console.log("score");
console.log(typeof score);

const scoreValue = 100.3 // datatype check : Number
console.log("\nscoreValue");
console.log(typeof scoreValue);


const isLoggedIn = false; // datatype check : Boolean
console.log("\nisLoggedIn");
console.log(typeof isLoggedIn); 

const outsideTemp = null; // datatype check : object
console.log("\noutsideTemp");
console.log(typeof outsideTemp); 

let userEmail; // datatype check : undefine
console.log("\nuserEmail");
console.log(typeof userEmail); 

const id = Symbol('123'); // datatype check : symbol
console.log("\nid");
console.log(typeof id); 

const anotherId = Symbol('123');// datatype check : symbol
console.log("\nanotherId");
console.log(typeof anotherId + "\n"); 

console.log("id === anotherId");
console.log(id === anotherId); // false

/* 

In JavaScript, symbols are a unique and immutable primitive data type used to create unique identifiers for object properties. Each time you create a symbol using `Symbol()`, even with the same description/value, it generates a unique symbol or value.

*/

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("\nHello world");
}

console.log(typeof myFunction);

// console.log(typeof anotherId);
// console.log(typeof (anotherId)); // both are same

console.log("\nhere is type check of my obj :");
console.log(typeof myObj);

/*
    Undefined: typeof undefined results in "undefined".
    Null: typeof null results in "object" (this is a historical bug).
    Boolean: typeof true results in "boolean".
    Number: typeof 42 results in "number".
    String: typeof "hello" results in "string".
    Symbol: typeof Symbol() results in "symbol".
    Object (native and does not implement [[Call]]): typeof {} results in "object".
    Array: typeof [] results in "object" (arrays are a type of object in JavaScript).
    Object (native or host and does implement [[Call]]): typeof function() {} results in "function".
    Object (host and does not implement [[Call]]): Implementation-defined result, but it will not be "undefined", "boolean", "number", or "string".

    Explanation:

    Undefined: typeof undefined returns "undefined".
    Null: typeof null returns "object" (this is a historical bug in JavaScript).
    Boolean: typeof true returns "boolean".
    Number: typeof 42 returns "number". -> there is no float,int or double like in statictype languages if there is num in a memory or variable it is known as Number data type.
    String: typeof "hello" returns "string".
    Symbol: typeof Symbol() returns "symbol".
    Object: typeof {} returns "object".
    Array: typeof [] returns "object" (arrays are a type of object in JavaScript).
    Function: typeof function() {} returns "function".


*/
// https://262.ecma-international.org/5.1/#sec-11.4.3