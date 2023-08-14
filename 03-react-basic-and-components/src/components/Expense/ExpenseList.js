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

  // const years = [2019, 2020, 2021, 2022].filter(
  //   (year) => year !== filteredYear
  // );

  return (
    <Card className="expense-list">
      <ExpensesFilter
        filteredYear={filteredYear}
        filterCallback={filterCallback}
      />
      {/* <p>Data for years ${years[0]}, ${years[1]} & ${years[2]} is hidden.</p> */}
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
