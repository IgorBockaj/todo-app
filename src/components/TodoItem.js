import React from "react";

function TodoItem(props) {
  return props.todos.map((todo) => {
    return (
      <li className="todo-li" key={todo.id}>
        <p className="todo-text">{todo.text}</p>
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
