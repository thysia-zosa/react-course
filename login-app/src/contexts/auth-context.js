import React, { useEffect, useState } from "react";

import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

const kIsLoggedIn = "isLoggedIn";

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(kIsLoggedIn) === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  function loginHandler(email, password) {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem(kIsLoggedIn, "1");
    setIsLoggedIn(true);
  }

  function logoutHandler() {
    localStorage.removeItem(kIsLoggedIn);
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value=
      {{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}>
      {children},
    </AuthContext.Provider>
  );
};

export default AuthContext;
