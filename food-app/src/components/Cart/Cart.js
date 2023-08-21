import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import { useContext } from "react";
import CartContext from "../../contexts/cart-context";

const Cart = ({ hideCart }) => {
  const cartContext = useContext(CartContext);

  const items = cartContext.items;

  const total = items.reduce((a, b) => a + b.amount * b.price, 0).toFixed(2);

  return (
    <Modal hideModal={hideCart}>
      <ul className={styles.cartItems}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onRemove={() => cartContext.removeItem(item.id)}
            onAdd={() => cartContext.addItem({...item, amount:1})}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={hideCart}>
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
