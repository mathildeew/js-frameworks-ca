import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Cart } from "../components/Cart";

// https://github.com/piyush-eon/React-shopping-cart-context-with-reducer/blob/master/src/context/Reducers.js

// https://github.com/thapatechnical/thapareactecom/blob/ecom_cart_final_v53/src/context/cart_context.js

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
  // const itemInCart = state.item;
  // let payloadItem = action.payload;
  // const checkPayload = itemInCart.find((item) => item.id === payloadItem.id);

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        item: [...state.item, { ...action.payload }],
      };

    // case "REMOVE":
    //   return {};

    // case "INCREASE":
    //   return {};

    // case "DECREASE":
    //   return {};

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialCartState = { item: [], total: 0 };

  const [state, dispatch] = useReducer(reducer, initialCartState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartDispatchContext.Provider value={(state, dispatch)}>
      <CartStateContext.Provider value={(state, dispatch)}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
