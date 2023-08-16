import styles from "./Button.module.css";

const Button = ({ type, title, clickCallback }) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={clickCallback ? clickCallback : undefined}
    >
      {title}
    </button>
  );
};

export default Button;
