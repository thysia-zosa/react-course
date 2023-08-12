import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  return (
    <Card className="expense-list">
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
    </Card>
  );
}

export default ExpenseList;
