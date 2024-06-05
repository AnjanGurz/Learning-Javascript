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

// when value comes from the database it comes into the array of obj like below example
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

// ex output: [ [ 'id', '123xyz' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

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