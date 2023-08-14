import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({submitCallback}) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function inputChangeHandler(identifier, value) {
    switch (identifier) {
      case "title":
        return setEnteredTitle(value);
      case "amount":
        return setEnteredAmount(value);
      case "date":
        return setEnteredDate(value);
      default:
        break;
    }
  }

  /*
 * replaced with inputChangeHandler
 * 
  // Alternative approach with only one State
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  function titleChangeHandler(event) {
    setEnteredTitle((prevState) => {
      console.log(prevState);
      return event.target.value;
    });
    // setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  }
 */

  function submitHandler(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target).entries());
    formData.date = new Date(formData.date);
    // setEnteredTitle('');
    // setEnteredAmount('');
    // setEnteredDate('');
    submitCallback(formData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            // onChange={titleChangeHandler}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            // onChange={amountChangeHandler}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            // onChange={dateChangeHandler}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
