// const coding = ["js" , "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values); //imp lesson here form above cdoe that for each doesnot return any value

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// The filter method calls the predicate function one time for each element in the array. Returns the elements of an array that meet the condition specified in a callback function. 
// holding the value retrived by filter in newNums variable

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     num > 4;
// }) // wrong approach, output: [] 

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// }) // Right approach, output : [ 5, 6, 7, 8, 9, 10 ]

// so if any thing start with scope in arrow function you have to use return keyword to return the value toher wise it will return the empty array or obj
// and if you not using the brackets or starting with scope you can write straight to the code it will return implicitly


// console.log(newNums);



// if using for each 
// both above method works for same requirement just uses the diff method to access the output
// but here using straight to the for each loop we have to use logic to check the condition by using if and store thr values in new array using push

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = []

myNums.forEach ( (num) => {
    if (num > 4){
        newNums.push(num)
    }
})




/* so,
Filter:
A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

Returns the elements of an array that meet the condition specified in a callback function.

*/



// ********* exeercise ************

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBooks = books.filter( (book) =>  book.genre === 'Non-Fiction' && book.publish <= 2000 && book.edition >= 2000) // fetching the data from array of obj at once with multiple filters using filter function

userBooks = books.filter( (book) =>  book.publish >= 2000) // fetching the data from array of obj with single publish filters using filter function

userBooks = books.filter( (book) =>  {return book.publish > 2000}) // fetching the data from array of obj with single publish filters using filter function with in a scope 


console.log(userBooks);




  //*************************MAp func*********************


const nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]



const newNumss =  nums.map( (num) => num + 10)

console.log(newNumss);

// using for each 

// const brandNewNum = []

// nums.forEach( (num) => {
//     num += 10;
//     brandNewNum.push(num);
// })

// console.log(brandNewNum);


/*

map: Used to transform each element of an array based on a callback function and return a new array of the same length.

filter: Used to create a new array containing only elements that satisfy a condition specified in a callback function.
    
*/

// chaining let's use the above codes

// normal map function use
const normalMap = nums.map( (num) => num * 10)
console.log(`after normal map fucntion used `);
console.log(normalMap);

// using chaining means applying function simaltanously one after another 
const chaining = nums.map( (num) => num * 10).filter( (Num) => Num >50);

console.log(`After  chaining map and filter`);
console.log(chaining);


// also we can chain within same methods like map to map or filter to filter

console.log(`After  Multiple chaining`);
const chainingMutipleTimes = nums.map( (num) => num * 10).map( (numm) => numm + 6 ).filter( (Num) => Num >35);

console.log(chainingMutipleTimes);