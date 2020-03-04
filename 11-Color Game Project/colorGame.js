var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");

var pickedColor = colors[3];

var colorDisplay = document.getElementById("colorDisplay");

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
            alert("You guess correct!");
        }
        else alert("Try again!");
    });
}