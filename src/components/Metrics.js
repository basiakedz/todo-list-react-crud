import React from "react";
import { Metric } from "./Metric";

export const Metrics = (props) => {
  const { todos } = props;

  const done = todos.filter(todoItem => {
    return  todoItem.status === true;
  })

  const todo = todos.filter(todoItem => {
    return  todoItem.status === false;
  })

  const high = todos.filter(todoItem => {
    return  todoItem.priority === "high";
  })

  const medium = todos.filter(todoItem => {
    return  todoItem.priority === "medium";
  })

  const low = todos.filter(todoItem => {
    return  todoItem.priority === "low";
  })

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Metric label="Total" value={todos.length} />
      <Metric label="Done" value={done.length} />
      <Metric label="Todo" value={todo.length} />
      <Metric label="High" value={high.length} />
      <Metric label="Medium" value={medium.length} />
      <Metric label="Low" value={low.length} />
    </div>
  );
};

