// Arrow functions

// Arrow Functions

// Arrow functions provide a concise syntax for writing functions, especially useful for short, one-liner functions.

// let square = x => x * x;
// console.log(square(5)); // Output: 25


// lets learn in detail about arrow function

const user = {
    userName: "Pretty",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to the website`);
        console.log(this);
    }
}

// invoke welcomeMessage from obj

// user.welcomeMessage();
// user.userName = "CrunkMAster";
// user.welcomeMessage();

// console.log(this); // returns empty {} obj

/*
All about this keyword in regular functions, anonyoums func and obj

The this keyword in JavaScript is a special keyword that refers to the object that is currently executing the code. Its value depends on how a function is called and where it is called.

this keyword is indeed used to access the context of the current scope, specifically within functions or methods.

*/

// ******Web browser console****** -> Outside of any function, this refers to the global object. In a web browser, this is the global obj which is window object.
// BUt in *******code editor console using Node******* -> this returns the empty object{}



// ** but Now the main topic is arrow function ***

// function chai(){
//     let userName = "Hitman";
//     // console.log(this.userName); 
       // output: undefined -> see this is not working , only work with obj -> we will discuss this in dom lecture
// }

// chai();

// const coffee = function chai(){
//         let userName = "Hitman";
//         console.log(this.userName); 
// }

// coffee(); // undefined

console.log(`Arrow function defined and invoked below`);

const chai = () => {
    let username = "hunter"
    console.log(this);
}


chai(); // empty obj{}



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // same as abobe code implicit method

const addTwo = (num1, num2) => ({username: "hitesh"}) // but in js obj cannot return with out() to retrun implicit so have to use it


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

