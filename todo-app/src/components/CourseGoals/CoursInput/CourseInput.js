import { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  function goalInputChangeHandler(event) {
    if (event.target.value.trim().length > 0){setIsValidInput(true)}
    setEnteredValue(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    if (enteredValue.trim().length===0) {
      setIsValidInput(false);
      return;
    }
    onAddGoal(enteredValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles.formControl} ${!isValidInput && styles.invalid}`}>
        <label>
          Course Goal
        </label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
