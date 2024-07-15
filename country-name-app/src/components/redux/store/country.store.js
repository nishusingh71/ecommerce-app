import { countryReducer } from "../reducers/country.reducer";
import { configureStore } from "@reduxjs/toolkit";
// import { thunk } from "redux-thunk";
 
const store = configureStore({
  reducer: {
    countries: countryReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),

    devTools: process.env.NODE_ENV === "development" ? true : false,
  },
});
export default store;
