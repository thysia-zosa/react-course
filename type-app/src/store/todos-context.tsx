import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([new Todo("Learn React"), new Todo("Learn TypeScript")]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => {
      return prevTodos.concat(new Todo(text));
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
  } = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
