import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ submitCallback }) => {
  return (
    <div className="new-expense">
      <ExpenseForm submitCallback={submitCallback} />
    </div>
  );
};

export default NewExpense;
