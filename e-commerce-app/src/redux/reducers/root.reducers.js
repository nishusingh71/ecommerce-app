import { combineReducers } from "@reduxjs/toolkit";

import { productReducer } from "./product.reducers";
import { categoryReducer } from "./category.reducers";
export const rootReducers = combineReducers({
  category: categoryReducer,
  product: productReducer,
});
