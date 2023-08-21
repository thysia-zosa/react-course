import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import CartContext from "../../contexts/cart-context";

const HeaderCartButton = () => {
  return (
    <button className={styles.button} onClick={useContext(CartContext).toggleCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
