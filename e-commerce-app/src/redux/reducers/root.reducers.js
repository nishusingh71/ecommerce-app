import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./category.reducers";

export const rootReducers = combineReducers({
  category: categoryReducer,
});
