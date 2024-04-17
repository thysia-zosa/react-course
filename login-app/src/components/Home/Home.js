import { useContext } from "react";
import AuthContext from "../../contexts/auth-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const authContext = useContext(AuthContext);

  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authContext.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
