//textDecoration: "line-through" property must be camelCase because of in javascript we can't use '-'


// Check Off Specific Todos By Clicking

$("li").click(function () {

    $(this).toggleClass("completed");
});

//Click on X to delete To-do

$("span").click(function(event) {
   
    $(this).parent().fadeOut(500, function() {

        $(this).remove();
    });

    event.stopPropagation();
});

