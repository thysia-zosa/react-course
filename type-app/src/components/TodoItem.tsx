import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todo: string;
  removeHandler: () => void;
}> = ({ todo, removeHandler }) => {
  return (
    <li className={styles.item} onClick={removeHandler}>
      {todo}
    </li>
  );
};

export default TodoItem;
