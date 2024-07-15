const intialState = {
  counter: 0,
};
export const counterReducer = (state = intialState, action) => {
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
