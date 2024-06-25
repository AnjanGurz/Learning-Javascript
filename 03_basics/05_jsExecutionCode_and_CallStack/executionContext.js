/*
=> Example Code:
        let val1 = 10;
        let val2 = 5;

        function addNum(val1, val2) {
            let total = val1 + val2;
            return total;
        }

        let result = addNum(val1, val2);
        console.log(result);


=> Global Execution Context (GEC)

    Memory Creation Phase (Hoisting)
        JavaScript engine scans the code to allocate memory for variables and functions.
        Variables are initially set to undefined.
        Function declarations are fully hoisted (stored in memory).

    After the memory creation phase:
        val1 is undefined.
        val2 is undefined.
        addNum is stored as a function definition.
        result is undefined.

    Execution Phase
        JavaScript starts executing the code line by line.
        val1 is assigned 10.
        val2 is assigned 5.
        result is assigned the return value of addNum(val1, val2).

Function Execution Context (FEC)

When addNum(val1, val2) is called, a new execution context is created for this function.

    Memory Creation Phase (Hoisting)
        Function arguments (val1 and val2) are initialized.
        Local variables are set to undefined.

    After the memory creation phase:
        total is undefined.

    Execution Phase
        The code inside the function is executed.
        total is assigned the value val1 + val2, which is 10 + 5 = 15.
        The function returns 15, which is then assigned to result.

Call Stack

    Global Execution Context is pushed onto the call stack.
    When addNum(val1, val2) is called:
        A new Function Execution Context is created and pushed onto the call stack.
        After the function completes, it is popped off the stack.
    The global context resumes execution with the returned value.

Memory and Execution Phases Summary

Here's a step-by-step visualization of the memory and execution phases:

    Global Context Memory Creation Phase:
        val1 = undefined
        val2 = undefined
        addNum = function definition
        result = undefined

    Global Context Execution Phase:
        val1 = 10
        val2 = 5
        Call addNum(val1, val2)

    Function Context Memory Creation Phase:
        val1 = 10 (argument)
        val2 = 5 (argument)
        total = undefined

    Function Context Execution Phase:
        total = val1 + val2 = 15
        Return 15

    Global Context Execution Phase (Continued):
        result = 15
        console.log(result) outputs 15


Summary

    Execution Context: Represents the environment where JavaScript code is executed.
        Global Execution Context: Created by default, handles the global scope.
        Function Execution Context: Created whenever a function is invoked.
        Eval Execution Context: Created when eval() is used.

    Memory Creation Phase: JavaScript hoists variables and function declarations.
    Execution Phase: JavaScript executes the code line by line.
    Call Stack: Keeps track of the order of execution contexts.
*/





/*

Yes, exactly! When you run a JavaScript file in a browser environment, such as through an HTML file or directly in a browser's console, JavaScript creates an execution environment that includes several key components:
Browser Environment Execution Context

    Global Execution Context:
        Created by default when the JavaScript file is loaded in the browser.
        Manages the global scope of the script.
        In the global execution context:
            The global object is window.
            Variables and functions declared globally become properties and methods of the window object.

    javascript

console.log(this === window); // true

Memory Creation Phase:

    During this phase, JavaScript engine hoists:
        Variable declarations (var, let, const) to the top of their scope, initializing them to undefined or leaving them uninitialized in the case of let and const.
        Function declarations are fully hoisted, meaning they are available for use throughout their scope.

javascript

    var globalVar = "I'm a global variable";

    function globalFunction() {
        console.log("I'm a global function");
    }

    Execution Phase:
        Executes the JavaScript code line by line after hoisting is completed.
        Assigns initial values to variables (undefined for var, and leaves let and const in the Temporal Dead Zone until their declaration is reached).
        Runs function code and performs operations specified within the script.

Example Recap:

Consider the following JavaScript file example.js running in a browser environment:

javascript

var globalVar = "I'm a global variable";

function globalFunction() {
    console.log("I'm a global function");
}

console.log(globalVar); // Outputs: "I'm a global variable"
globalFunction(); // Outputs: "I'm a global function"

Steps in Browser Environment:

    Global Execution Context Creation:
        this is bound to the window object (this === window).
        globalVar is hoisted and initialized (var globalVar;).
        globalFunction is hoisted and available as a function.

    Memory Creation Phase:
        globalVar is initialized to "I'm a global variable".
        globalFunction is defined and ready for execution.

    Execution Phase:
        console.log(globalVar); prints "I'm a global variable".
        globalFunction(); executes and prints "I'm a global function".

Summary

    Browser Environment: When JavaScript runs in a browser, the global execution context includes the window object as the global object, where global variables and functions are attached.
    Execution Context Phases: JavaScript goes through a memory creation phase where variables and functions are hoisted, followed by an execution phase where code is executed line by line.

Understanding how JavaScript operates within different execution contexts, especially in browser environments, helps in writing effective code and leveraging JavaScript's capabilities to interact with the browser and manipulate the DOM (Document Object Model).


*/