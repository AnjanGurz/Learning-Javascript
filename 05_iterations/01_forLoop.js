for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log(`5 is best number`);
    }
    console.log(element);
}



for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        console.log(`${i} * ${j} = ${i*j}` );   
    }
    console.log();
}


let myArray = ['flash', 'batman', 'superman']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// break and continue

for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        console.log(`number 5 detected`);
        // break; // takes the loop out of the whole loop stop running
        continue // skip the specific and continue after skipping it 
    }
    console.log(`Value of i is ${index}`);
}









