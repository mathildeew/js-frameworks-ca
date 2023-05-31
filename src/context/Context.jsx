import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Cart } from "../components/Cart";
import reducer from "./Reducer";

export const CartContext = createContext();

export const Context = ({ children }) => {
  const state = 0;
  const dispatch = 0;

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
