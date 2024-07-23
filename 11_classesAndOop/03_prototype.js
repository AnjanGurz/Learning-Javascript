// let myName = 'anjan     '
// let Name = 'Crunk     '

// myName.prototype.truelength = function () {
//     return this.trim().length;
// }

// console.log(myName.truelength);


let myHeros = ['thor', 'batman']

let heroPower = {
    thor: 'hammer',
    batman: 'IQ',

    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
    }
}

Object.prototype.anjan = function () {
    console.log(`Anjan is present in all obj..`);
}


heroPower.anjan();
myHeros.anjan();

/*

Adding a Method to Object.prototype:

    Object.prototype.anjan adds a new method anjan to the Object.prototype. This means that all objects in JavaScript (including arrays and other objects) inherit this method.

Calling anjan on heroPower and myHeros:

    Since Object.prototype.anjan is available to all objects, both the heroPower object and the myHeros array can use the anjan method.


*/


Array.prototype.heyAnjan = function(){
    console.log('Anjan says hello to you...');
}

myHeros.heyAnjan();
// Attempting to call the method on a non-array object
// heroPower.heyAnjan();// TypeError : because we just gave the power of heyAnjan method to the arrays only not the whole obj remeber the diagram (function,array,string)-> obj -> null => here we just gave power to the array not the whoole obj if we did to the whole obj all had acess to the method but it just gave indiviadual power of type array


// detail Explain
/*

The Array.prototype.heyAnjan method you defined is available only to array instances, not to other types of objects. Here's a breakdown of why this happens and how the prototype chain works in this context:
Prototype Chain and Array.prototype

    Prototype Chain Hierarchy:
        JavaScript has a prototype chain where objects inherit properties and methods from their prototypes. For instance:
            Object is the base prototype object for all JavaScript objects.
            Arrays (Array) inherit from Object, and they have their own prototype (Array.prototype).
            When you create an array, it inherits methods and properties from Array.prototype, which in turn inherits from Object.prototype.

    Adding Methods to Array.prototype:

        When you add a method to Array.prototype, it only affects instances of Array. For example, Array.prototype.heyAnjan adds the heyAnjan method to arrays:

        javascript

Array.prototype.heyAnjan = function() {
    console.log('Anjan says hello to you...');
}

This method will be available to all arrays but not to other types of objects, such as plain objects or strings.

*/



// Inheritance 

const user = {
    name : 'chai',
    email : 'hund@gmail.com'
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime: true,
    __proto__ : teachingSupport // here tasupport inherits the properties of teachingSupport with the help of key __proto__
}

console.log('checkin inheritance application result ');
console.log(TASupport.isAvailable);


// anothjer way to inherit 

teacher.__proto__ = user // teacher obj inherits the User obj -> prototypal inheritance

// modern syntax with same wortk like above

Object.setPrototypeOf(teacher, user)

console.log();
console.log('Adding methods to prototypes to the strings obj');

/*

Adding methods to prototypes

    You can add methods to the prototype of a specific type of object,
    like Array.prototype or String.prototype.

    These methods will be available to all instances of that type,
    but not to other types of objects

*/


let myName = 'anjan     '

String.prototype.truelength = function () {
    console.log(`${this}`);  // the who is calling is the this
    console.log(`True length is ${this.trim().length}.`);
}

myName.truelength();
"hero".truelength();



/*

summary:


Prototypes

    Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from.
    The prototype chain is like a family tree, where objects inherit from their parents (prototypes).

Adding methods to prototypes

    You can add methods to the prototype of a specific type of object, like Array.prototype or String.prototype.
    These methods will be available to all instances of that type, but not to other types of objects.

Inheritance

    You can make one object inherit from another using the __proto__ property or Object.setPrototypeOf().
    This allows you to create a new object that has all the properties and methods of the original object.

Examples

    You added a truelength method to String.prototype, which allows you to call myName.truelength() on any string.
    You added a heyAnjan method to Array.prototype, which allows you to call myHeros.heyAnjan() on any array.
    You created a TASupport object that inherits from teachingSupport using __proto__.
    You made the teacher object inherit from the user object using __proto__ and Object.setPrototypeOf().

Key points

    Prototypes are like templates for creating objects.
    Inheritance allows objects to inherit properties and methods from other objects.
    You can add methods to specific prototypes to make them available to certain types of objects.



*/