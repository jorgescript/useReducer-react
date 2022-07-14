import { useForm } from "../hooks/useForm";

export const TodoForm = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length < 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };
    onResetForm();
    onNewTodo(newTodo);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="description"
        value={description}
        onChange={onInputChange}
        className="form-control"
        placeholder="Nueva actividad"
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar tarea
      </button>
    </form>
  );
};
