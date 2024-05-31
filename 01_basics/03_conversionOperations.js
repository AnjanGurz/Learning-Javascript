let score = "anjan"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


//Boolean CONVERSION
let isLoggedIn = "anjan"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "anjan" => true


//STRING CONVERSION
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

/* ### Notes:
- If the string cannot be parsed as a valid number, all of the above methods will return `NaN`.
*/

// *********************** Operations ***********************

let value = 3
let negValue = -value // assigned negvalues
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " anjan"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); => value 1
// console.log(+"");   => value 0

/*
  JavaScript Expression Evaluation:
  - Order of operations matters in JavaScript expressions.
  - String Concatenation: When using the + operator with strings, JavaScript performs string concatenation. The order of concatenation follows left-to-right evaluation.
  - Numeric Addition: When using the + operator with numeric values, JavaScript performs addition. The order of addition follows left-to-right evaluation.
  - Mixed Types: When mixing strings and numbers with the + operator, JavaScript converts the numbers to strings and performs string concatenation.
*/


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

/*

### Prefix Increment (++variable)

- **Syntax**: `++variable`
- **Operation**:
  1. The value of `variable` is incremented by 1.
  2. The incremented value is then used in the expression where `variable` appears.
- **Example**:
  ```javascript
  let x = 5;
  let y = ++x;
  console.log(x); // Output: 6
  console.log(y); // Output: 6


*/

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion