import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import CartContext from "../../contexts/cart-context";

const HeaderCartButton = ({ showCart }) => {
  const cartContext = useContext(CartContext);
  const itemCount = cartContext.items.reduce((a, b) => a + b.amount, 0);

  return (
    <button className={styles.button} onClick={showCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
