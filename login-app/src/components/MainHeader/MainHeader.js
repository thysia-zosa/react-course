import Navigation from "./Navigation";
import styles from "./MainHeader.module.css";

const MainHeader = ({ isAuthenticated, onLogout }) => {
  return (
    <header className={styles.mainHeader}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
