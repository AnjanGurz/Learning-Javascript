Inheritance with super
======================

Parent Class: User
-------------------
```javascript
class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
}
```

Child Class: Teacher (extends User)
-----------------------------------
```javascript
class Teacher extends User {
  constructor(userName, email, password, subject) {
    super(userName, email, password); // Calls User constructor
    this.subject = subject; // Additional property in Teacher
  }
}
```

Creating Teacher instances
-------------------------
```javascript
const teacher1 = new Teacher('John Doe', 'johndoe@example.com', 'password123', 'Math');
const teacher2 = new Teacher('Jane Smith', 'janesmith@example.com', 'password456', 'Science');
const teacher3 = new Teacher('Bob Johnson', 'bobjohnson@example.com', 'password789', 'English');
```
Output
------
```javascript
console.log(teacher1.userName); // John Doe
console.log(teacher1.email); // johndoe@example.com
console.log(teacher1.password); // password123
console.log(teacher1.subject); // Math

console.log(teacher2.userName); // Jane Smith
console.log(teacher2.email); // janesmith@example.com
console.log(teacher2.password); // password456
console.log(teacher2.subject); // Science

console.log(teacher3.userName); // Bob Johnson
console.log(teacher3.email); // bobjohnson@example.com
console.log(teacher3.password); // password789
console.log(teacher3.subject); // English
```

Key points
-----------

* Teacher extends User using the extends keyword
* Teacher constructor calls User constructor using super
* Teacher instance inherits properties from User (userName, email, password)
* Teacher has an additional property subject that's specific to the Teacher class
* We can create multiple instances of Teacher with different values for the properties

By using inheritance, we can reuse the properties and behavior of the User class in the Teacher class, while also adding new properties and behavior specific to Teacher. This helps to promote code reuse and organization!


Another Point
--------------

Using super in Inheritance Chaining

* super keyword is used to access parent class's constructor, methods, and properties
* In inheritance chaining, super refers to the immediate parent class
* Each derived class can access its parent class's members using super
* The last derived class can access all parent classes' members through super

Example:
-------

Grandparent -> Parent -> Child

* Child can access Parent's members using super
* Child can also access Grandparent's members through Parent's super

This allows the last derived class (Child) to inherit and access all the members (properties and methods) of its parent classes (Parent and Grandparent).
