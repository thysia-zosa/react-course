import { Fragment, useContext } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Layout/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";
import CartContext from "./contexts/cart-context";

function App() {
  const cartContext = useContext(CartContext);
  
  return (
    <Fragment>
      {cartContext.isCartShown && <Cart />}
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </Fragment>
  );
}

export default App;
