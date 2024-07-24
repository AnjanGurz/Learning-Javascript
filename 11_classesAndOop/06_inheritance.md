Inheritance with super
======================

Parent Class: User
-------------------

class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
}

Child Class: Teacher (extends User)
-----------------------------------

class Teacher extends User {
  constructor(userName, email, password, subject) {
    super(userName, email, password); // Calls User constructor
    this.subject = subject; // Additional property in Teacher
  }
}

Creating Teacher instances
-------------------------

const teacher1 = new Teacher('John Doe', 'johndoe@example.com', 'password123', 'Math');
const teacher2 = new Teacher('Jane Smith', 'janesmith@example.com', 'password456', 'Science');
const teacher3 = new Teacher('Bob Johnson', 'bobjohnson@example.com', 'password789', 'English');

Output
------

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

Key points
-----------

* Teacher extends User using the extends keyword
* Teacher constructor calls User constructor using super
* Teacher instance inherits properties from User (userName, email, password)
* Teacher has an additional property subject that's specific to the Teacher class
* We can create multiple instances of Teacher with different values for the properties

By using inheritance, we can reuse the properties and behavior of the User class in the Teacher class, while also adding new properties and behavior specific to Teacher. This helps to promote code reuse and organization!