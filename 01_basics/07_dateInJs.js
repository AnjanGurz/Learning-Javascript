// dates

let myDate = new Date();
console.log(myDate); // output: 2024-06-03T22:51:18.889Z which is not readble so in below line of code:

// using to string builtin func to make it more read able let's do it

console.log(myDate.toString()); // output: Mon Jun 03 2024 22:54:45 GMT+0000 (Coordinated Universal Time)


function date(){
    return console.log(myDate.toString()); // output: Mon Jun 03 2024 22:54:45 GMT+0000 (Coordinated Universal Time)
}

date();


// exploring more methods of date

console.log("\nexploring more methods of date\n");

console.log("\ntoDateString");
console.log(myDate.toDateString()); // output:

console.log("\ntoISOString");
console.log(myDate.toISOString()); // output:

console.log("\ntoLocaleDateString");
console.log(myDate.toLocaleDateString()); // output:

console.log("\ntoJSON");
console.log(myDate.toJSON()); // output:

console.log("\ntoLocaleString");
console.log(myDate.toLocaleString()); // output:

console.log("\ntoTimeString");
console.log(myDate.toTimeString()); // output:

console.log("\ntoUTCString");
console.log(myDate.toUTCString()); // output:

console.log("\ngetTimezoneOffset");
console.log(myDate.getTimezoneOffset()); // output:

// creating our own date
// var myCreatedDate = new Date(2023, 0, 23); // year,month,day In js months start from 0 
// console.log(myCreatedDate.toDateString());

// var myCreatedDate = new Date(2023, 0, 23); // year,month,day,time,min In js months start from 0 
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") // in format(dd-mm-yyyy)
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); converting milisec into sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // the month is started from 0 so we are adding + 1 to get the right month
console.log(newDate.getDay()); // In JavaScript's Date object, the getDay() method returns the day of the week as an integer, with Sunday being 0 and Saturday being 6. So, Monday is represented by 1.

// `${newDate.getDay()} and the time ` string interpolation means concatenation btwn string and variable

/*

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // Month (0-11)
console.log(newDate.getDate()); // Day of the month (1-31)
console.log(newDate.getDay()); // Day of the week (0-6)

*/


console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))