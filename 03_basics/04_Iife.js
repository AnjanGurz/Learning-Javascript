// Immediately Invoked Function Expressions (IIFE)
/*
function that is executed immediately after it's created. 
It's a way to create a self-contained scope for your code and
execute it without needing to explicitly call the function later.

SYNTAX:
(function() {
    // code here
})();

*/

/*
Enclosure in Parentheses: The function is wrapped inside a set of parentheses ( ). 
This is necessary because JavaScript interprets a function declaration as a 
function statement, and function statements cannot be immediately invoked. 
Wrapping the function in parentheses converts it into a function expression.

*/


/*

Why Use IIFE?

    Encapsulation: IIFEs create a new scope for your code, preventing variable collisions with other scripts or global variables.

    ****INterview Weustion IMP****
    Avoid Global Scope Pollution: Variables and functions declared inside an IIFE do not pollute the global namespace, keeping your global scope clean and minimizing the risk of naming conflicts.

    Initialization: IIFEs are often used for initializing code, such as setting up configurations, initializing variables, or defining utility functions.
*/

//IIFE code example:
(function chai(){
    console.log(`Db CONNECTED`);
})(); // runs implictily right after making this IIFE function 

/*
// Doubt cleared investigated learning with checking the code

function chai(){
    var name = `hello var scope`;
    // let Name = `hello let scope`;
    console.log(`Db CONNECTED`);
}

chai();
console.log(name);

In this code:

    Inside the chai function, name is declared using var, making it a variable 
    with function scope. It is accessible only within the chai function.
    
    When chai() is called, the function executes successfully, and 
    name is defined and logged within the function.

    Outside the chai function, attempting to access name with console.log(name); 
    will result in an error because name is not defined in the scope outside the 
    function.

So, whether you use var, let, or const, the scope of the variable is determined 
by where it's declared. In this case, name is declared inside the chai function, 
so it's only accessible within that function.

*/

/*
The main difference between an Immediately Invoked Function Expression (IIFE) and 
a regular function is that an IIFE is executed immediately after it's defined, 
whereas a regular function is not executed until it's called.

*/

// lets check writing the IIfe with other type of function like anonymous and arrow fucntion with regular function

(function Name(){
    // Also called named IIFE because it's has a name
    console.log(`name`);
})(); // ; this character -> used to create multiple IIFE in same file which make sure to run the every IIFE in the file , if there is no ; it will only run the initial IIFE but not the other IIFE-: if there is no ;

//IIFE with Anonymous function
(function (){
    console.log(`Noname`);
})();

// IIFE with Arrow func with parameters and arguments
((Name) => {
    console.log(`arrow => Connected DB ${Name}`);
    } )(Anjan);

/* iife works as same as noraml function like passing the value through parameter
only the diff is the () and ;, to make the func run immediately(impicilty)
right after creating it and ; make sure that every IIFE function runs present in the file to prevent from running only one of the intial one
*/