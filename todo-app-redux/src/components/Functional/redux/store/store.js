import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../reducers/todo.reducer";
import { thunk } from "redux-thunk";
export const store = configureStore({
  reducer: todoReducer,
  middleware: (getDefaultMiddileware) => getDefaultMiddileware().concat(thunk),
  devTools: process.env.NODE_ENV === "development",
});
