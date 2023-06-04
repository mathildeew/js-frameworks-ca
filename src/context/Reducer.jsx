export function reducer(state, action) {
  let products = state.item;
  let addedProduct = action.payload;
  let newTotal;
  const totalProductPrice = addedProduct.qty * addedProduct.discountedPrice;
  const sameProduct = products.find((item) => item.id === addedProduct.id);

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
}
