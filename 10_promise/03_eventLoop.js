/*

JavaScript Event Loop and Task Prioritization

1. JavaScript Event Loop Overview:

    Microtasks Queue: Handles promises and async/await operations. Processes tasks immediately after the currently executing script and before any macrotasks.
    Macrotasks Queue: Handles other asynchronous tasks like setTimeout, setInterval, and I/O operations. Processes tasks after all microtasks have been handled.

2. Promise Handling:

    Promise Resolution: When a promise is resolved or rejected, its .then(), .catch(), or .finally() callbacks are added to the microtasks queue.
    Microtask Priority: Microtasks (e.g., promise callbacks) are processed before the event loop continues to the next macrotask.

3. async/await:

    Syntactic Sugar: async/await is built on top of promises. An async function returns a promise, and await pauses the function execution until the promise resolves.
    Microtasks: When await is used, the function execution is paused, and the promise resolution is awaited. The continuation of the async function is added to the microtasks queue.

4. Callbacks:

    Traditional Callbacks: Used with setTimeout, setInterval, and event handlers. Processed as macrotasks.
    Macrotask Handling: Callbacks are handled after all microtasks have been processed.
*/


// 5. Execution Order Example:

console.log('Start'); // 1. This logs 'Start' to the console. Synchronous code runs first.

// Schedule a macrotask (timer) to execute after 0 milliseconds
setTimeout(() => {
  console.log('Timeout callback'); // 5. This will log 'Timeout callback' to the console. It is processed after all microtasks are complete.
}, 0);

// Schedule a microtask (promise resolution) to execute after the current script
Promise.resolve()
  .then(() => console.log('Promise resolved')); // 4. This logs 'Promise resolved' to the console. It is processed after the current synchronous code but before macrotasks.

async function fetchData() {
  console.log('Inside async function'); // 2. This logs 'Inside async function' when the async function is called.

  // Simulate an asynchronous delay with a promise
  await new Promise(resolve => setTimeout(resolve, 0)); // 3. This waits for the promise to resolve, simulating an async operation. The execution of this async function is paused here.

  console.log('After await'); // 6. This logs 'After await' to the console. It is executed after the awaited promise is resolved and before macrotasks.
}

fetchData(); // Call the async function. This will log 'Inside async function' and wait for the promise to resolve.

console.log('End'); // 7. This logs 'End' to the console. It runs after the synchronous code but before the microtasks and macrotasks are processed.




/*
Expected Output:

javascript

Start
Inside async function
End
Promise resolved
After await
Timeout callback

Explanation:

    Synchronous Code: Runs first.
    Microtasks: Promise resolution and async/await continuation are processed next.
    Macrotasks: setTimeout callbacks are handled last.


*/


