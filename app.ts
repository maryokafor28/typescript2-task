interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
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
}
