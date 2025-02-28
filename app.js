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
        this.todos.forEach(function (todo) {
            if (todo.id === id) {
                todo.completed = true;
            }
        });
    };
    TodoList.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoList.prototype.listTodos = function () {
        return this.todos;
    };
    TodoList.prototype.filterTodos = function (completed) {
        var filteredTodos = [];
        this.todos.forEach(function (todo) {
            if (todo.completed === completed) {
                filteredTodos.push(todo);
            }
        });
        return filteredTodos;
    };
    TodoList.prototype.updateTodo = function (id, newTask) {
        this.todos.forEach(function (todo) {
            if (todo.id === id) {
                todo.task = newTask;
            }
        });
    };
    TodoList.prototype.updateDueDate = function (id, newDueDate) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.dueDate = newDueDate;
        }
    };
    TodoList.prototype.clearCompletedTodos = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
    };
    return TodoList;
}());
var todolist = new TodoList();
todolist.addTodo("New things to buy", new Date("2025-5-11"));
todolist.addTodo("finish your task");
console.log("To-do list");
console.log(todolist.listTodos());
todolist.completeTodo(1);
console.log("completing to-do-list");
console.log(todolist.listTodos());
todolist.updateTodo("Take out the trash");
console.log("Updated to-do-list");
console.log(todolist.listTodos());
todolist.removeTodo(2);
console.log("removing to-do-list");
console.log(todolist.listTodos());
