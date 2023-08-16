import styles from "./Button.module.css";

const Button = ({ className, title }) => {
  return <button className={`${styles.button} ${className}`}>{title}</button>;
};

export default Button;
