import { kError, kSuccess } from "../utils/constants";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://loginappflutterhome.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error(`Fetching cart data failed: ${response.status}`);
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: kError,
          title: "Error!",
          message: error.message ?? "An error occurred.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  // return { type: "", payload: { some: "thing", cartData } }; we don't have to write this
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://loginappflutterhome.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error(`Sendind cart data failed: ${response.status}`);
      }

      // const responseData = await response.json();
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: kSuccess,
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: kError,
          title: "Error!",
          message: error.message ?? "An error occurred.",
        })
      );
    }
  };
};
