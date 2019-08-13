// Problem 1

function printReverse(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        console.log(array[index]);
    }
}

printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);

console.log("--------------------------------");

// Problem 2

function isUniform(array) {
    for (let x  = 0; x < array.length; x++) {
        for (let y = x+1; y < array.length; y++) {
            if (array[x] !== array[y]) {
                console.log("It isn't Uniform!");
                return false;
            }
        }
    }
    console.log("Is Uniform!");
    return true;
}

isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a","b","p"]);
isUniform(["b","b","b"]);



console.log("--------------------------------");

// Problem 3

function sumArray(array) {
    var sum = 0;
    array.forEach(function(el,index,arr){
        sum+=el;
    });

    console.log(sum);
    return sum;
}

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);



console.log("--------------------------------");

// Problem 4
function max(array) {
    var max;

    array.forEach(function(el,index,arr){
        if (max<el || !max) {
            max=el;
        }
    });

    console.log(max);
    return max;

}

max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);
max([-1,-2,-3]);
