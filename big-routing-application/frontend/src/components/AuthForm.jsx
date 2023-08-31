import { Fragment } from "react";
import { Form, Link, useSearchParams } from "react-router-dom";
import styles from "./EventForm.module.css";

const AuthForm = () => {
  // const [isLogin, setIsLogin] = useState(true);

  // const switchAuthHandler = () => {
  //   setIsLogin((isCurrentLogin) => !isCurrentLogin);
  // };

  const [searchParams /* , setSearchParams */] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

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
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </Fragment>
  );
};
export default AuthForm;
