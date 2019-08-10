// Problem 1
console.log("Print all numbers between -10 and 19");
var number1 = -10;
while (number1 <= 19) {
    console.log(number1);
    number1++;
}

// Problem 2
console.log("Print all even numbers between 10 and 40");
var number2 = 10;
while (number2 <= 40) {
    // if (number2 % 2 === 0) {
    //     console.log(number2);
    // }
    // number2++;

    // OU

    console.log(number2);
    number+=2;
}

// Problem 3
console.log("Print all odd numbers between 300 and 333");
var number3 = 300;
while (number3 <= 333) {
    if (number3 % 2 !== 0) {
        console.log(number3);
    }
    number3++;
}

// Problem 4
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var number4 = 5;
while (number4 <= 50) {
    if (number4 % 5 === 0 && number4 % 3 === 0) {
        console.log(number4);
    }
    number4++;
}