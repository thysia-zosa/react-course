import { createContext, useState } from "react";

const CartContext = createContext({ isCartShown: false, toggleCart: () => {} });

export const CartContextProvider = ({ children }) => {
  const [isCartShown, setIsCartShown] = useState(false);

  function toggleCart() {
    console.log("here");
    setIsCartShown((prevValue) => !prevValue);
  }

  return (
    <CartContext.Provider
      value={{ isCartShown: isCartShown, toggleCart: toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
