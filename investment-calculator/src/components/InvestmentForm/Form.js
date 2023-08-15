import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./Form.module.css";
import FormInput from "./FormInput";
import FormInputGroup from "./FormInputGroup";

const Form = ({ submitCallback }) => {
  const [currentSavings, setCurrentSavings] = useState(0.0);
  const [yearlyContribution, setYearlyContribution] = useState(0.0);
  const [expectedReturn, setExpectedReturn] = useState(0.0);
  const [duration, setDuration] = useState(1);
  const [isValidInput, setIsValidInput] = useState(true);

  function inputChangeHandler(identifier, value) {
    value = parseFloat(value);
    if (isNaN(value)) {
      value = null;
    }
    switch (identifier) {
      case "currentSavings":
        return setCurrentSavings((prevCurrentSavings) => {
          return value ?? prevCurrentSavings;
        });
      case "yearlyContribution":
        return setYearlyContribution(
          value ?? ((prevYearlyContribution) => prevYearlyContribution)
        );
      case "expectedReturn":
        return setExpectedReturn(
          value ?? ((prevExpectedReturn) => prevExpectedReturn)
        );
      default:
        break;
    }
  }

  function expectedReturnChangeHandler(event) {
    let value = parseFloat(event.target.value).toFixed(2);
    if (isNaN(value)) {
      value = null;
    }
    return setExpectedReturn(
      value ?? ((prevExpectedReturn) => prevExpectedReturn)
    );
  }

  function durationChangeHandler(event) {
    let newValue = Math.round(parseFloat(event.target.value));
    if (newValue < 1) {
      newValue = 1;
    }
    if (newValue > 20) {
      newValue = 20;
    }
    if (isNaN(newValue)) {
      newValue = null;
    }
    setDuration(newValue ?? ((prevDuration) => prevDuration));
  }

  function onResetForm(event) {
    event.preventDefault();
    clearInputs();
  }

  function onSubmitForm(event) {
    event.preventDefault();
    const formData = {
      currentSavings: +currentSavings,
      yearlyContribution: +yearlyContribution,
      expectedReturn: +expectedReturn / 100,
      duration: +duration,
    };
    // if (
    //   !Object.values(formData).every((value) => !isNaN(value)) ||
    //   formData.duration < 1
    // ) {
    //   return setIsValidInput(false);
    // }
    console.log(formData);
    submitCallback(formData);
    clearInputs();
  }

  function clearInputs() {
    setCurrentSavings(0.0);
    setYearlyContribution(0.0);
    setExpectedReturn(0.0);
    setDuration(1);
    setIsValidInput(true);
  }

  return (
    <form className={styles.form}>
      <FormInputGroup>
        <FormInput
          label={"currentSavings"}
          title={"Current Savings ($)"}
          onChange={(event) =>
            inputChangeHandler("currentSavings", event.target.value)
          }
          value={currentSavings}
        />
        <FormInput
          label={"yearlyContribution"}
          title={"Yearly Savings ($)"}
          onChange={(event) =>
            inputChangeHandler("yearlyContribution", event.target.value)
          }
          value={yearlyContribution}
        />
      </FormInputGroup>
      <FormInputGroup>
        <FormInput
          label={"expectedReturn"}
          title={"Expected Interest (%, per year)"}
          onChange={expectedReturnChangeHandler}
          value={expectedReturn}
        />
        <FormInput
          label={"duration"}
          title={"Investment Duration (years)"}
          onChange={durationChangeHandler}
          value={duration}
        />
      </FormInputGroup>
      <p className={styles.actions}>
        <Button
          className={styles.buttonAlt}
          type="reset"
          title={"Reset"}
          clickHandler={onResetForm}
        />
        <Button
          className={styles.button}
          type="submit"
          title={"Calculate"}
          clickHandler={onSubmitForm}
        />
      </p>
      {!isValidInput && (
        <p className={styles.invalid}>Invalid Input: only numbers allowed</p>
      )}
    </form>
  );
};

export default Form;
