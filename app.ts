interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}

class TodoList {
  todos: TodoItem[] = [];
  nextId: number = 1;

  addTodo(task: string): void {
    const newTodo: TodoItem = { id: this.nextId++, task, completed: false };
    this.todos.push(newTodo);
  }

  completeTodo(id: number): void {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
    });
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  listTodos(): TodoItem[] {
    return this.todos;
  }
  filterTodos(completed: boolean): TodoItem[] {
    const filteredTodos: TodoItem[] = [];
    this.todos.forEach((todo) => {
      if (todo.completed === completed) {
        filteredTodos.push(todo);
      }
    });
    return filteredTodos;
  }
  updateTodo(id: number, newTask: string): void {
    this.todos.forEach((todo) => {
      if (todo.id === id) {
        todo.task = newTask;
      }
    });
  }
  updateDueDate(id: number, newDueDate: Date): void {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.dueDate = newDueDate;
    }
  }
  clearCompletedTodos(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
}

const todolist = new TodoList();
todolist.addTodo("New things to buy", new Date("2025-5-11"));
todolist.addTodo("finish your task")
console.log("To-do list");
console.log(todolist.listTodos());

todolist.completeTodo(1);
console.log("completing to-do-list")
console.log(todolist.listTodos());

todolist.updateTodo("Take out the trash");
console.log("Updated to-do-list");
console.log(todolist.listTodos());

todolist.removeTodo(2)
console.log("removing to-do-list")
console.log(todolist.listTodos();)