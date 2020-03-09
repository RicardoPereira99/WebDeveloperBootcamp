// Check Off Specific Todos By Clicking


//textDecoration: "line-through" property must be camelCase because of in javascript we can't use '-'

$("li").click(function () {

    $(this).toggleClass("completed");
});