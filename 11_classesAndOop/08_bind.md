# Bind in JavaScript

======================

## What is Bind?

Bind is a way to attach a function to an object, so that when you call the function, it uses the object's properties and methods.

## How bind Works:

    Creates a New Function: When you use bind, it creates a new function with a specific this value.
    Permanent Context: The new function always uses the context (this) provided during bind, no matter where it is called.


### Example

```javascript
const dog = {
  name: "Fido",
  bark: function () {
    console.log(`${this.name} says Woof!`);
  },
};

const cat = {
  name: "Whiskers",
};

// Create a new function with `this` bound to `cat`
const meow = dog.bark.bind(cat);
// so here the meow is now a fucntion binded with the this context of cat properties and it is fixed and permanent only works for cat obj

// but the bark function would be there same as it is original function 

meow(); // Output: Whiskers says Woof!
```

## Explanation:

- Original Function: dog.bark logs a message with the name property of the dog object.
- Binding: dog.bark.bind(cat) creates a new function where this is set to the cat object. Therefore, meow() logs "Whiskers says Woof!".

## Without an Object

If there's only a function, this would be undefined when called directly because it goes to the global obj searchin for this context.

```javascript
const bark = function () {
  console.log(`${this.name} says Woof!`);
};

bark(); // Output: undefined says Woof!
```

## How Bind Works

Bind connects a function to an object, so the function can work with the context (properties and methods) of that object.
Additional Details

- Permanent binding: Once bound(attaching), the function always uses the object's context.

Partial application: 
Bind can be used for partial application. Partial application is the process of creating a new function by fixing some arguments of an existing function, while leaving the remaining arguments to be provided later.

# Basic Example:

```javascript

function multiply(a, b) {
  return a * b;
}

// Create a new function with `a` fixed to 2
const double = multiply.bind(null, 2);

console.log(double(5)); // Output: 10

// Explanation: Here, double is a new function created with a fixed at 2. When calling double(5), it effectively becomes multiply(2, 5), resulting in 10.

```


- Chaining binds: You can chain multiple bind calls.

```javascript

function add(a, b, c) {
  return a + b + c;
}

const addFive = add.bind(null, 5); // Set `a` to 5
const addFiveAndTen = addFive.bind(null, 10); // Set `b` to 10

console.log(addFiveAndTen(15)); // Output: 30

// Explanation: Here, addFive is a function with a set to 5, and addFiveAndTen further sets b to 10. When calling addFiveAndTen(15), it computes 5 + 10 + 15, resulting in 30.


```


- Binding native functions: You can bind native functions like Array.prototype.slice.
- Performance: Excessive use of bind can impact performance.
