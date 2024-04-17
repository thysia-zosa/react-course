import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUserForm.module.css";
import ErrorModal from "../ErrorModal/ErrorModal";

const kUserName = "userName";
const kUserAge = "userAge";

const AddUserForm = ({ submitCallback }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [validityState, setValidityState] = useState(0);
  function getErrorMessage() {
    let errorMessage = "";
    switch (validityState) {
      case 1:
        errorMessage = "Please enter a valid age (0-120).";
        break;
      case 2:
        errorMessage = "Please enter a valid name (non-empty value).";
        break;
      case 3:
        errorMessage = "Please enter a valid name and age(non-empty values).";
        break;
      default:
        errorMessage = "";
        break;
    }
    return errorMessage;
  }

  function inputChangeHandler(identifier, value) {
    switch (identifier) {
      case kUserName:
        return setUserName(value);
      case kUserAge:
        value = parseInt(value);
        if (isNaN(value)) {
          value = 0;
        }
        return setUserAge(value);
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateInput()) {
      return;
    }
    const formData = {
      userName: userName,
      userAge: userAge,
    };
    clearInput();
    submitCallback(formData);
  }

  function validateInput() {
    let status = 0;
    if (userName.trim().length === 0) {
      status += 2;
    }
    if (isNaN(userAge) || userAge < 0 || userAge > 120) {
      status += 1;
    }
    if (status == 0) {
      return true;
    }
    setValidityState(status);
    return false;
  }

  function clearInput() {
    setUserName("");
    setUserAge(0);
  }

  function removeErrorModal() {
    setValidityState(0);
  }

  return (
    <>
      <Card>
        <form className={styles.userForm} onSubmit={handleSubmit}>
          <label htmlFor={kUserName}>Username</label>
          <input
            type="text"
            name={kUserName}
            value={userName}
            onChange={(event) =>
              inputChangeHandler(kUserName, event.target.value)
            }
          />
          <label htmlFor={kUserAge}>Age (years)</label>
          <input
            type="number"
            name={kUserAge}
            value={userAge}
            onChange={(event) =>
              inputChangeHandler(kUserAge, event.target.value)
            }
          />
          <div className={styles.actions}>
            <Button type="submit" title={"Add User"} />
          </div>
        </form>
      </Card>
      {validityState !== 0 && (
        <ErrorModal
          errorMessage={getErrorMessage()}
          removeCallback={removeErrorModal}
        />
      )}
    </>
  );
};

export default AddUserForm;
