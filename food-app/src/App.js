import { useState } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Layout/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./contexts/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  function toggleCart() {
    setIsCartShown((prevValue) => !prevValue);
  }

  return (
    <CartContextProvider>
      {isCartShown && <Cart hideCart={toggleCart} />}
      <Header showCart={toggleCart} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartContextProvider>
  );
}

export default App;
