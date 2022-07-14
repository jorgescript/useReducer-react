export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{todo.description}</span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Eliminar
      </button>
    </li>
  );
};
