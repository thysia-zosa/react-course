// how to import third-party-libraries in node
const redux = require("redux");

const kIncrement = "increment";
const kDecrement = "decrement";

// Two inputs (old state & dispatched action), one output: new state object
// should be a pure function
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case kIncrement:
      return {
        counter: state.counter + 1,
      };
    case kDecrement:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

// The store wants to know, who the reducer function is, that will manipulate the data
const store = redux.createStore(counterReducer);

// subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// add the subscription to the store, so the store knows, what to execute whenever the data and the store changed
store.subscribe(counterSubscriber);

store.dispatch({ type: kIncrement });
store.dispatch({ type: kDecrement });
