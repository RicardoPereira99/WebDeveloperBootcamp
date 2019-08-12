function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else return false;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

console.log("--------------------------");
function factorial(number) {
    var fact = 1;
    if (number === 0) {
        return 1;
    }
    else if (number > 0) {
        for (let index = 1; index <= number; index++) {
            fact = fact * index;
        }

        return fact;
    }
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));



console.log("--------------------------");

function kebabToSnake(str) {
    str.replace(/-/g, "_");
    return str;
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));   