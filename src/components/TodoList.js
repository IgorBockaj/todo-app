import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log([todo, ...todos]);
  };

  const removeTodo = (id) => {
    const removedArr = todos.filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <div className="todo-list">
      <TodoForm className="todo-form" addTodo={addTodo} />
      <TodoItem className="todo-item" todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
