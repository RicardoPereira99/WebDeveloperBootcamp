// Problem 1
console.log("Print all numbers between -10 and 19");
for (let index = -10; index < 20; index++) {
    console.log(index);
}


// Problem 2
console.log("Print all even numbers between 10 and 40");
for (let index = 10; index < 40; index += 2) {
    console.log(index);
}
// Problem 3
console.log("Print all odd numbers between 300 and 333");
for (let index = 300; index < 333; index++) {
    if (index % 2 !== 0) {
        console.log(index);
    }
}

// Problem 4
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for (let index = 5; index < 50; index++) {
    if (index % 5 === 0 && index % 3 === 0) {
        console.log(index);
    }
}