
// // const clock = document.querySelector('#clock');

// // const clock = document.getElementById('clock');



// setInterval(()=>{
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.toLocaleTimeString()
// }, 1000)


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString('en-US', { hour12: true });
}, 1000);

/*

Explanation:

    toLocaleTimeString(): This method converts a Date object to a string representing the time portion of the date according to the current locale settings.

    Locale: By specifying 'en-US', you ensure that the time format follows the conventions used in the United States, which includes 12-hour format with AM/PM markers.
    
    hour12: true: This option explicitly tells toLocaleTimeString() to format the time in 12-hour format, where true means to use AM/PM markers.


*/
