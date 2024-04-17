// import { Component } from "react";
import { kDecrement, kIncrease, kIncrement, kToggle } from "../store";
import classes from "./Counter.module.css";
import { /* connect, */ useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: kToggle });
  };

  const incrementHandler = () => {
    dispatch({ type: kIncrement });
  };

  const increaseHandler = () => {
    dispatch({ type: kIncrease, amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: kDecrement });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {this.props.increment()}

//   decrementHandler() {this.props.decrement()}

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // equivalent to useSelector
// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// // equivalent to dispatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: kIncrement }),
//     decrement: () => dispatch({ type: kDecrement }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
