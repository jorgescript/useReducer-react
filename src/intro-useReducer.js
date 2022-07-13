const initialState = [
  { id: 1, todo: "Recolectar la piedra del alma", done: false },
];

const todoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD-TODO":
      return [...state, action.payload];

    default:
      return state;
  }
};

let todos = todoReducer();
console.log(todos);

const newTodo = { id: 2, todo: "Recolectar la pieda del poder", done: false };

todos = todoReducer(todos, { type: "ADD-TODO", payload: newTodo });
console.log(todos);
