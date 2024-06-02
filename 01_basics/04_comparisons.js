
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);

// Explanation: "2" is a string, and 1 is a number. When comparing a string to a number, JavaScript converts the string to a number. In this case, "2" is converted to the number 2. Since 2 is greater than 1, the result is true.

/*
In JavaScript, when comparing a string to a number or a number to a string using comparison operators like greater than (>), less than (<), greater than or equal to (>=), or less than or equal to (<=), JavaScript will perform type coercion to convert one of the operands to match the type of the other operand for the comparison.

*/

// console.log("02" > 1);
// Explanation: Similar to the previous expression, "02" is a string that gets converted to the number 2. Since 2 is greater than 1, the result is true.

console.log(null > 0);
// Explanation: In JavaScript, null is treated as 0 in numeric contexts. Since 0 is not greater than 0, the result is false.

console.log(null == 0);
// Explanation: When using the equality operator (==), null is only equal to null or undefined. It is not equal to 0. Therefore, the result is false.

console.log(null >= 0);
// Explanation: Similar to the previous expression, null is treated as 0. Since 0 is equal to 0, the result is true.

console.log(undefined == 0);
// Explanation: When using the equality operator (==), undefined is only equal to null or undefined. It is not equal to 0. Therefore, the result is false.

console.log(undefined > 0);
// Explanation: In JavaScript, undefined is converted to NaN (Not-a-Number) in numeric contexts. Since NaN is not greater than 0, the result is false.

console.log(undefined < 0);
// Explanation: Similar to the previous expression, undefined is converted to NaN. Since NaN is not less than 0, the result is false.


// === 

console.log("2" === 2); // checks is it both are same datatype first and then value and returns statementn which is false in this case

//== -> converts explictly(auto) between comparison  

/*
  Equality Operators in JavaScript:

  - == (Equality Operator):
    - Checks if operands are equal after type coercion, meaning JavaScript tries to convert operands to a common type before comparison. Use with caution as it may lead to unexpected results.
    - Example: 5 == "5" returns true because 5 is converted to a string.

  - === (Strict Equality Operator):
    - Checks if operands are strictly equal without any type coercion. It returns true only if both value and type are the same.
    - Example: 5 === "5" returns false because the types are different.

  - Recommendation:
    - Use === (strict equality) most of the time to avoid unexpected behavior due to type coercion.
    - Use == (equality) sparingly and only when you explicitly want type coercion.
*/