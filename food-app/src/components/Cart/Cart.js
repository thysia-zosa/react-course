import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import { useContext } from "react";
import CartContext from "../../contexts/cart-context";

const DUMMY_DATA = [
  {
    id: 1,
    price: 22.59,
    name: "Meal1",
    amount: 5,
  },
  {
    id: 2,
    price: 12.69,
    name: "Meal2",
    amount: 2,
  },
];

const Cart = ({ items = DUMMY_DATA }) => {
  const total = items.reduce((a, b) => a + b.amount * b.price, 0).toFixed(2);

  return (
    <Modal>
      <ul className={styles.cartItems}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onRemove={() => {}}
            onAdd={() => {}}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.buttonAlt}
          onClick={useContext(CartContext).toggleCart}
        >
          Close
        </button>
        <button
          className={styles.button}
          onClick={() => console.log("...Ordering")}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
