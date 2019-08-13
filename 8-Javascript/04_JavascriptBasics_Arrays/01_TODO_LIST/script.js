var todos = ["Buy new turtle"];

window.setTimeout(function () {

  var input = prompt("What would you like to do?");




  while (input !== "quit") {

    // handle input
    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    }

    // ask user an action
    input = prompt("What would you like to do?");

  }

  console.log("Okay! You quit the APP.......");




  function listTodos() {
    console.log("*****************");
    todos.forEach(function (todo, index, array) {
      console.log(index + ": " + todo);
    });
    console.log("*****************");
  }

  function addTodo() {
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add to todos array
    todos.push(newTodo);
    console.log("ADDED TODO....");
  }

  function deleteTodo() {
    // ask for index to be deleted
    var index = prompt("Enter index of TODO to delete");
    // delete the todo via index provided
    todos.splice(index, 1);
    console.log("DELETED TODO....");
  }

}, 500);