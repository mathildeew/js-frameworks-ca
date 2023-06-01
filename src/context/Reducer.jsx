 default function reducer(state, action) {
  let price = action.payload.price;
  let total = state.total;

  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
        total: total + price,
      };

    case "clearCart":
      return { cart: [], total: 0 };

    default:
      return state;
  }
}
