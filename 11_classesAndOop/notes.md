# JavaScript and Classes

## What is OOP (Object-Oriented Programming)?

Object-Oriented Programming (OOP) is a programming paradigm that organizes data and behavior into objects. It allows you to model real-world entities and relationships in your code.

## What is an Object?

An object in JavaScript is a collection of properties and methods.

- **Properties**: 

- These are variables associated with an object. 
For example, `name` and `age` could be properties of a `person` object.

- **Methods**: These are functions associated with an object. For example, `toLowerCase` is a method that converts a string to lowercase.

Example:
```javascript
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello!");
  }
};


Why Use OOP?

OOP helps in organizing and managing code in a more modular and reusable way. It provides a way to structure your code so that you can easily create, manage, and extend objects.
Parts of OOP in JavaScript

    Object Literal: A simple way to create objects using {} syntax.

    Example:

    javascript

let car = {
  brand: "Toyota",
  model: "Camry",
  drive: function() {
    console.log("Driving");
  }
};

Constructor Function: A function used to create objects with a specific structure.

Example:

javascript

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Prototypes: JavaScript objects have a prototype object, which they inherit methods and properties from. You can add methods to the prototype of a constructor function.

Example:

javascript

Car.prototype.drive = function() {
  console.log("Driving");
};

Classes: A more modern and syntactical sugar for creating objects, introduced in ES6. It simplifies the creation of constructor functions and prototypes.

Example:

javascript

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  drive() {
    console.log("Driving");
  }
}

Instances: Objects created using the new keyword with a constructor function or class.

Example:

javascript

    let myCar = new Car("Toyota", "Camry");
    myCar.drive(); // Output: Driving

The 4 Pillars of OOP

    Abstraction: Hides complex implementation details and shows only the necessary features of an object. It helps in managing complexity by focusing on high-level operations.

    Example: A car’s dashboard provides controls and displays without needing to understand the internal engine workings.

    Encapsulation: Bundles data (properties) and methods that operate on the data into a single unit or class. It restricts direct access to some of an object’s components, which can protect the internal state.

    Example: A class Person might hide sensitive information (like social security numbers) and provide public methods to interact with this information.

    Inheritance: Allows one class to inherit properties and methods from another class. This promotes code reuse and establishes a natural hierarchy.

    Example: A class ElectricCar might inherit from a Car class, gaining its properties and methods while adding new features specific to electric vehicles.

    Polymorphism: Allows objects to be treated as instances of their parent class rather than their actual class. It enables a single function or method to operate in different ways based on the object it is applied to.

    Example: A method startEngine might behave differently for a Car and a Motorcycle, even though both classes use the same method name.