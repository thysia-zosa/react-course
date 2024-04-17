import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../contexts/cart-context";

const MealItem = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext);

  function addItemHandler(amount) {
    cartContext.addItem({ id: id, name: name, price: price, amount: amount });
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <MealItemForm id={id} onAddToCart={addItemHandler} />
    </li>
  );
};

export default MealItem;
