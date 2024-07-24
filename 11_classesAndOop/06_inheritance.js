/*

Understanding super and User/Teacher Classes

    super refers to the base class (User) and calls its constructor, passing arguments to reuse code.

    User class has a userName property.
    
    Teacher class extends User and adds email and password properties.
    
    When creating a Teacher instance, super calls the User constructor with the userName argument.
    
    The resulting Teacher instance has userName, email, and password properties.

Key Points

    super avoids code duplication by reusing the User constructor code.

    userName property uniquely identifies a user (e.g., "crunky").
    
    Teacher instance has a userName property, which represents the name of the user.


*/

// Example Code:

class User {

  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    console.log(`USERNAME is ${this.userName}`);
  }

}

class Teacher extends User {

  constructor(userName, email, password) {
    super(userName); // Calls User constructor
    this.email = email;
    this.password = password;
  }

}

const teacher = new Teacher("crunky", "crunky@gmail.com", "password123");
teacher.logMe()

// Resulting teacher Instance

/*
userName: "crunky";
email: "crunky@gmail.com";
password: "password123";
*/


/*
The super keyword is used to call the constructor of the base class (User) from the derived class (Teacher), to:

    Reuse code: Avoid duplicating code by calling the base class constructor to set up the userName property.
    Establish inheritance: Clearly indicate that Teacher inherits from User and builds upon its properties and behavior.

By using super, you ensure that:

    The userName property is set consistently across all instances of Teacher, using the same logic as the User class.
    Any additional properties or behavior defined in User are automatically inherited by Teacher.

*/