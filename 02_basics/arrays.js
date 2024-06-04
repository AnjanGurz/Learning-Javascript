// array 

/*
In js array is dynamically stored the data which
means you can store diff type of data in a single variable in a form of array.

also define as: The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

-> In JavaScript, arrays aren't primitives but are instead Array objects

-> JavaScript arrays are resizable and can contain a mix of different data types.

-> JavaScript arrays are not associative; elements are accessed using nonnegative integers.(JavaScript arrays use nonnegative integers for indexes, not strings.)

-> Arrays are zero-indexed: first element at index 0, second at index 1, etc.

-> The last element is at array.length - 1.

-> Array-copy operations create shallow copies. (which means it passes the value by refrence)

*/

let myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // we can also create array like this and we can add data directly there() which auto stores in [].
// console.log(myArr[1]);


// Array methods
myArr.push(6);       // Add 6 to the end of the array
myArr.push(7);       // Add 7 to the end the end of the array
myArr.pop();         // no argument needed here just removes the last element

myArr.unshift(9);    // Add 9 to the start the end of the array
myArr.shift();       // no argument needed here just removes the first element



console.log(myArr.includes(9));  // Check if 9 is in the array returns in boolean true if exist  false if not.
console.log(myArr.indexOf(3));   // Finds the index of 3

const newArr = myArr.join();     // Join array elements into a string -> converts an array into a string. By default, the elements are separated by commas.

console.log(myArr);
console.log(newArr);

// Slice and splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);  // Get elements from index 1 to 2
console.log(myn1);               // Log the new sliced array
console.log("B ", myArr);        // Log the original array (unchanged)

const myn2 = myArr.splice(1, 3); // Remove elements from index 1 to 3
console.log("C ", myArr);        // Log the modified array
console.log(myn2);               // Log the removed elements

// more explain:

/*

The slice and splice methods:

    slice(start, end):
        Returns a shallow copy of a portion of the array.
        Does not modify the original array.
        The end index is not included in the extracted portion.

    => EXAMPLE:

    const myArr = [1, 2, 3, 4, 5];
    const slicedArr = myArr.slice(1, 3); // Extract elements from index 1 to 2
    console.log(slicedArr); // Output: [2, 3]
    console.log(myArr);     // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

    splice(start, deleteCount, item1, item2, ...):

        Removes elements from an array and, optionally, inserts new elements in their place.
        The last index of the specified range is included in the removed elements.
        Modifies the original array.
        Returns the removed elements.

    => EXAMPLE:

        const myArr = [1, 2, 3, 4, 5];
        const splicedArr = myArr.splice(1, 3); // Remove 3 elements starting from index 1
        console.log(splicedArr); // Output: [2, 3, 4]
        console.log(myArr);      // Output: [1, 5] (original array is modified)

    In summary:

        slice extracts a portion of the array without modifying the original array.
        splice removes elements (and can also add new ones) and modifies the original array.

*/