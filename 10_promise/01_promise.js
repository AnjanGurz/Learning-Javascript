// A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner and more robust way to handle asynchronous operations compared to traditional callback-based approaches.

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected")); // default it states that the program is ran either successfully or not

  
  const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
  })

 async function consumePromiseFive(){
    // to handle error we use try and catch in async await
    try {
        const response = await promiseFive // used await to handle the delay so the the promise five be able to run first and can be stored into response
        console.log(response);
    } catch (error) {
        console.log(error);
    }
 }

 consumePromiseFive();

 /* In JavaScript, async functions are used to handle asynchronous operations. 
 An async function always returns a promise, and inside an async function, 
 you can use the await keyword to wait for promises to resolve. */

//  async function getAllUsers(){
//   try {
//     const response = await fetch ('https://api.github.com/')
//     const data = await response.json() // note to convert the json it also takes time so we should use await
//     console.log(data);
//     // console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
//  }



//  getAllUsers();


fetch('https://official-joke-api.appspot.com/random_joke')
.then((response)=>{
  return response.json(); // this itself method is a promise 
  
})
.catch((error) => console.log('oops : ', error))



/* response.json(): Returns a promise because JSON parsing is an asynchronous operation.
Proper Handling: To get the actual data, you must return the promise from response.json() and handle it in the next .then() in the chain.
Chaining .then(): Ensures that you handle the resolved data properly and not the promise object itself. */




