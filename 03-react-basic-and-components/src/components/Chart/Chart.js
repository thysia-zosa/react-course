import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ filteredExpenses }) => {
  const months = [
    { label: "Jan", amount: 0 },
    { label: "Feb", amount: 0 },
    { label: "Mar", amount: 0 },
    { label: "Apr", amount: 0 },
    { label: "May", amount: 0 },
    { label: "Jun", amount: 0 },
    { label: "Jul", amount: 0 },
    { label: "Aug", amount: 0 },
    { label: "Sep", amount: 0 },
    { label: "Oct", amount: 0 },
    { label: "Nov", amount: 0 },
    { label: "Dec", amount: 0 },
  ];

  filteredExpenses.forEach((expense) => {
    months[expense.date.getMonth()].amount += expense.amount;
  });

  const sum =
    filteredExpenses.length === 0
      ? 1
      : months.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="chart">
      {months.map((month) => (
        <ChartBar
          key={month.label}
          label={month.label}
          fill={Math.round((100 * month.amount) / sum)}
        />
      ))}
    </div>
  );
};

export default Chart;
