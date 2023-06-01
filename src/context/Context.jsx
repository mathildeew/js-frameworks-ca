import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Cart } from "../components/Cart";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  let productIndex;
  let newTotal;
  let cart;
  let qty;

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: +1 }],
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialCartState = { cart: [], total: 0, qty: 0 };

  const [state, dispatch] = useReducer(reducer, initialCartState);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(state));
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
