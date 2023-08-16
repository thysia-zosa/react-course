import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ errorMessage, removeCallback }) => {
  return (
    <div className={styles.errorModal} onClick={removeCallback}>
      <Card
        className={styles.card}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles.message}>
          <p>{errorMessage}</p>
          <div className={styles.actions}>
            <Button type="Button" title="Okay" clickCallback={removeCallback} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
