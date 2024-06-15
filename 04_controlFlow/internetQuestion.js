var a = 1;

function data(){
    if(!a){
        var a = 10;
    }
    console.log(a);
}
data();
console.log(a);

/*

var a = 1;

function data() {
    if (!a) {
        var a = 10;
    }
    console.log(a);
}

data();
console.log(a);

Understanding !a:

    Variable Declaration and Scope:
        var a = 1; declares a global variable a and initializes it to 1.
        Inside the data() function, due to hoisting (where var declarations are moved to the top of their scope), the variable a is declared locally before any code is executed within the function.

    Condition if (!a):
        When JavaScript encounters if (!a) inside the data() function, it first looks for a local variable a within the function scope.
        Due to hoisting, a local variable a is indeed declared within data(), but it has not been initialized yet, so it holds the value undefined.

    Falsy Check with !a:
        The logical NOT operator ! in JavaScript converts the operand to a boolean value and then negates it.
        In JavaScript, the following values are falsy: undefined, null, 0, false, NaN, and an empty string ''.
        Since the local variable a inside data() is initially undefined, !a evaluates to true.

    Variable Shadowing:
        Inside the if block (if (!a)), a new local variable a is declared and initialized to 10. This a is local to the function scope and shadows the global variable a. Variable shadowing occurs when a variable declared within a specific scope (such as a function or a block) has the same name as a variable in an outer scope (like a global scope or an outer function scope). This can lead to the inner variable "shadowing" or temporarily hiding the outer variable with the same name.

    Output of console.log(a); Inside data():
        The console.log(a); statement inside data() prints the value of the local variable a, which is 10 (the value assigned inside the if block).

    Global console.log(a); Outside data():
        Outside the data() function, console.log(a); prints the value of the global variable a, which remains 1 because the assignment inside data() did not affect the global variable a.

Conclusion:

    The key point here is understanding variable hoisting, scope, and how local variables can shadow global variables in JavaScript.
    !a evaluates to true inside the if statement because the local variable a within data() is initially undefined, which is a falsy value in JavaScript.
    This behavior demonstrates why understanding scoping and hoisting is essential when working with JavaScript variables to avoid unexpected results.


*/