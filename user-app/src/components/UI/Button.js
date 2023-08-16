import styles from "./Button.module.css";

const Button = ({ type, className, title }) => {
  return <button className={`${styles.button} ${className}`} type={type}>{title}</button>;
};

export default Button;
