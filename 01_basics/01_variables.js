const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // this also creates the variable with out key word of let var and const but it is not the way to write it so avoid it just letting to know this kinda thing also possible.
let accountState;

// accountId = 2 // not allowed because the varaible is const


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// let donot give permisson to redeclare the same name of variable in new line of code except block and func scope where var does that and makes the program complicated and errors but both can be updated with their value. for eg:
/*

for ex: let cup = "water";
        let cup = "juice"; //not allowed same memory(variable) name cannot be redeclared
        cup ="juice"; // but can be updated or change the value in a memory

        where,

        var cup = "water";
        var cup = "juice"; // can redeclare the same variable name but may conflict in the program using in diff purposes
        cup = "soup" // upadting the value or maybe changing

*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// More explaination i have a backgroung of java basics so i know how the functions and conditional statements work so using this example to know better the conepts for my self -> this comment is for my sself and others who is looking in this repo


// Using var
function exampleVar() {
    var x = 10;
    if (true) {
        var x = 20; // This reassigns the same variable x
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20, because var has function scope
}
exampleVar();

// Using let
function exampleLet() {
    let y = 10;
    if (true) {
        let y = 20; // This declares a new variable y within the block
        console.log(y); // Output: 20
    }
    console.log(y); // Output: 10, because let has block scope
}
exampleLet();

// Using const
function exampleConst() {
    const z = 10;
    if (true) {
        // Trying to reassign a const variable will result in an error
        // z = 20; // This will cause an error: "Assignment to constant variable"
        console.log(z); // Output: 10
    }
    console.log(z); // Output: 10, because const has block scope and cannot be reassigned after initialization
}
exampleConst();