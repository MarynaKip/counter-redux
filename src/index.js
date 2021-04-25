import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

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
