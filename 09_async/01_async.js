/*

--> Javascript
        -synchronous
        -single-threaded(runs in singlethread)

   -> Explaination: 
    javaScript is a single-threaded, synchronous language by default, 
    meaning it executes one command at a time in the order they are written. 
    However, it can handle asynchronous operations through mechanisms 
    like callbacks, promises, and async/await.

    -> Executes code line by line, waiting for each operation to complete before
    moving to the next.
         -> Analogy: Like a line at a store, where each person waits their turn and
            is served one by one.

     ->Example:
        console.log('Task 1');
        console.log('Task 2');
        console.log('Task 3');

        ->output:
            Task 1
            Task 2
            Task 3

    -> Execution context of sync
        -> execute one line of code at a time

        ^
        |-console log -> 1
        |-console log -> 2
        |
        |

        => each operation waits for the last one to complete before executing

        => call Stack, => Memory Heap




--> Blocking code vs Non blocking code

    --Blocking Code:

        Blocking code stops the program from doing anything else until the current
        task is finished. Imagine waiting in line at a coffee shop where each person 
        must order and wait for their drink before the next person can order.

            Example: When you run a function that takes a long time to complete 
            (like a big calculation or reading a large file), everything else in 
            your program stops until that function finishes.

            --code exp:
                // Blocking function example:
                    function processData(data) {
                        // Simulate a long calculation
                        for (let i = 0; i < 1000000000; i++) {
                            // CPU-intensive work
                        }
                        return data.toUpperCase();
                    }

                    // This line will wait until processData completes
                    let result = processData('hello');
                    console.log(result); // Outputs: "HELLO"
        
    
    --Non-Blocking Code:

        Non-blocking code allows the program to keep going while waiting for a task to finish. It's like ordering a coffee and being told to come back later to pick it up, so you can do other things while your coffee is being made.

            Example: When you make an asynchronous call (like fetching data from a server or reading a file), your program can continue to do other things instead of waiting.

            --code exp:
                // Non-blocking example with callback
                    function fetchData(callback) {
                        setTimeout(() => {
                            callback('world');
                        }, 1000); // Simulate a delay of 1 second
                    }

                    // Call fetchData with a callback function and created arrow function as call back argument
                    fetchData((data) => {
                        console.log('Hello, ' + data); // Outputs: "Hello, world"
                    });

                    console.log('This message is not blocked.');



*/