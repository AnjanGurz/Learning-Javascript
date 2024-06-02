const name = "Anjan" //string
const repoCount = 50

// console.log(name + repoCount + "value"); // old fashioned way

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to using  obj to create string var

const gameName = new String('hunter anjan');

// console.log(gameName[0]); // accesing key value pairs of obj
// console.log(gameName[0].toUpperCase()); // using protoype / function
// console.log(gameName.length);
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,1); // doesnot inclue last index that given in fun substring
// let's check
console.log(newString);


const anotherString = gameName.slice(-1,4);
/*
-> Anjan doubts cleared
In JavaScript, when the end index is before the start index, slice() returns an empty string. This is because the end index should come after the start index.

Therefore, the output of gameName.slice(-1, 4) would be an empty string "".

-> another ex: 

The negative index -6 specifies the starting position for the slice operation, but it does not include the character at that position itself.

In JavaScript, when using the slice() method with a negative index, the counting starts from the end of the string. So, -1 refers to the last character, -2 refers to the second-to-last character, and so on.

Therefore, when you use -6 as the starting index with str.slice(-6), it starts the slice operation from the sixth character from the end of the string, but it does not include that character itself. Instead, it includes all characters after that position until the end of the string.

*/




console.log(anotherString);

//trim function -> removes the extra space in a string

const ball =" white "
console.log(ball)
console.log(ball.trim());

// Anjan doubt's
/* 

in JavaScript, you can actually use dot notation to access properties and methods of string, number, and boolean variables, even though these are primitive types, not objects. JavaScript will automatically convert them to their corresponding wrapper objects (String, Number, Boolean) when necessary.

unlike with java(anjan's background stack)

*/


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-')) // changing specifc letters from one to another using replace function. like first argument you want to change from , and second to this.


console.log(url.includes('Priti')) // checking if the value is there or not

console.log(gameName.split('-'));

// The syntax for the split()
// string.split(separator, limit);

// you're splitting the gameName string wherever the - character occurs. Here's how it works:

const game_Name = "Super-Mario-World";
const parts = game_Name.split('-');
console.log(parts); // Outputs: ["Super", "Mario", "World"]
