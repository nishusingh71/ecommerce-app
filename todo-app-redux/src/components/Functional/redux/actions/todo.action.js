import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SET_TODOS,
  UPDATE_TODO,
} from "../constants/todo.constants";

export const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const deleteTodoAction = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo,
  };
};

export const editTodoAction = (index, data) => {
  return {
    type: EDIT_TODO,
    payload: {
      index,
      data,
    },
  };
};

export const updateTodoAction = (index, data) => {
  return {
    type: UPDATE_TODO,
    payload: {
      index,
      data,
    },
  };
};

export const setTodos = () => {
  return {
    type: SET_TODOS,
  };
};
