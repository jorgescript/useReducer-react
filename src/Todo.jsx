import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodos";

export const Todo = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    numberOfTodos,
    numberOfPendingTodos,
  } = useTodo();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 mt-4">
          <h2>Tareas: {numberOfTodos()}</h2>
          <h2>Pendientes: {numberOfPendingTodos()}:</h2>
        </div>
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar tarea</h4>
          <TodoForm onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
