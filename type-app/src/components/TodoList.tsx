import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const todosContext = useContext(TodosContext);
  
  return (
    <ul className={styles.todoList}>
      {todosContext.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item.text}
          // removeHandler={() => props.removeTodo(item.id)}
          removeHandler={todosContext.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
