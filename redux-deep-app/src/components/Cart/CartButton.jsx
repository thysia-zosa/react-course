import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = (event) => {
    event.preventDefault();
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default CartButton;
