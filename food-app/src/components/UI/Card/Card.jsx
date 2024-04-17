import styles from "./Card.module.css";

const Card = ({ className, children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
