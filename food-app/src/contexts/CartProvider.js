import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [] };

const kAdd = "ADD";
const kRemove = "REMOVE";

const cartReducer = (state, action) => {
  let updatedItems;
  switch (action.type) {
    case kAdd:
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingItem = state.items[itemIndex];
      if (!existingItem) {
        updatedItems = state.items.concat(action.item);
      } else {
        updatedItems = [...state.items];
        updatedItems[itemIndex] = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
      }
      return { items: updatedItems };
    case kRemove:
      const idIndex = state.items.findIndex((item) => item.id === action.id);
      if (state.items[idIndex].amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const existingItem = state.items[idIndex];
        updatedItems = [...state.items];
        updatedItems[idIndex] = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
      }
      return { items: updatedItems };
    default:
      return defaultCartState;
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addCartItem(item) {
    dispatchCartAction({ type: kAdd, item: item });
  }

  function removeCartItem(id) {
    dispatchCartAction({ type: kRemove, id: id });
  }

  const cartContext = {
    items: cartState.items,
    addItem: addCartItem,
    removeItem: removeCartItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
