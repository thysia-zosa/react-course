import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  const amountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (enteredAmount < 1 || enteredAmount > 5) {
      return setIsAmountValid(false);
    }
    setIsAmountValid(true);
    onAddToCart(enteredAmount);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount:"
        input={{
          id: `amount_${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
