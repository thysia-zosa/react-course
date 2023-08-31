import { Fragment, useState } from "react";
import { Form } from "react-router-dom";
import styles from "./EventForm.module.jsx";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthHandler = () => {
    setIsLogin((isCurrentLogin) => !isCurrentLogin);
  };

  return (
    <Fragment>
      <Form method="post" className={styles.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </p>
        <div className={styles.actions}>
          <button type="button" onClick={switchAuthHandler}>
            {isLogin ? "Create new user" : "Login"}
          </button>
          <button>Save</button>
        </div>
      </Form>
    </Fragment>
  );
};
export default AuthForm;
