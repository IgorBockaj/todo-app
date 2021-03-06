import React from "react";

function TodoItem(props) {
  return props.todos.map((todo) => {
    return (
      <li
        className={todo.isComplete ? "todo-li complete" : "todo-li"}
        key={todo.id}
      >
        <p
          onClick={() => props.completeTodo(todo.id)}
          className={todo.isComplete ? "todo-text text-complete" : "todo-text"}
          key={todo.id}
        >
          {todo.text}
        </p>
        <button
          className="todo-button"
          onClick={() => props.removeTodo(todo.id)}
        >
          -
        </button>
      </li>
    );
  });
}

export default TodoItem;
