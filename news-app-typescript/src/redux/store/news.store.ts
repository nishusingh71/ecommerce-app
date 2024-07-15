import { newsReducer } from "../reducers/news.reducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import News from "../saga/news.saga";
const sagaMiddlewares = createSagaMiddleware();
const store = configureStore({
  reducer: newsReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddlewares),
  devTools: process.env.NODE_ENV === "development" ? true : false,
});
export default store;
sagaMiddlewares.run(News);
