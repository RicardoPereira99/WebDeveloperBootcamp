var movie = [
    {
        title: "John Wick",
        rating: 7.4,
        hasWatched: true
    },
    {
        title: "John Wick - Capitulo 2",
        rating: 7.5,
        hasWatched: true
    },
    {
        title: "John Wick - Implacável",
        rating: 8,
        hasWatched: true
    },
    {
        title: "Scary thing",
        rating: 0,
        hasWatched: false
    }
];


movie.forEach(function(element,index,arr){

    if (element.hasWatched) {
        console.log("You have watched \"" + element.title + "\" - " + element.rating + " stars.");
    }
    else console.log("You have not seen \"" + element.title + "\" - " + element.rating + " stars.");

});