import CourseGoalItem from "../CoursGoalItem/CourseGoalItem";
import styles from "./CourseGoalList.module.css";

const CourseGoalList = ({items, onDeleteItem}) => {
  return (
    <ul className={styles.goalList}>
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
