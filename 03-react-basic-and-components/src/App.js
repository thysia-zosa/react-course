import { useState } from "react";
import ExpenseList from "./components/Expense/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  function addNewExpense(NewExpense) {
    setExpenses((prevState)=> {
      const newId = parseInt(prevState[prevState.length - 1].id.substring(1)) + 1;
      prevState.push({ ...NewExpense, id: `e${newId}` });
      console.log('what?', prevState);
      return prevState;
    })
  }

  return (
    <div>
      <NewExpense submitCallback={addNewExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
