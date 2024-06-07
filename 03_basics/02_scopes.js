// Scopes

// var c = 400;  // As we know var is global scope and big problem so let and const came which has block scope

// {}  -> this is block scope 

let a = 50; // here the value of a i 50

if(true){
    let a = 10; // here the value of a i 10
    const b = 20;
    var c = 30;

    // here the a and b is block scope only works under the {} scope

    // console.log(`inner ${a}`);
}

// console.log(a); // not defined 
// console.log(b); // not defined 
// console.log(c); // 30 as i told you block scope can access any where and can be update and redeclare itself it redeclared in the if statement block scope so value came 30

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(i); //the variable i declared with let inside the for loop is scoped to the block of the loop. This means that it's only accessible within the loop and not outside of it.


// *****imp point the scope, global scope is diff in vscode through node check and different in browser check *******

// NESTED SCOPE

function one(){
    const userName = "Firoj"
    /* explantion here is the nested(child) function can access the parent properties like any thing under the parent func like variable,func,obj,array because both lies in a same block scope but parent cannot acces the properties of nested function beacuse it has it's own block scope while is not in the same scope.
    
    here we can simplify the explanation through the anaolgy below:
    
    Genrally like children can stole the icecream from their parents but the parents cannot stole or take them from it even we can but not suitable and appropriate the same thing you can thing here with the nested scope it is just for understanding anaology.
    
    */
    function two(){
        const website = "youtube"
        // console.log(userName);
    }
    // console.log(website); // cause error output coz it is demanding the blockscope variable want ice cream from its child haha so error
    two();
}

one(); // invoked function one

// same with the if else

if (true) {
    const userName = "Crunky";
    if (userName === "Crunky") {
        const website = "Google";
        // console.log(userName + website);
    }
    // console.log(website); // will get error cuz the scope of website is already ended and we are log(website) outside of the scope which will not work
    
}

// console.log(userName); // will get error cuz the scope of userName is already ended inside the if statement and we are log(userName) outside of the scope which will not work


// ++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++
addOne(6);
console.log(`function invoked before the function is decleared and let's print it below`);
console.log(addOne(6));

function addOne(num){
    return num + 1;
}

// lets call func 
addOne(3); // this is function call you can call the function any where in the code space before the function declaration(created) line too it will work let's check above


// but in below the another way of making a function(anonymous function) varable holding function cannot that same like invoking functon before their decleartion which is also known as hoisting(we will discuss about hoisting more)


// anonymous function where variable holds a function having no name(no identifier)

const addTwo = function(num){
    return + 2;
}

addTwo(5);