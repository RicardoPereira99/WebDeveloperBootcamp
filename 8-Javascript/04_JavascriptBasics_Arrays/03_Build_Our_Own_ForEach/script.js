var colors = ["red", "orange", "yellow"];
var friends = ["Ricardo", "José", "João"];

// myForEach(colors,alert);
myForEach(colors, function (color) {
    console.log(color);
});


function myForEach(arr, func) {
    //loop through array
    for (let i = 0; i < arr.length; i++) {
        //call func for each item in array
        func(arr[i]);
    }
}


Array.prototype.myForEach = function(func){
    for (let i = 0; i < this.length; i++) {
        func(this[i]);        
    }
}

// friends.myForEach(alert);

friends.myForEach(function(name){
    console.log("Estes são os meus amigos: " + name);
});