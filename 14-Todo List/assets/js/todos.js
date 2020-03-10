//textDecoration: "line-through" property must be camelCase because of in javascript we can't use '-'


// Check Off Specific Todos By Clicking

$("ul").on("click", "li" ,  function () {

    $(this).toggleClass("completed");
});

//Click on X to delete To-do

$("ul").on("click", "span", function(event) {
   
    $(this).parent().fadeOut(500, function() {

        $(this).remove();
    });

    event.stopPropagation();
});


$("input[type='text']").keypress(function(event) {
    
    if (event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }

});

