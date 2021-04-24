import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  value: 5,
};

const counterReducer = (state = initialState, action) => {
  const { payload = 1 } = action;
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        value: state.value + payload,
      };
    case "counter/decrement":
      return {
        ...state,
        value: state.value - payload,
      };
    default:
      return state;
  }
};
const store = createStore(counterReducer);

// console.log("store:", store.getState());
// store.dispatch({ type: "counter/increment", payload: 15 });
// console.log("store:", store.getState());
// store.dispatch({ type: "counter/decrement" });
// console.log("store:", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
