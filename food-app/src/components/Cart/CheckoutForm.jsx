import { useRef, useState } from "react";
import styles from "./CheckoutForm.module.css";

const isEmpty = (value) => value.trim() !== "";
const isFourChars = (value) => /[0-9]{4}/.test(value);

const CheckoutForm = ({ cancelCallback, submitCallback }) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postal = postalInputRef.current.value;
    const city = cityInputRef.current.value;

    const nameIsValid = isEmpty(name);
    const streetIsValid = isEmpty(street);
    const postalIsValid = isFourChars(postal);
    const cityIsValid = isEmpty(city);

    setFormInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    submitCallback({
      name,
      street,
      postal,
      city,
    });
  };

  const nameClasses = `${styles.control} ${
    formInputValidity.name ? "" : styles.invalid
  }`;
  const streetClasses = `${styles.control} ${
    formInputValidity.street ? "" : styles.invalid
  }`;
  const postalClasses = `${styles.control} ${
    formInputValidity.postal ? "" : styles.invalid
  }`;
  const cityClasses = `${styles.control} ${
    formInputValidity.city ? "" : styles.invalid
  }`;

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!formInputValidity.postal && <p>Please enter a valid postal code.</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={cancelCallback}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
