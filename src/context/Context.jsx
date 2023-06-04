import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

// https://github.com/piyush-eon/React-shopping-cart-context-with-reducer/blob/master/src/context/Reducers.js

// https://github.com/thapatechnical/thapareactecom/blob/ecom_cart_final_v53/src/context/cart_context.js

const CartStateContext = createContext();
const CartDispatchContext = createContext();

export const initialState = { item: [], total: 0, qty: 0 };

const reducer = (state, action, initialState) => {
  let products = state.item;
  let addedProduct = action.payload;
  const totalProductPrice = addedProduct.qty * addedProduct.discountedPrice;
  const sameProduct = products.find((item) => item.id === addedProduct.id);
  let newTotal;
  let currentTotal;

  const addProduct = products.map((product) => {
    if (product.id === addedProduct.id) {
      return { ...product, qty: product.qty + 1 };
    } else {
      return product;
    }
  });

  const removeProduct = products.map((product) => {
    if (product.id === addedProduct.id) {
      return { ...product, qty: product.qty - 1 };
    } else {
      return product;
    }
  });

  switch (action.type) {
    case "ADD":
      if (!sameProduct) {
        newTotal = state.total + addedProduct.discountedPrice;
        return {
          item: [...products, { ...addedProduct, qty: 1 }],
          qty: state.qty + 1,
          total: Number(newTotal.toFixed(2)),
        };
      }

      newTotal = state.total + addedProduct.discountedPrice;
      return {
        item: addProduct,
        qty: state.qty,
        total: Number(newTotal.toFixed(2)),
      };

    case "REMOVE":
      newTotal = state.total - totalProductPrice;
      return {
        item: products.filter((item) => item.id !== addedProduct.id),
        qty: state.qty - 1,
        total: Number(newTotal.toFixed(2)),
      };

    case "DECREASE":
      if (addedProduct.qty === 1) {
        newTotal = state.total - addedProduct.discountedPrice;
        return {
          item: products.filter((item) => item.id !== addedProduct.id),
          qty: state.qty - 1,
          total: Number(newTotal.toFixed(2)),
        };
      }

      newTotal = state.total - addedProduct.discountedPrice;
      return {
        item: removeProduct,
        qty: state.qty,
        total: Number(newTotal.toFixed(2)),
      };

    case "CLEAR":
      return {
        item: [],
        total: 0,
        qty: 0,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
