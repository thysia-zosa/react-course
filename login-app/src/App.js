import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

const kIsLoggedIn = "isLoggedIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(kIsLoggedIn) === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem(kIsLoggedIn, '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(kIsLoggedIn);
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {isLoggedIn ? (
          <Home onLogout={logoutHandler} />
        ) : (
          <Login onLogin={loginHandler} />
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
