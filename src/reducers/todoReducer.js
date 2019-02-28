const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todoItems => (
        todoItems.id === action.id
          ? { ...todoItems, completed: !todoItems.completed }
          : todoItems
      ));
    default:
      return state;
  }
};

export default todo;
