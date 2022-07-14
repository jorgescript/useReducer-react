import { useEffect, useReducer } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { todoReducer } from "./reducers/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const Todo = () => {
  const [todos, dispatchTodos] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    dispatchTodos({ type: "ADD-TODO", payload: newTodo });
  };

  const handleDeleteTodo = (id) => {
    dispatchTodos({ type: "REMOVE-TODO", payload: id });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 mt-4">
          <h2>Tareas: (10)</h2>
          <h2>Pendientes: (3):</h2>
        </div>
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
        <div className="col-5">
          <h4>Agregar tarea</h4>
          <TodoForm onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
