import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

// https://github.com/piyush-eon/React-shopping-cart-context-with-reducer/blob/master/src/context/Reducers.js

// https://github.com/thapatechnical/thapareactecom/blob/ecom_cart_final_v53/src/context/cart_context.js

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
