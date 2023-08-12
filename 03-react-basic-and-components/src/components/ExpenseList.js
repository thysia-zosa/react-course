import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      {expenses.map((item, index) => {
        return (
          <ExpenseItem
            key={index}
            date={item.date}
            amount={item.amount}
            title={item.title}
          />
        );
      })}
    </div>
  );
}

export default ExpenseList;
