import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

// https://github.com/piyush-eon/React-shopping-cart-context-with-reducer/blob/master/src/context/Reducers.js

// https://github.com/thapatechnical/thapareactecom/blob/ecom_cart_final_v53/src/context/cart_context.js

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  let item;
  let productIndex;
  let newTotal;

  switch (action.type) {
    case "ADD":
      return { ...state, item: [...state.item, { ...action.payload, qty: 1 }] };

    case "REMOVE":
      item = [...state.item];
      productIndex = item.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        if (item[productIndex].quantity > 1) {
          item = [
            ...item.slice(0, productIndex),
            {
              ...item[productIndex],
              quantity: item[productIndex].quantity - 1,
            },
            ...item.slice(productIndex + 1),
          ];
        } else {
          item = [
            ...item.slice(0, productIndex),
            ...item.slice(productIndex + 1),
          ];
        }
      }
      newTotal = 0;
      // cart.reduce((currentTotal, product) => {
      //   currentTotal += product.discountedPrice * product.quantity;
      //   return currentTotal;
      // }, 0);
      return { ...state, item: item, total: newTotal };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialState = { item: [], total: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
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
