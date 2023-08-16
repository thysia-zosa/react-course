import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = () => {
  return (
    <Card>
      <p className={styles.userListItem}>Max (31 years old)</p>
    </Card>
  )
};

export default UserList;
