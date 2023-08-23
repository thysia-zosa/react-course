import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import { Fragment, useContext, useState } from "react";
import CartContext from "../../contexts/cart-context";
import CheckoutForm from "./CheckoutForm";
import useHttp from "../../hooks/use-http";

const Cart = ({ hideCart }) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { isLoading, error, sendRequest: orderMeals } = useHttp();
  const cartContext = useContext(CartContext);

  const items = cartContext.items;

  const total = items.reduce((a, b) => a + b.amount * b.price, 0).toFixed(2);

  const orderHandler = () => {
    setIsOrdering(true);
  };

  const submitOrderHandler = (userData) => {
    const orderData = {
      mealsOrdered: items,
      totalAmount: total,
      address: userData,
    };

    const handleOrderFeedback = (response) => {
      setDidSubmit(true);
      setIsOrdering(false);
      cartContext.clearCart();
    };

    orderMeals(
      {
        url: "https://loginappflutterhome.firebaseio.com/orders.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: orderData,
      },
      handleOrderFeedback
    );
  };

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles.buttonAlt} onClick={hideCart}>
        Close
      </button>
      <button className={styles.button} onClick={orderHandler}>
        Order
      </button>
    </div>
  );

  const cartModalContent = (
    <Fragment>
      <ul className={styles.cartItems}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onRemove={() => cartContext.removeItem(item.id)}
            onAdd={() => cartContext.addItem({ ...item, amount: 1 })}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      {isOrdering ? (
        <CheckoutForm
          cancelCallback={hideCart}
          submitCallback={submitOrderHandler}
        />
      ) : (
        modalActions
      )}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>{" "}
      <div className={styles.actions}>
        <button className={styles.button} onClick={hideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );

  const hasErrorModalContent = (
    <Fragment>
      <p>
        An error occurred while submitting your order. We appologize for your
        inconveniences.
      </p>{" "}
      <div className={styles.actions}>
        <button className={styles.button} onClick={hideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal hideModal={hideCart}>
      {!isLoading && !didSubmit && cartModalContent}
      {isLoading && isSubmittingModalContent}
      {didSubmit && !error && didSubmitModalContent}
      {didSubmit && error && hasErrorModalContent}
    </Modal>
  );
};

export default Cart;
