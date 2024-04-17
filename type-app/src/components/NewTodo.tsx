import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosContext = useContext(TodosContext)
  
  // with initial value "null", we have to be explicit about that
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosContext.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo-Text</label>
      <input type="text" name="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
