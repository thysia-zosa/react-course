import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ submitCallback }) => {
  const [isShowingForm, setIsShowingForm] = useState(false);

  function showForm() {
    setIsShowingForm(true);
  }

  function dismissForm() {
    setIsShowingForm(false);
  }

  return (
    <div className="new-expense">
      {isShowingForm ? (
        <ExpenseForm
          submitCallback={submitCallback}
          dismissCallback={dismissForm}
        />
      ) : (
        <button onClick={showForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
