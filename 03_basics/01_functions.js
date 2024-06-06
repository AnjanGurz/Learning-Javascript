// functions
/*
-> A function in JavaScript is a block of code designed to perform a particular task.
It is executed when "called" (or invoked). Functions allow you to reuse code, making
your programs more modular and easier to manage.
// Any line of code you write logic that does smthg and store them in  pacakage and use it in the specific area where we need to use 


We define a function using the function keyword, followed by the name of the function, a list of parameters enclosed in parentheses, and the block of code enclosed in curly braces {}.

ex:
*/
// Define a function named whoAmI
function whoAmI() {
    console.log("Anjan");  // This is the code that runs when the function is called
}

// calling a function(executing them)
whoAmI(); // Output: Anjan

// Define a function named greet that takes one parameter: name -> parameters(it is same like variable that hold value(arguments))
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the function with different arguments
// here anjan and alice is consider as arguments(value that we passed in function)
greet("Anjan");  // Output: Hello, Anjan!
greet("Priti");  // Output: Hello, Priti!


// fun named addTwoNumbers to add two num
function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result); // output: undefined , here it comes because we calcuulate the nums but we send it to the log and it doesnot mean return the value of calculation so we have to use return keyword to return the value of func that calculates more explanation:

function addTwoNumbers(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2;
    console.log("Anjan"); // here comes intersting thing  in js funtion after the return statement it doesnot executes the program after it, that means this console.log after return keyword would never execute(run)
}

const result = addTwoNumbers(3, 5);
console.log(`value after return key word`);
console.log("Result: ", result); // output: 8

/*
Functions with Return Values

Sometimes you want your function to give something back after it runs. You can do this using the return keyword.

*/
// Define a function named add that takes two parameters and returns their sum
function add(a, b) {
    return a + b;  // This returns the sum of a and b
}

// Call the function and store the result
let sum = add(3, 4);  // sum now holds the value 7
console.log(sum);     // Output: 7

function loginUserMessage(username = 'crunky'){
    // if(username === undefined){
    //     console.log(`please enter a username`);
    //     return;
    // }


    /* If username is undefined, null, an empty string "", 0, NaN, or false, 
    then !username evaluates to true. If username contains any other value 
    (including non-empty strings, numbers, objects, arrays, or functions), 
    then !username evaluates to false. 
    simply username doesnot include anything or store nousername(!username)*/
    if(!username){
        console.log(`please enter a username`);
        return;
    }
    return `${username} just logged in....`;
    // you can also add default value in the parameter like (username = 'crunky') and then the if statement would never run cuz it wont be true cuz the default value and if you pass parameter with new argument it will be override and runs the new value that is passed. 
}

console.log(loginUserMessage("Anjan"));
// what if the argument is empty passed means nothing(novalue) is passed
console.log(`no value passed`);
console.log(loginUserMessage()); // undefined just logged in.... so now we use conditional statement 

// -----------------------------functions with obj and an array-----------------------

// use scenario of ecommerce website 
function calculateCartPrice(...num1){
    return num1;
} 

// console.log(calculateCartPrice(200, 300, 400)); // it only gives 200 so have to use ...rest operator
// rest operator used for handling an indefinite number of arguments.

// to pass multiple arguments(values) in a fucntion ... rest operator is use in parameter and stores in an array and returns it 
console.log(`after using ... rest operator in parameter in a function`); // gives the arguments as an array while return lets check
console.log(calculateCartPrice(200, 300, 400));

// Furthermore another condition like below with 3 parameters
function calculateCartbox(val1, val2, ...num1){
    // return val1, val2, num1; //=>return statement return val1, val2, num1; doesn't work as expected. It only returns num1 as the value of the function. If you want to return multiple values, you might need to structure your return statement differently, such as returning an object containing all the values.
    return { val1, val2, num1 };
} 

calculateCartbox(200, 400, 300, 400);
// After running this func the 2 initial argument that passed will go in val 1 and 2 and the rest will be an array of num1 lets check in console
console.log(calculateCartbox(200, 400, 300, 400));
const user = {
    userName : "Anjan",
    price : 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}.`)
}

handleObject(user);

// you can also pass the obj directly as argument
handleObject({
    userName: "Crunky",
    price: 2099
})

// lets pass an array in func
const myNewArray = [400, 300, 200, 100]

function returnSecondValue(getArray){
    // return getArray[getArray.length-1]; // just fur fun not according to name of func
    return getArray[1]; // according to func name return index 1 as 2nd value of an array

}

// let's check 

console.log(returnSecondValue(myNewArray));