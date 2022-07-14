import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
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

  const handleToggleTodo = (id) => {
    dispatchTodos({ type: "TOGGLE-TODO", payload: id });
  };

  const numberOfTodos = () => todos.length;
  const numberOfPendingTodos = () =>
    todos.filter((todo) => todo.done === false).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    numberOfTodos,
    numberOfPendingTodos,
  };
};
