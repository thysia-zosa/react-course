import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/cart-context";

const HeaderCartButton = ({ showCart }) => {
  const [isBumping, setIsBumping] = useState(false);

  const cartContext = useContext(CartContext);
  const itemCount = cartContext.items.reduce((a, b) => a + b.amount, 0);

  const buttonStyles = `${styles.button} ${isBumping ? styles.bump : ""}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setIsBumping(true);
    const timer = setTimeout(() => setIsBumping(false), 500);
    return () => clearTimeout(timer);
  }, [cartContext.items.length]);

  return (
    <button className={buttonStyles} onClick={showCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
