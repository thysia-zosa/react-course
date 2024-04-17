import { Fragment, useContext } from "react";
import styles from "./Navigation.module.css";
import AuthContext from "../../contexts/auth-context";

const Navigation = () => {
  const authContext = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      <ul>
        {authContext.isLoggedIn && (
          <Fragment>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={authContext.onLogout}>Logout</button>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
