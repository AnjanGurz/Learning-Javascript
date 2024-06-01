
//++++++++++++++++++++++++++++++++++++++++++++++++


// stack (Primitive), Heap (Non-Primitive)

/*

Heap:

    Passes the reference to the value.
    Accessed indirectly through pointers.
    Allows sharing and modifying data across functions.
    Used for dynamic memory allocation.
    Suitable for large data structures and objects.

Stack:

    Passes a copy of the value.
    Accessed directly.
    Limited to the scope of the function.
    Used for local variables and function parameters.
    Suitable for small, temporary data.


*/

//-> investigation study below with handson learning of the concepts



let myYoutubeName ="Crunky";

let anotherName = myYoutubeName; // the value here is a copy of myYoutubeName variable

//updating value or changing
anotherName = "Chaiaurcode";

//checking how is it working as concepts

console.log(myYoutubeName);
console.log(anotherName);

// creating obj -> obj is variable carrying a key value pairs

let userOne = {
    email: "gbicky44@gmail.com",
    Qr: "esewa"
}

let userTwo =  userOne;
// pass value by  ref
userTwo.email = "hunter@gmail.com"

// so here this non-primitve datatype uses heap memory to store and change the data

// let's check
console.log(userOne.email);
console.log(userTwo.email);




