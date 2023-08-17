import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./contexts/auth-context";
import { Fragment, useContext } from "react";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <Fragment>
      <MainHeader />
      <main>{authContext.isLoggedIn ? <Home /> : <Login />}</main>
    </Fragment>
  );
}

export default App;
