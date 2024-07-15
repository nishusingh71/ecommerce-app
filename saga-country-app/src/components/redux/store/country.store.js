import { countryReducer } from "../reducers/country.reducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import country from "../sagas/country.saga";
const sagaMiddlewares = createSagaMiddleware();
const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddlewares),
  devTools: process.env.NODE_ENV === "development" ? true : false,
});
export default store;
sagaMiddlewares.run(country);
