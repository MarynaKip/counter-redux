// import { combineReducers } from "redux";
// import types from "./types";

// const initialState = {
//   value: 5,
//   step: 1,
// };

// const value = (state = initialState.value, action) => {
//   const { payload = 1 } = action;
//   switch (action.type) {
//     case types.INCREMENT:
//       return state + payload;

//     case types.DECREMENT:
//       return state - payload;
//     default:
//       return state;
//   }
// };

// const step = (state = initialState.step, action) => {
//   const { payload = 1 } = action;
//   switch (action.type) {
//     case types.SET_STEP:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({ value, step });

// REDUX TOOLKIT WITHOUT SLICE

// import { combineReducers, createReducer } from "@reduxjs/toolkit";
// import { onIncrement, onDecrement, onChangeStep } from "./actions";

// const initialState = {
//   value: 5,
//   step: 1,
// };

// const value = createReducer(initialState.value, {
//   [onIncrement]: (state, action) => state + action.payload,
//   [onDecrement]: (state, action) => state - action.payload,
// });
// const step = createReducer(initialState.step, {
//   [onChangeStep]: (_, action) => action.payload,
// });

// export default combineReducers({ value, step });

// REDUX TOOLKIT WITH SLICE

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5,
  step: 1,
};

const { actions, reducer } = createSlice({
  name: "counter/toolkit/slice",
  initialState,
  reducers: {
    onIncrement: (state, action) => {
      state.value += action.payload;
    },
    onDecrement: (state, action) => {
      state.value -= action.payload;
    },
    onSetStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { onIncrement, onDecrement, setStep } = actions;

export default reducer;
