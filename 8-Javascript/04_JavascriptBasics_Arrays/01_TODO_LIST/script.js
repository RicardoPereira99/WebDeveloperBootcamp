var todos = ["Buy new turtle"];

window.setTimeout(function () {

  var input = prompt("What would you like to do?");



  while (input !== "quit") {


    // handle input
    if (input === "list") {
      console.log(todos);
    } else if (input === "new") {
      // ask for new todo
      var newTodo = prompt("Enter new todo");
      // add to todos array
      todos.push(newTodo);
    }


    input = prompt("What would you like to do?");

  }

  console.log("Okay! You quit the APP.......");


}, 500);