import React, { useState } from "react";

export const Form = (props) => {
  const { setTodos } = props;

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <article>
      <h2>Todo form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            id: Math.random(),
            title,
            priority,
            status: false,
          };
          setTodos((todos) => [...todos, newTodo]);
          setTitle("");
          setPriority("");
        }}
      >
        <input
          required
          type="text"
          placeholder="Todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          required
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" hidden>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button>Submit</button>
      </form>
    </article>
  );
};
