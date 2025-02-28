var TodoList = /** @class */ (function () {
  function TodoList() {
    this.todos = [];
    this.nextId = 1;
  }
  TodoList.prototype.addTodo = function (task) {
    var newTodo = { id: this.nextId++, task: task, completed: false };
    this.todos.push(newTodo);
  };
  TodoList.prototype.completeTodo = function (id) {
    var todo = this.todos.find(function (todo) {
      return todo.id === id;
    });
    if (todo) {
      todo.completed = true;
    }
  };
  TodoList.prototype.removeTodo = function (id) {
    this.todos = this.todos.filter(function (todo) {
      return todo.id !== id;
    });
  };
  TodoList.prototype.listTodos = function () {
    return this.todos;
  };
  return TodoList;
})();
