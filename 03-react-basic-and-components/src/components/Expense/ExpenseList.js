import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ expenses }) {
  const [filteredYear, setFilteredYear] = useState(2020);

  function filterCallback(year) {
    setFilteredYear(year);
  }

  return (
    <Card className="expense-list">
      <ExpensesFilter
        filteredYear={filteredYear}
        filterCallback={filterCallback}
      />
      {expenses
        .filter((expense) => expense.date.getFullYear() === filteredYear)
        .map((item, index) => {
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
