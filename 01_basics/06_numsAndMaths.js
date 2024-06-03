const score = 1500;
console.log(score); // Output: 1500

const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// Converting the balance to a string and using the length property to determine its length
console.log(balance.toString().length); // Output: 3
console.log(typeof balance); // Output: object (since it's created using the Number constructor)

// Converting score to a string
console.log(score.toString()); // Output: "1500" - Converts the number to a string(so here will be string)
console.log(score); // Output: 1500
console.log(typeof score); // Output: number (we changed into the string but showing num cuz its original value is as number cuz it passes the value of a copy itself and it is primitive datatype so it is only changed in that piece of line of a code which means uses the stack to store its data which just send the copy of its original value)




//now making the value to the fixed 
// The toFixed method is used to round off a number to the specified number of decimal places.
// It returns the number as a string, rounded to the given number of decimal places.
console.log(balance.toFixed(2));


const otherNumber = 1123.8966;

/*  ****** toPrecision function/method ******
It returns a string representation of a number with a specified precision, 
meaning it allows you to control the total number of significant digits, 
including digits before and after the decimal point.

*/
console.log(otherNumber.toPrecision(4)); // Output: "1124"

const hundreds = 1000000; // one million
console.log(hundreds.toLocaleString()); // using tolocalstring func to display the data (100000) in easy readable format by using comma.



// ******** Maths *******

console.log(Math);

// Math.abs(x): Gives you the positive value of a number. For example, Math.abs(-5) would return 5.
console.log(Math.abs(-4)); // output: 4

// Math.round(x): Rounds a number to the nearest whole number. For example, Math.round(3.5) would return 4.
console.log(Math.round(4.7)); // output: 5 it's been rounded and the func does that

// Math.ceil(x): Rounds a number up to the nearest whole number. So, Math.ceil(3.14) would return 4.
console.log(Math.ceil(4.2)); // output: 5 ceil means up value

//Math.floor(x): Rounds a number down to the nearest whole number. For instance, Math.floor(3.14) would return 3.
console.log(Math.floor(4.2)); // output: 4 floor means down value as it is decimal donot affect change of value and ignore the decimal and gives as it is value before decimal

// Math.max(x1, x2, ..., xn): Returns the largest number among the given values.
// For example, Math.max(10, 20, 30) would return 30.
console.log(Math.max(10, 20, 30)); // Output: 30

// Math.min(x1, x2, ..., xn): Returns the smallest number among the given values.
// For instance, Math.min(10, 20, 30) would return 10.
console.log(Math.min(10, 20, 30)); // Output: 10

// Math.sqrt(x): Calculates the square root of a number.
// For example, Math.sqrt(16) would return 4.
console.log(Math.sqrt(16)); // Output: 4

// Math.pow(x, y): Raises x to the power of y.
// For example, Math.pow(2, 3) would return 8.
console.log(Math.pow(2, 3)); // Output: 8

// Math.random(): Generates a random number between 0 (inclusive) and 1 (exclusive).
// It can be used to introduce randomness in your code.
console.log(Math.random()); // Output: A random number between 0 and 1 (e.g., 0.6524267835829017) every time it runs it gives the random value don't be confuse

console.log((Math.random()*10) + 1); // we used to * 10 to scale the random num to get high value insteasd of btwn 0-1 and +1 used to avoid the possiblity of not getting scale beacuse some times random can genratre 0.05 like this value so it will make sure we will get random value smoothly. NOTE:using PEMDAS or BODMAS rule while using math operation

// here we an use math.floor to get the single value
console.log(Math.floor(Math.random()*10) + 1);


const min = 10; // minimum value we need
const max = 30; // max value we need


/*

here we used:
math.random to get random value btwn 0-1

where max - min is done here to get the range value we need between of max and min.
and added + 1 to get the value more then 1 to avoid the getting value less than 1

multiply the value we get from random to the result from (max - min + 1) and added to the mim value cuz we need minimum value not less then it.

the  we used the floor function to get the single value

*/
console.log(Math.floor(Math.random() * (max - min + 1) + min));




