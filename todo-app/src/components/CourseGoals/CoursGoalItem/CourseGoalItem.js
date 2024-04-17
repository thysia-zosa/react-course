import styles from "./CourseGoalItem.module.css";

const CourseGoalItem = ({ onDelete, id, children }) => {
  function deleteHandler() {
    onDelete(id);
  };

  return (
    <li className={styles.goalItem} onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
