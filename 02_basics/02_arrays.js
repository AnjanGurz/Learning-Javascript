// Define two arrays: one for Marvel heroes and another for DC heroes
const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["The Flash", "Superman", "Batman"];

// Push the DC heroes array as a single element into the Marvel heroes array
marvelHeroes.push(dcHeroes);

// Output the updated marvelHeroes array
console.log(marvelHeroes);
/*
Explanation:
- We used the push() method to add the dcHeroes array as a single element into the marvelHeroes array at the end of the element.
- This results in the entire dcHeroes array becoming a single element within the marvelHeroes array.
- So, the marvelHeroes array now contains four elements: Thor, Ironman, Spiderman, and the dcHeroes array itself.
*/

// Access the nested array within marvelHeroes
console.log(marvelHeroes[marvelHeroes.length - 1]);
/*
Explanation:
- We accessed the last element of the marvelHeroes array, which is the dcHeroes array itself (nested array).
- We used the length property of the marvelHeroes array to get the index of the last element.
- So, the output will be the dcHeroes array: ["The Flash", "Superman", "Batman"].
*/

// Merge arrays using the concat method
const allHeroesConcatenated = marvelHeroes.concat(dcHeroes);
console.log("Merged using concat:", allHeroesConcatenated);
/*
Explanation:
- We used the concat() method to merge the marvelHeroes and dcHeroes arrays into a single array.
- The concat() method creates a new array by concatenating the arrays it's called on with the arrays or values passed as arguments.
- So, allHeroesConcatenated contains all the elements from both marvelHeroes and dcHeroes arrays.
*/

// Merge arrays using the spread operator
const allHeroesSpread = [...marvelHeroes, ...dcHeroes];
console.log("Merged using spread operator:", allHeroesSpread);
/*
Explanation:
- We used the spread operator (...) to merge the marvelHeroes and dcHeroes arrays into a single array.
- The spread operator spreads the elements of arrays or iterable objects into a new array.
- So, allHeroesSpread also contains all the elements from both marvelHeroes and dcHeroes arrays.
*/

// Define a nested array
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flatten the nested array
const flattenedArray = anotherArray.flat(Infinity);
console.log("Flattened array:", flattenedArray);
/*
Explanation:
- We used the flat() method with Infinity as an argument to flatten the nested array.
- The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
- By passing Infinity as the argument, we ensure that all nested arrays are flattened recursively.
- So, flattenedArray contains all the elements from the nested array flattened into a single array.
*/

// Check if a value is an array
console.log(Array.isArray("Anjan"));
/*
Explanation:
- We used the Array.isArray() method to check if a value is an array.
- Array.isArray() returns true if the provided value is an array; otherwise, it returns false.
- In this case, "Anjan" is not an array, so the output will be false.
*/

// Create an array from a string
console.log(Array.from("Anjan"));
/*
Explanation:
- We used the Array.from() method to create an array from a string.
- Array.from() creates a new array from an array-like or iterable object.
- When a string is passed to Array.from(), it creates an array with each character of the string as an element.
- So, the output will be an array containing individual characters of the string "Anjan": ["A", "n", "j", "a", "n"].
*/

// Create an empty array from an object (non-iterable)
console.log(Array.from({name: "Anjan"}));
/*
Explanation:
- We used the Array.from() method to create an array from an object.
- However, the provided object ({name: "Anjan"}) is not iterable, so Array.from() returns an empty array.
- Array.from() can create an array only from iterable objects or array-like objects.
*/

// Create an array from individual values
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
/*
Explanation:
- We used the Array.of() method to create an array from individual values.
- Array.of() creates a new array with the provided values as its elements.
- It ensures that each provided value is treated as a separate element in the array.
- So, the output will be an array containing the values 100, 200, and 300: [100, 200, 300].
*/

// Explanation of Array.of() vs. Array Literal Notation
/*
Explanation:
- Array Literal Notation ([]) interprets a single numeric argument as the array length and other arguments as array elements.
- Array.of() treats each argument as a separate element of the array, maintaining consistency.
- For example, Array.of(3) creates an array with one element (value 3), while [3] creates an array with one element (value 3) and a fixed memory space.
*/
