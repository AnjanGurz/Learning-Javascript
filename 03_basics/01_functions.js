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
    then !username evaluates to false. */
    if(!username){
        console.log(`please enter a username`);
        return;
    }
    return `${username} just logged in....`;
    // you can also add default value in the parameter like (username = 'crunky') and then the if statement would never run cuz it wont be true and if you pass parameter with new argument it will be override and runs the new value that is passed. 
}

console.log(loginUserMessage("Anjan"));
// what if the argument is empty passed means nothing(novalue) is passed
console.log(`no value passed`);
console.log(loginUserMessage()); // undefined just logged in.... so now we use conditional statement 

