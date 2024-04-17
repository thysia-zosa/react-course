import { Fragment } from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import styles from "./EventForm.module.css";

const AuthForm = () => {
  // const [isLogin, setIsLogin] = useState(true);

  // const switchAuthHandler = () => {
  //   setIsLogin((isCurrentLogin) => !isCurrentLogin);
  // };

  const data = useActionData();
  console.log('actionData', data)
  const navigation = useNavigation();

  const [searchParams /* , setSearchParams */] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <Fragment>
      <Form method="post" className={styles.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
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
          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </Fragment>
  );
};
export default AuthForm;
