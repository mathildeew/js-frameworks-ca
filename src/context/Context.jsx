import { createContext } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { reducer } from "./reducer";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

export function CartProvider({ children }) {
  const initialState = { item: [], total: 0, qty: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
