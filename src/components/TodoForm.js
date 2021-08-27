import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const ref = useRef(null);

  useEffect(() => ref.current.focus());

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    props.addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="form">
      <input
        className="form-input"
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
        ref={ref}
      />
      <button className="form-button" onClick={handleSubmit}>
        +
      </button>
    </form>
  );
}

export default TodoForm;
