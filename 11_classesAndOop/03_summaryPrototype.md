# JavaScript Prototypes and Inheritance

## 4 Main Points

1. **Prototypes**: Every object has a prototype (like a parent) that it inherits properties and methods from.
2. **Adding methods**: You can add methods to specific prototypes (like `Array` or `String`) to make them available to all instances of that type.
3. **Inheritance**: Objects can inherit properties and methods from other objects using `__proto__` or `Object.setPrototypeOf()`.
4. **Constructor Functions**: Using `new` keyword with constructor functions also utilizes prototypes to set methods and make them available to all instances.

## Examples

### Adding methods to prototypes

```javascript
// Add truelength method to String.prototype
String.prototype.truelength = function() {
  return this.trim().length;
}

// Add heyAnjan method to Array.prototype
Array.prototype.heyAnjan = function() {
  console.log('Anjan says hello to you...');
}

## Inheritance using __proto__

// Make TASupport inherit from teachingSupport
const teachingSupport = {
  isAvailable: false
}
const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: teachingSupport
}

// Make teacher inherit from user
const user = {
  name: 'chai',
  email: 'hund@gmail.com'
}
const teacher = {
  makeVideo: true,
  __proto__: user
}


## Constructor function with inheritance

// Created a constructor function Person with a method sayName
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
}

// Instances john and jane inherit the sayName method using new keyword
let john = new Person('John');
let jane = new Person('Jane');

john.sayName(); // Output: John
jane.sayName(); // Output: Jane


## Points to remember

    Prototypes are like templates
    Inheritance helps objects share properties and methods
    You can add methods to specific prototypes for reuse
    Constructor functions use prototypes to set methods for instances created with new
