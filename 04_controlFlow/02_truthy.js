const userEmail = "gbicky@.ai";

if (userEmail) {
    console.log(`Got user email`);
    console.log(`truthy`);
}
else {
    console.log(`Don't have user email`);
    console.log(`falsy`);

}




/*
Empty values ("", null, undefined, 0, false, NaN) are falsy.

Non-empty strings, non-zero numbers, objects, and functions are truthy, 
even if the objects and functions are empty

Falsy Values:

    false
    0 (zero) , -0
    bigInt
    0n,
    "" (empty string)
    null
    undefined
    NaN (Not-a-Number)

Truthy Values:

    but if the zero is in string like this "0" it is truthy value
    Any non-zero number (e.g., 1, -1, 3.14)
    Non-empty strings (e.g., "hello")
    Objects (e.g., {}, [])
    Functions (even if they are empty)

*/

/* 
The if statement checks if the condition inside the parentheses is true.
Since !0 is true, the code inside the if block runs. */

// // Falsy values
// if (!0) {
//     console.log("0 is falsy"); // This will run
//   }
  
//   if (!"") {
//     console.log('"" is falsy'); // This will run
//   }
  
//   if (!null) {
//     console.log("null is falsy"); // This will run
//   }
  
//   if (!undefined) {
//     console.log("undefined is falsy"); // This will run
//   }
  
//   if (!NaN) {
//     console.log("NaN is falsy"); // This will run
//   }
  
// // Truthy values
//   if (1) {
//     console.log("1 is truthy"); // This will run
//   }
  
//   if ("hello") {
//     console.log('"hello" is truthy'); // This will run
//   }
  
//   if ({}) {
//     console.log("{} is truthy"); // This will run
//   }
  
//   if ([]) {
//     console.log("[] is truthy"); // This will run
//   }
  
//   if (function() {}) {
//     console.log("function() {} is truthy"); // This will run
//   }
  

const emptyObj ={};

// Object.keys(objName) this method return the key of the obj in the array format
/*
 ex : const students = {
        name :  "crunky",
        age : 21,
        class: 10
 }
        Object.keys(students); // output: [name, age, class];

*/


if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}


// nullish coalescing operator (??): null undefined
/*
The nullish coalescing operator (??) is a logical operator 
in JavaScript that returns the first operand if it is not null or undefined,
and the second operand if it is null or undefined.

The nullish coalescing operator is useful when you want to provide a 
default value if a variable is null or undefined, without affecting 
other falsy values like 0 or ''.

*/

let val1;
// val1 = 5 ?? 10; // it takes 5
// val1 = null ?? 10; // takes 10

val1 = undefined ?? 15; // takes 15


console.log(val1);

//-> ternary operator

// condition ? true : false;

const cokePrice = 100;
cokePrice <= 80? console.log(`less than 80`): console.log(`more than 80`);