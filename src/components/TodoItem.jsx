export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onClick={() => onToggleTodo(todo.id)}
    >
      <span className={`${todo.done ? "text-decoration-line-through" : ""}`}>
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Eliminar
      </button>
    </li>
  );
};
