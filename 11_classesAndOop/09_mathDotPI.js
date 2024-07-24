// Immutability of Built-in Objects
// Built-in objects, like Math, are immutable. Their properties cannot be changed.


// Trying to change a built-in object's property
Math.PI = 5;
console.log(Math.PI); // Still logs 3.14159...

// Object Property Descriptors
// Property descriptors contain information about an object's properties.


const momo = {
    Type: 'Chicken',
    price: 120,
    isAvailable: true,
    orderMomo: function() {
        console.log(`ughh.. momo banena`);
    }
};

const descriptor = Object.getOwnPropertyDescriptor(momo, 'price');
console.log(descriptor);
// Output: { value: 120, writable: true, enumerable: true, configurable: true }


// Modifying Property Descriptors
// You can modify property descriptors using Object.defineProperty().

Object.defineProperty(momo, 'price', { writable: false });
momo.price = 150; // Error: Cannot assign to read-only property 'price'

// Property Attributes
// Property attributes control how properties behave.

//     writable: Can the property be changed?
//     enumerable: Is the property included in iteration?
//     configurable: Can the property be deleted or modified?


Object.defineProperty(momo, 'Type', {
    value: 'Chicken',
    writable: false, // Make property read-only
    enumerable: true, // Exclude from iteration
    configurable: false // Prevent deletion or modification
});

// Iterating over Object Key-Value Pairs
// Use Object.entries() and for...of loops to iterate over an object's properties.


for (const [key, value] of Object.entries(momo)) {
    console.log(`${key}: ${value}`);
}
// Output: 'Type: Chicken', 'price: 120', 'isAvailable: true', 'orderMomo: function() {...}'

// Type Checking
// Use typeof to check the type of a value.
console.log();
console.log('type check..........');

for (const [key, value] of Object.entries(momo)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}
// Output: 'Type: Chicken', 'price: 120', 'isAvailable: true'


/*

summary of what we learned today:

    Immutability of Built-in Objects: Built-in objects, like Math, are immutable, meaning their properties cannot be changed.
    Object Property Descriptors: Property descriptors contain information about an object's properties, such as writable, enumerable, and configurable.
    Modifying Property Descriptors: We can modify property descriptors using Object.defineProperty().
    Property Attributes: We learned about property attributes:
        writable: Can the property be changed?
        enumerable: Is the property included in iteration?
        configurable: Can the property be deleted or modified?
    Iterating over Object Key-Value Pairs: We used Object.entries() and for...of loops to iterate over an object's properties.
    Type Checking: We used typeof to check the type of a value.
    Enumerable Property: We learned that a property must be enumerable: true to be included in iterations.


*/