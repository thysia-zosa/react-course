import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./Form.module.css";
import FormInput from "./FormInput";
import FormInputGroup from "./FormInputGroup";

const Form = ({ submitCallback }) => {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlyContribution, setYearlyContribution] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(1);
  const [isValidInput, setIsValidInput] = useState(true);
  console.log(isValidInput);

  function inputChangeHandler(identifier, value) {
    while(value.charAt[0]==='0') {
      value=value.slice(1);
    }
    console.log(identifier, value);
    value = parseFloat(value);
    if (isNaN(value)) {
      value = null;
    }
    // if (!/[0-9.]/.test(value.charAt(value.length - 1))) {
    //   value = value.slice(0, -1);
    // }
    switch (identifier) {
      case "currentSavings":
        return setCurrentSavings((prevCurrentSavings) => {
          console.log(value, prevCurrentSavings);
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

  function durationChangeHandler(event) {
    let newValue = Math.round(event.target.value);
    if (isNaN(newValue)) {
      newValue = 1;
    }
    if (newValue < 1) {
      newValue = 1;
    }
    if (newValue > 20) {
      newValue = 20;
    }
    setDuration(newValue);
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
      expectedReturn: +expectedReturn,
      duration: Math.round(+duration),
    };
    console.log(currentSavings, yearlyContribution, expectedReturn, duration);
    if (
      !Object.values(formData).every((value) => !isNaN(value)) ||
      formData.duration < 1
    ) {
      console.log("notValid");
      return setIsValidInput(false);
    }
    // formData.submitCallback(formData);
    console.log("valid", formData);
    clearInputs();
  }

  function clearInputs() {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
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
          onChange={(event) =>
            inputChangeHandler("expectedReturn", event.target.value)
          }
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
