# JavaScript Prototypes and Inheritance

## 4 Main Points

1. **Prototypes**: Every object has a prototype (like a parent) that it inherits properties and methods from.
2. **Adding methods**: You can add methods to specific prototypes (like `Array` or `String`) to make them available to all instances of that type.
3. **Inheritance**: Objects can inherit properties and methods from other objects using `__proto__` or `Object.setPrototypeOf()`.
4. **Constructor Functions**: Using `new` keyword with constructor functions also utilizes prototypes to set methods and make them available to all instances.

## Examples

* Added `truelength` method to `String.prototype`
* Added `heyAnjan` method to `Array.prototype`
* Made `TASupport` inherit from `teachingSupport`
* Made `teacher` inherit from `user`
* Created a constructor function `Person` with a method `sayName` and instances `john` and `jane` inherit that method using `new` keyword.

## Remember

* Prototypes are like templates
* Inheritance helps objects share properties and methods
* You can add methods to specific prototypes for reuse
* Constructor functions use prototypes to set methods for instances created with `new`

## Example Code

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
}

let john = new Person('John');
let jane = new Person('Jane');

john.sayName(); // Output: John
jane.sayName(); // Output: Jane