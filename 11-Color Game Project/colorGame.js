var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var h1 = document.querySelector("h1");

var resetButton = document.getElementById("reset");

var pickedColor = pickColor();

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for (var index = 0; index < squares.length; index++) {
    //add initial colors to squares
    squares[index].style.backgroundColor = colors[index];

    //click listeners to squares
    squares[index].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!"
        } 
    });
}


function changeColors(color) {
    //loop through all squares
    for (let index = 0; index < squares.length; index++) {
        //change each color to match given color
        squares[index].style.backgroundColor = color;

        
    }
    
}


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);

    return colors[random];
}


function generateRandomColors(num) {
    //make an array
    var arr = [];
    //make num random colors to array
    for (let index = 0; index < num; index++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a red for 0 to 255
    var red = Math.floor(Math.random() * 256);
    //pick green for 0 to 255
    var green = Math.floor(Math.random() * 256);
    //pick blue for 0 to 255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
    
}

resetButton.addEventListener("click", function() {
   //generate all new colors
   colors = generateRandomColors(6);
   //pick a new random color from array
   pickedColor = pickColor();
   //change color display to match picked color
   colorDisplay.textContent = pickedColor;
   //change colors of the squares 
   for (var index = 0; index < squares.length; index++) {
       squares[index].style.backgroundColor = colors[index];
   }

   h1.style.backgroundColor = "#232323";
   resetButton.textContent = "New Colors";
   messageDisplay.textContent = "";
});