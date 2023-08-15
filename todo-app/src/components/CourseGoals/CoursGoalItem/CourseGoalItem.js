import "./CourseGoalItem.css";

const CourseGoalItem = ({ onDelete, id, children }) => {
  function deleteHandler() {
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
