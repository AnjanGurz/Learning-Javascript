// Creating Objects: Using constructors(singleton).

const tinderUser = new Object(); // single ton obj

// remeber we created obj using literals ex:
// const tinderUser = {}; // both are same just diff is this is non-single ton obj


// add some value in obj 
tinderUser.id = "123xyz";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;


// console.log(tinderUser);


// creating obj and adding nested obj in key 
const regularUser = {
    email : "techstaack@gmail.com",
    fullname : {
        userFullName : {
            firstName : "samir",
            lastName : "grg",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName.lastName);

// merge objects

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}


// merging objects
// const obj3 = {obj1, obj2}; // wrong way -> it will just sore 2 obj in one obj as nested  2 obj but we want ot merge the 2 obj in single obj so below we use spread operator same like in array

// spread operator
const obj3 = {...obj1, ...obj2};

// console.log(obj3);

// or we can use another way using Object.assign(arg1,arg2)
const obj4 = Object.assign({}, obj1,obj2); // here the {} target and the objects are source we want to merge into the target

// console.log(obj4);

// In case we are assuming in real website we encounter when value comes from the database it comes into the array of obj like below example
const users = [
    {
        id :1,
        email: "hun@gmail.com"
    },
    {
        id :3,
        email: "tun@gmail.com"
    },
    {
        id :15,
        email: "fun@gmail.com"
    }
];

// accessing the value of key of obj from array

// fetching the data/value of email from the array of first index obj of key email
users[1].email;

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // keys of the tinderuser obj -> it's data type is array
console.log(Object.values(tinderUser)); // values of the tinderuser obj
console.log(Object.entries(tinderUser)); //  takes keyvalue pairs into each array and the each array hold 2 index and the 1st index is key and second is value -of the tinderuser obj

// ex output of entries method: [ [ 'id', '123xyz' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

/*
-----IMPORTANT POINT-----
! Only When you use methods like Object.keys(), Object.values(), or Object.entries(), they return arrays that represent the properties of the object in various formats.

    Object.keys(obj) returns an array of the object's own enumerable property keys.
    Object.values(obj) returns an array of the object's own enumerable property values.
    Object.entries(obj) returns an array of the object's own enumerable property [key, value] pairs.

These methods provide array-like access to the properties of an object, allowing you to iterate over them or perform other array operations. However, the underlying data structure of the object itself is not an array. It's typically a hash table or dictionary optimized for quick property access based on keys

*/

/*some times we search the value of an obj by looping an array of obj and sometime there wont be the key value so we can check by
using hasownproperty checking if it has the name of vkey islooged obj */
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// **************** Object de-structure and JSON API  **************


// => !Object de-structure!

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// this is the most use way to acess the property of obj
// course.courseInstructor

// another way -> Object Destructuring 
/*

Object destructuring is a syntax in JavaScript that allows you to extract properties from objects and bind them to variables. This is particularly useful for working with objects in a more concise and readable way.

syntax:
variableType {keyName} = object(that is from key)

now you can access it by directly with the keyName as variable after 
const {courseInstructor} = course;

and now if you think the name of above code key courseInstructor is too long you can change the name directly through using : notation after keyName and you can use that name directly to access the key of a obj which is known as obj destructor

const {courseInstructor: instructor} = course;

---> Below is same but standard  explanation:

Renaming Variables with Object Destructuring

Sometimes, the property names in an object might be too long or not suitable for your use case. You can rename these variables during destructuring using the : notation.

Here's how you can rename courseInstructor to instructor:

*/

// Destructuring with renaming
const {courseInstructor: instructor} = course;

// console.log(courseInstructor); // output : hitesh
console.log(instructor); // output : hitesh



// => !JSON API! 

/* ----API----
 when you handle your workload to some one that is known as API (funny right but the analogy is right as descrices the concept of api).

 Just like you might hand over some of your work to a colleague who has the time and expertise to handle it, a program uses an API to delegate tasks to another software service. The API handles the request, does the heavy lifting, and then hands back the results, making the original program's job easier and more efficient.
*/ 

//---json---
// it is similar to an obj but donot contain a name like obj and most imp the both key value pairs are stored in ""(string) format.
// {
//     "name" : "hero",
//     "courseName" : "js in hindi",
//     "price" : "free"

// }


// some times we can get the jsonAPI in format of API
[
    {},
    {},
    {}
] 


/*

JSON (JavaScript Object Notation) Summary

    Purpose: JSON is a lightweight data interchange format that is easy to read, write, parse, and generate.
    Structure: JSON is structured using key-value pairs, similar to JavaScript objects.

Key Characteristics

    String Format: Both keys and string values must be enclosed in double quotes "".
    Data Types: JSON supports strings, numbers, objects, arrays, booleans, and null.
    No Functions: JSON cannot contain functions or undefined values.

Example
JavaScript Object

javascript

const jsObject = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  courses: ["Math", "Science", "History"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};

JSON

json

{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science", "History"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zip": "12345"
  }
}

Working with JSON in JavaScript

    Parsing JSON: Converting a JSON string to a JavaScript object.

    javascript

const jsonString = '{"name": "John Doe", "age": 30, "isStudent": false}';
const jsObject = JSON.parse(jsonString);
console.log(jsObject.name); // Output: John Doe

Stringifying JavaScript Object: Converting a JavaScript object to a JSON string.

javascript

    const jsObject = {
      name: "John Doe",
      age: 30,
      isStudent: false
    };
    const jsonString = JSON.stringify(jsObject);
    console.log(jsonString); // Output: '{"name":"John Doe","age":30,"isStudent":false}'

Summary

    Readable: JSON is human-readable and easy to write.
    Language-Agnostic: JSON is language-independent but uses conventions familiar to programmers of the C family of languages.
    Widely Used: JSON is commonly used for data interchange in web applications, configuration files, and data storage.

*/










