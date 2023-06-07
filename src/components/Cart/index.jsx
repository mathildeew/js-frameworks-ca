import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCart, useDispatchCart } from "../../context/Context";
import { CartContainer, EmptyCart } from "./Cart.styled";
import CartItem from "./CartItem/index";
import { Link } from "react-router-dom";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";
import { CartItemContainer } from "./CartItem/CartItem.styled";

export default function Cart() {
  const cartStorage = useCart();
  const dispatch = useDispatchCart();

  const itemsInCart = cartStorage.item;
  if (itemsInCart.length === 0) {
    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>Sjåpp - Cart - {`(0) items`}</title>
          </Helmet>
        </HelmetProvider>

        <EmptyCart>
          <h1>Cart</h1>
          <p>
            Your cart is empty. Add something to the shopping cart to proceed to
            checkout.
          </p>
          <BaseButton>
            <Link to="/">Go shopping</Link>
          </BaseButton>
        </EmptyCart>
      </>
    );
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sjåpp - Cart {`(${itemsInCart.length} items)`}</title>
        </Helmet>
      </HelmetProvider>

      <CartContainer>
        <h1>Your cart</h1>
        <CartItemContainer>
          {itemsInCart.map((product) => (
            <CartItem key={product.id} product={product}></CartItem>
          ))}
        </CartItemContainer>
        <div className="totalContainer">
          <p>Total: $ {cartStorage.total}</p>
          <BaseButton onClick={() => dispatch({ type: "CLEAR", payload: [] })}>
            <Link to="/checkoutsuccess">Proceed to checkout</Link>
          </BaseButton>
        </div>
      </CartContainer>
    </>
  );
}
