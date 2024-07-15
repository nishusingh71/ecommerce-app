import { createStore } from "redux";
const initialState = {
  counter: 0,
  error: true,
};
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  }
  return state;
};

let store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: "increment", payload: 1 });
store.dispatch({ type: "decrement", payload: 1 });
