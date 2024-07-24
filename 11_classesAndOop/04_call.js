function setUserName(username){
    // complex DB calls
    this.username = username
    console.log('called');
}

function createUser(username, email, password){
    setUserName.call(this, username) // call methods pass the this current context execution pass to another context of method
    this.email = email
    this.password = password
}


const chai = new createUser('Anjan', 'dev@gmail.com', '467');


console.log(chai);


/*


Using call:

When you use call to invoke a method, you're passing the current this context to another method, allowing it to execute in a different context.

    The original method's this context is like the current room you're in.
    When you use call, you're essentially saying, "Hey, go execute this method in that other room (this context) over there!"

Not using call
If you don't use call, the method will execute in the global context (like the hallway outside the rooms).

    The method will not have access to the properties and values of the original object.
    The this context will refer to the global object (like the hallway).

Call Stack Life
When you invoke a method, it's added to the call stack. The call stack is like a stack of plates:

    Each plate represents a method invocation.
    The top plate is the current method being executed.
    When a method finishes executing, its plate is removed from the stack.

Here's what happens when you use call:

    method1 is invoked and added to the call stack.
    method1 uses call to invoke method2 with a specific this context.
    method2 is added to the call stack, with the passed this context.
    method2 executes and finishes.
    method2's plate is removed from the call stack.
    method1 continues executing and finishes.
    method1's plate is removed from the call stack.

If you don't use call, the this context will not be passed, and the method will execute in the global context. The call stack life remains the same, but the method will not have access to the original object's properties and values.



*/

/*

summary of how this works in JavaScript:
Regular functions

    Look for this in the current context (scope)
    If not found, default to the global context (window or global object)

Arrow functions

    Only look for this within the scope they're defined in (lexical scope)
    Do not have their own this context, so they can't be used with call or apply

Using call

    Allows you to pass a custom context (object or method) to a function
    The function will use the passed context as its this value
    Enables you to control the value of this within a function, even if it's not the default global context

*/