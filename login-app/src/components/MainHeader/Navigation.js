import { Fragment } from "react";
import styles from "./Navigation.module.css";
import AuthContext from "../../contexts/auth-context";

const Navigation = ({ onLogout }) => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <nav className={styles.nav}>
            <ul>
              {context.isLoggedIn && (
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
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
