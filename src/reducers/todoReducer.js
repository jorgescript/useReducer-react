export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "ADD-TODO":
      return [...initialState, action.payload];
    case "REMOVE-TODO":
      return initialState.filter((todo) => todo.id !== action.payload);
    default:
      return initialState;
  }
};
