import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { StrictMode, useContext } from "react";
import CartContext from "../../../contexts/cart-context";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <StrictMode>
      <div
        className={styles.backdrop}
        onClick={useContext(CartContext).toggleCart}
      />
      <div className={styles.modal}>{children}</div>
    </StrictMode>,
    document.getElementById("modals")
  );
};

export default Modal;
