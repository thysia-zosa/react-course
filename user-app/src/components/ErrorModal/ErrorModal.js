import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ErrorModal.module.css";
import { StrictMode } from "react";

const ErrorModal = ({ errorMessage, removeCallback }) => {
  return ReactDOM.createPortal(
    <StrictMode>
      <div
        className={styles.errorModal}
        onClick={(event) => {
          if (event.target.className === styles.errorModal) {
            removeCallback();
          }
        }}
      >
        <Card className={styles.card}>
          <div className={styles.header}>
            <h2>Invalid input</h2>
          </div>
          <div className={styles.message}>
            <p>{errorMessage}</p>
            <div className={styles.actions}>
              <Button
                type="Button"
                title="Okay"
                clickCallback={removeCallback}
              />
            </div>
          </div>
        </Card>
      </div>
    </StrictMode>,
    document.getElementById("overlay-root")
  );
};

export default ErrorModal;
