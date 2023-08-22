import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      return setEnteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      return setEnteredNameIsValid(false);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      return setEnteredNameIsValid(false);
    }
    setEnteredNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
  };

  const nameInpusIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = `formControl ${nameInpusIsInvalid ? "invalid" : ""}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInpusIsInvalid && (
          <p className="errorText">Name must not be empty.</p>
        )}
      </div>
      <div className="formActions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
