var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function (x, y) {
        return x + y;
    }
};

console.log(obj.add(10,5));



var comments = {};

comments.data = ["Good Job", "Bad Job"];

comments.print = function() {
    this.data.forEach(element => {
        console.log(element);    
    });
};

comments.print(comments.data);