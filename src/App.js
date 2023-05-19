import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useEffect, useState } from "react";
import { EditModal } from "./components/EditModal";
import { Filters } from "./components/Filters";
import { Metrics } from "./components/Metrics";
import { Metric } from "./components/Metric";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoToEdit, setTodoToEdit] = useState(null);

  const [filters, setFilters] = useState({
    title: "",
    priority: "all",
    status: "all",
  });

  return (
    <div className="container">
      <Form setTodos={setTodos} />

      <Filters filters={filters} setFilters={setFilters} />

      <Metrics todos={todos} />

      <TodoList
        todos={todos.filter((todoItem) => {
          const matchesByTitle = todoItem.title
            .toLowerCase()
            .includes(filters.title.toLowerCase());

          let matchesByPriority = false;

          if (filters.priority === "all") matchesByPriority = true;
          else matchesByPriority = todoItem.priority === filters.priority;

          let matchesByStatus = false;

          if (filters.status === "all") matchesByStatus = true;
          else if (filters.status === "done")
            matchesByStatus = todoItem.status === true;
          else matchesByStatus = todoItem.status === false;

          return matchesByTitle && matchesByPriority && matchesByStatus;
        })}
        setTodos={setTodos}
        setTodoToEdit={setTodoToEdit}
      />

      {!!todoToEdit && (
        <EditModal
          todoToEdit={todoToEdit}
          setTodoToEdit={setTodoToEdit}
          setTodos={setTodos}
        />
      )}
    </div>
  );
}

export default App;
