import { useReducer } from "react";

const initialInputState = { value: "", isTouched: false };

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { isTouched: true, value: state.value };
    case "RESET":
      return initialInputState;
    default:
      return initialInputState;
  }
};

const useAnotherInput = (validateCallback) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const isValid = validateCallback(inputState.value);
  const hasError = inputState.isTouched && !isValid;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const resetInput = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useAnotherInput;
