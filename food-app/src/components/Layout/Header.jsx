import { Fragment } from "react";
import styles from "./Header.module.css";
import mainImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({showCart}) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCart={showCart} />
      </header>
      <div className={styles.mainImage}>
        <img src={mainImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
