import { useState } from "react";
import "./ExpensesOverview.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import Chart from "../Chart/Chart";

const ExpensesOverview = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  function filterCallback(year) {
    setFilteredYear(year);
  }

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === filteredYear
  );

  return (
    <Card className="expenses-overview">
      <ExpensesFilter
        filteredYear={filteredYear}
        filterCallback={filterCallback}
      />
      <Chart filteredExpenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default ExpensesOverview;
