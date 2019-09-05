var tag = document.getElementById("highlight"); // Selects the first li object of the ul

var tags = document.getElementsByClassName("bolded"); // Selects the second and third li object of the ul. Returns a HTMLCollection.
console.log(tags[0]); // We can't use tags.forEach() because this is an HTMLCollection (Javascript Object)


var tags2 = document.getElementsByTagName("li"); // Selects all the li of the ul. Returns a HTMLCollection
console.log(tags2[0]); // We can't use tags.forEach() because this is an HTMLCollection (Javascript Object)


// Select by ID
var tag = document.querySelector("#highlight"); // Selects the first li object of the ul

// Select by class
var tag = document.querySelector(".bolded"); // Selects the second li object of the ul. Only returns one element.
