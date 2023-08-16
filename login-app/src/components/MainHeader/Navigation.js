import { Fragment } from "react";
import styles from "./Navigation.module.css";

const Navigation = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {isLoggedIn && (
          <Fragment>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
