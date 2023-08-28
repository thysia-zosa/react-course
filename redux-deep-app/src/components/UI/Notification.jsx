import { kError, kSuccess } from "../../utils/constants";
import styles from "./Notification.module.css";

const Notification = (props) => {
  let specialStyles = "";

  if (props.status === kError) {
    specialStyles = styles.error;
  }
  if (props.status === kSuccess) {
    specialStyles = styles.success;
  }

  const cssStyles = `${styles.notification} ${specialStyles}`;

  return (
    <section className={cssStyles}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
