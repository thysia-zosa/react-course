import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <TodoList />
    </TodosContextProvider>
  );
}

export default App;
