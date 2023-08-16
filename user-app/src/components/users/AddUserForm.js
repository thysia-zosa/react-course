import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUserForm.module.css";

const AddUserForm = () => {
  return (
    <Card>
      <form className={styles.userForm}>
        <label htmlFor="userName">Username</label>
        <input type="text" name="userName" />
        <label htmlFor="userAge">Age (years)</label>
        <input type="number" name="userAge" />
        <div className={styles.actions}>
          <Button className={styles.button} title={"Add User"} />
        </div>
      </form>
    </Card>
  );
};

export default AddUserForm;
