const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["The Flash", "Superman", "Batman"];


// Push the dc_heros array as a single element into the marvel_heros array
// This means adding the entire dc_heros array as one item at the end of the marvel_heros array.
// marvel_heros.push(dc_heros);

// console.log(marvel_heros); 
// Output: ["Thor", "Ironman", "Spiderman", ["The Flash", "Superman", "Batman"]]
// stored arrays as data (element)into the arrays which proves that array can store any type of value in js

// let's chek and retrive the value array we added into the array with index
console.log(marvel_heros[marvel_heros.length-1]); 
//or
console.log(`***Anotherway***`);
console.log(marvel_heros[3]);


// Accessing an element within the nested array
// console.log(marvel_heros[3][1]); // Output: "Superman" - Access the second element in the nested dc_heros array

// This works, but accessing deeply nested elements directly can make the code harder to read and maintain.

console.log(`Using the concat function with dot notation to merge arrays:`);
const allHeros = marvel_heros.concat(dc_heros); // Merges arrays into a single array
console.log(allHeros);

console.log(`\nUsing the spread operator (...) with dot notation to merge arrays:`);
// Another way is using the spread operator (...) before the array variable
// It spreads the elements of arrays and stores them in a single array
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

/*

-> concat method merges arrays into one.
-> The spread operator ... is like breaking a glass, spreading its pieces, here it spreads the elements of arrays into a new array. It's concise and preferred over concat for array merging.

because concat can only merge two arrays at a time.

spread operator (...) can merge multiple arrays simultaneously. It's more flexible and concise compared to concat.

*/


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [ 4, 5]]];

const real_another_array = another_array.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth as argument where can write infinfity to auto track it self the depth.
console.log(real_another_array); // let's check

console.log(Array.isArray("Anjan"));
console.log(Array.from("Anjan")); // if it cannot create the array form given argument  which doesnot support to convert it will return empty array

/*

    Array.isArray() checks if the argument is an array.
    Array.from() creates a new array from an array-like or iterable object.

The Array.from() method is versatile in that it can create an array from any iterable or array-like object, regardless of its specific type. This includes objects like strings, arrays, array-like objects (such as the arguments object or NodeList), and other iterable objects.

For example:

javascript

console.log(Array.from("Anjan")); // Output: ['A', 'n', 'j', 'a', 'n']

const set = new Set([1, 2, 3]);
console.log(Array.from(set)); // Output: [1, 2, 3]

const map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
console.log(Array.from(map)); // Output: [[1, 'one'], [2, 'two'], [3, 'three']]

In each case, Array.from() creates an array from the iterable object passed to it, allowing you to easily convert different types of data structures into arrays for further manipulation.

*/

console.log(`converting key value pairs into the array element`);
console.log(Array.from({name: "Anjan"})) // interesting
// look gave the empty array, so if it cannot create the array form given argument  which doesnot support to convert it will return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// so there could be doubt between using [] and this arrayof creating and storing array so here is the explanation.

/*

anjan explantion:
->




/*
Array Literal Notation ([]):
- When a single argument is passed, [] interprets it as the length of the array and allocates memory accordingly.
- For non-numeric arguments, it stores the argument directly as an element of the array.

Array.of():
- Treats each argument as a separate element of the array, regardless of its type.
- Guarantees that each argument is stored as an individual element in the array, maintaining consistency.

Example:
- When using Array.of(3), it creates an array with one element, '3', while [3] creates an array with one element, with only 3 memory fix space.


In Summary:
- Array Literal Notation ([]): Interprets single numeric arguments as the array length, while treating other arguments as array elements.
- Array.of(): Ensures each argument is treated as a distinct element in the array, promoting consistency.
*/


