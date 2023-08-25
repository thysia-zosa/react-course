import { configureStore, /* createSlice */ } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
// const redux = require("redux");

// export const kIncrement = "increment";
// export const kDecrement = "decrement";
// export const kIncrease = "increase";
// export const kToggle = "toggle";

// const counterReducer = (state = initialState, action) => {
//   // state.counter++ => NEVER MUTATE THE STATE LIKE THIS!!!

//   switch (action.type) {
//     case kIncrement:
//       return { counter: state.counter + 1, showCounter: state.showCounter };
//     case kIncrease:
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     case kDecrement:
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case kToggle:
//       return { counter: state.counter, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

// const store = redux.createStore(counterReducer);

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.despatch({ type: kIncrement });
// store.despatch({ type: kDecrement });

// const store = configureStore({ reducer: counterSlice.reducer }); // for single reducer, or with redux

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
