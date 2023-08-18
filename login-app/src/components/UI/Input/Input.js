import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(
  ({ isValid, label, title, type, value, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    function activate() {
      inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
      return { focus: activate };
    });

    return (
      <div
        className={`${styles.control} ${
          isValid === false ? styles.invalid : ""
        }`}
      >
        <label htmlFor={label}>{title}</label>
        <input
          ref={inputRef}
          type={type}
          id={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
