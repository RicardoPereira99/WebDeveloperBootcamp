// SecretNumber
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt("Guess a number"));
// alert(guess);


// check if guess is right
if (guess === secretNumber) {
    alert("You got it right!!!");
}
// otherwise, check if higher
else if (guess > secretNumber) {
    alert("Too high! Guess again");
}
else{
    alert("Too low! Guess again");
}
// otherwise, check if lower