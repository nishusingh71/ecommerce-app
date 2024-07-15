import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "../constants/todo.constants";

const initialState = {
  todos: ["Breakfast", "Lunch", "Dinner", "Snacks"],
  editData: {
    index: -1,
    data: "",
  },
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const deletTodos = state.todos.filter((todo) => todo !== action.payload);
      return {
        ...state,
        todos: [...deletTodos],
      };
    case EDIT_TODO:
      return {
        ...state,
        editData: {
          index: action.payload.index,
          data: action.payload.data,
        },
      };
    case UPDATE_TODO:
      let updateData = state.todos.map((value, index) => {
        if (index === action.payload.index) {
          return action.payload.data;
        }
        return value;
      });
      return {
        ...state,
        todos: [...updateData],
        editData: {
          index: -1,
          data: "",
        },
      };
    default:
      return state;
  }
};
