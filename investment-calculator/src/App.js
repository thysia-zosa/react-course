import { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/InvestmentForm/Form";
import Table from "./components/InvestmentTable/Table";

const App = () => {
  const [yearlyData, setYearlyData] = useState([]);
  function calculateHandler(userInput) {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const newYearlyData = []; // per-year results

    let currentSavings = userInput.currentSavings; // feel free to change the shape of this input object!
    // const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    // const expectedReturn = +userInput["expected-return"] / 100;
    // const duration = +userInput["duration"];
    let totalInterest = 0;
    let totalCapital = userInput.currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < userInput.duration; i++) {
      const yearlyInterest = currentSavings * userInput.expectedReturn;
      currentSavings += yearlyInterest + userInput.yearlyContribution;
      totalInterest += yearlyInterest;
      totalCapital += userInput.yearlyContribution;
      newYearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        yearNumber: i + 1,
        savings: parseFloat(currentSavings.toFixed(2)).toLocaleString(),
        interest: parseFloat(yearlyInterest.toFixed(2)).toLocaleString(),
        totalInterest: parseFloat(totalInterest.toFixed(2)).toLocaleString(),
        totalCapital: parseFloat(totalCapital.toFixed(2)).toLocaleString(),
        // year: i + 1,
        // yearlyInterest: yearlyInterest,
        // savingsEndOfYear: userInput.currentSavings,
        // yearlyContribution: userInput.yearlyContribution,
      });
    }
    setYearlyData(newYearlyData);

    // do something with yearlyData ...
  }

  return (
    <div>
      <Header />

      <Form submitCallback={calculateHandler} />
      {/* <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form> */}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {yearlyData.length === 0 ? (
        <h2>Calculate new Investment Table</h2>
      ) : (
        <Table yearlyData={yearlyData} />
      )}
      {/* <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default App;
