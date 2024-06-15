/*

For...Of Loop Note:

    The variable in a for...of loop takes on the value of each element in the iterable (array, string, etc.) one at a time.
    During each iteration, the code inside the loop is executed with the current value of the variable.
    The variable is reassigned the next value in the iterable on each subsequent iteration.

Example: for (let banana of numbers) { console.log(banana); }

    banana takes on the value of each element in numbers (1, 2, 3, 4, 5) one at a time.
    The code console.log(banana) is executed with each value of banana.


    
*/

// let numbers = [1, 2, 3, 4, 5];

// for (let num of numbers) {
//   console.log(num); // 1, 2, 3, 4, 5
// }

// let str = 'hello';

// for (let char of str) {
//   console.log(char); // 'h', 'e', 'l', 'l', 'o'
// }

// let obj = { 
//     a: 1, 
//     b: 2, 
//     c: 3 
// };

// for (let prop of Object.values(obj)) {
//   console.log(prop); // 1, 2, 3
// }



// ********MAP OBJECT*********


/* The Map object holds key-value pairs and remembers the original insertion order of the keys(It means it doesnot hold the duplicate value only store the distinct value). 
Also follows the order of value how it is stored
Any value (both objects and primitive values) may be used as either a key or a value.  */

// const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // Expected output: 2

const map = new Map();

// let valueMap = map.set("name", "anjan")

// console.log(valueMap);


map.set("Nep", "Nepal");
map.set("Sk", "Korea");
map.set("Ned", "Netherland");
map.set("Usa", "America");
map.set("Can", "Canada");
map.set("Aus", "Australia");

// console.log(map);
// console.log(map.get('Nep')); // Nepal

map.get("Can");
map.delete("Ned");

// console.log(map);

/*
// checking if for in works in mapObj or not

for (const key in map) {
  console.log(key);
}

// no output because it not itreable

*/

// using for of loop :-> used for to iterating the mapObj and arrays
// destructure in key and value of obj
for (const [key, value] of map) {
  // console.log(key, '->', value);
}

// for of will not work to iterate to the obj 
// so we are using for in loop for obj to itreiate

const myObject = {
  js : 'javaScript',
  cpp: 'c++',
  rb: 'ruby',
  xapp: 'reactNative'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}



const programming =["js", "py", "rb", 'java', 'cpp'];

for (const key in programming) {
  // console.log(programming[key]);
}




// loop mostly used in array  for each loop

const coding = ['JavaScript', 'Python', 'Java', 'c#'];

//call back func doesnot have name

// using noname function(anonyomus)
// coding.forEach( function (key){
//   console.log(key);
// });

// using arrow function both works same as noname func just writing style is diff, fun is fun
// coding.forEach( (element) => {
//   console.log(element);
// });

// function printMe(item){
//   console.log(item);
// }

// coding.forEach(printMe); // we are just giving refrence of function, should not run directly

// coding.forEach( (item, index, arr)=> {
//   console.log(item, index, arr);
// } );


const myCoding = [
  {
    languageName : "javascript",
    languageFIleName: "js",
  },

  {
    languageName : "java",
    languageFIleName: "java",
  },

  {
    languageName : "Python",
    languageFIleName: "py",
  },
  
];


// just for item
myCoding.forEach( (item) => {
  console.log(item.languageName);
})

// => let's access all items and index and whole arrays
// myCoding.forEach( (item, index, arrayss) => {
//   console.log(item, index, arrayss);
// })


// or we can also write like this  

// making arrow function for callback use 
// const callBackFun = (item, index, arrayss) => {
//   console.log(item, index, arrayss);
// }

// // using arrow function 
// myCoding.forEach( callBackFun );