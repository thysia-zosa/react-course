import { useState } from "react";

const useAnotherInput = (validateCallback) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validateCallback(enteredValue);
  const hasError = isTouched && !isValid;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useAnotherInput;
