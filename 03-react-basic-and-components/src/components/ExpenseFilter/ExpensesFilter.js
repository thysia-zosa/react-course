import "./ExpensesFilter.css";

const ExpensesFilter = ({ filteredYear, filterCallback }) => {
  function selectChangeHandler(event) {
    filterCallback(parseInt(event.target.value));
  }

  const years = [];
  for (let year = new Date().getFullYear(); year >= 2019; year--) {
    years.push(year);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filteredYear} onChange={selectChangeHandler}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
