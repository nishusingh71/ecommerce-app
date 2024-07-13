import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "../reducers/root.reducers";
import createSagaMiddleware from "redux-saga";
import { root } from "../saga/root.saga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducers,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV === "development" ? true : false,
});
export default store;
sagaMiddleware.run(root);
