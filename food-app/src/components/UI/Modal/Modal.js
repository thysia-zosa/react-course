import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { StrictMode} from "react";

const Modal = ({ hideModal, children }) => {
  return ReactDOM.createPortal(
    <StrictMode>
      <div
        className={styles.backdrop}
        onClick={hideModal}
      />
      <div className={styles.modal}>{children}</div>
    </StrictMode>,
    document.getElementById("modals")
  );
};

export default Modal;
