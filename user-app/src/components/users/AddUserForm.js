import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUserForm.module.css";

const kUserName = "userName";
const kUserAge = "userAge";

const AddUserForm = ({submitCallback}) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);

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
    const formData = {
      userName: userName,
      userAge: userAge,
    };
    clearInput();
    submitCallback(formData);
  }

  function clearInput(){
    setUserName('');
    setUserAge(0);
  }

  return (
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
          onChange={(event) => inputChangeHandler(kUserAge, event.target.value)}
        />
        <div className={styles.actions}>
          <Button type="submit" className={styles.button} title={"Add User"} />
        </div>
      </form>
    </Card>
  );
};

export default AddUserForm;
