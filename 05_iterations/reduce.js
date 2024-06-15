const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currval: ${currVal}`);
//     return acc + currVal
// }, 0 )

// starting accumulator value  is collecting value which is state in last

// lets use arrow func
const myTotal = myNums.reduce( (acc, currValue) => acc + currValue, 0 )

console.log(myTotal);



/*

Detailed Step-by-Step Breakdown:
Initial Setup:

    The array is [1, 2, 3, 4, 5].
    The reduce method starts with an initial value of 0.

First Iteration:

    Accumulator: 0 (initial value)
    Current Value: 1 (first element of the array)
    New Accumulator: 0 + 1 = 1

The reduce method calls sumReducer(0, 1), and 1 becomes the new accumulator value.
Second Iteration:

    Accumulator: 1 (result from the first iteration)
    Current Value: 2 (second element of the array)
    New Accumulator: 1 + 2 = 3

The reduce method calls sumReducer(1, 2), and 3 becomes the new accumulator value.
Third Iteration:

    Accumulator: 3 (result from the second iteration)
    Current Value: 3 (third element of the array)
    New Accumulator: 3 + 3 = 6

The reduce method calls sumReducer(3, 3), and 6 becomes the new accumulator value.
Fourth Iteration:

    Accumulator: 6 (result from the third iteration)
    Current Value: 4 (fourth element of the array)
    New Accumulator: 6 + 4 = 10

The reduce method calls sumReducer(6, 4), and 10 becomes the new accumulator value.
Fifth Iteration:

    Accumulator: 10 (result from the fourth iteration)
    Current Value: 5 (fifth element of the array)
    New Accumulator: 10 + 5 = 15

The reduce method calls sumReducer(10, 5), and 15 becomes the new accumulator value.
Final Result:

    After all iterations are complete, the final value of the accumulator is 15.
    The reduce method returns this final value.

Key Points to Remember:

    Accumulator: The accumulator is like a running total that collects and combines the results from each iteration.
    Current Value: The current value is the current element of the array being processed.
    Reducer Function: The reducer function defines how the accumulator should be updated with the current value.
    Initial Value: The initial value sets the starting point for the accumulator. If no initial value is provided, the first element of the array is used as the initial accumulator value.


*/


// this is used in shopping cart to collect the total price in real world

const shoppingCart = [
    {
        itemName : 'py course',
        price : 12
    },

    {
        itemName : 'mern course',
        price : 125
    },

    {
        itemName : 'Java Dsa course',
        price : 160
    },

    {
        itemName : 'reactNative course',
        price : 399
    },

    {
        itemName : 'dataScience course',
        price : 60
    },

    {
        itemName : 'js dsa course',
        price : 140
    },

]


const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(` total price of course $ ${totalPrice}`);