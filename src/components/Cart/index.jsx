import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCart, useDispatchCart } from "../../context/Context";
import { CartContainer, EmptyCart, TotalContainer } from "./Cart.styled";
import { CartItemContainer } from "./CartItem/CartItem.styled";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";

export function Cart() {
  const cartStorage = useCart();
  const dispatch = useDispatchCart();

  const itemsInCart = cartStorage.item;
  if (itemsInCart.length === 0) {
    return (
      <EmptyCart>
        <h1>Cart</h1>
        <p>
          Your cart is empty. Add something to the shopping cart to proceed to
          checkout.
        </p>
      </EmptyCart>
    );
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="icon"
            type="image/svg+xml"
            href="/src/assets/logo-sm.svg"
          />
          <title>Sjåpp - Cart</title>
        </Helmet>
      </HelmetProvider>

      <CartContainer>
        <h1>Your cart</h1>
        {itemsInCart.map((product) => (
          <CartItemContainer key={product.id}>
            <CartItem product={product}></CartItem>
          </CartItemContainer>
        ))}
        <TotalContainer>
          <p>Total: $ {cartStorage.total}</p>
          <BaseButton onClick={() => dispatch({ type: "CLEAR", payload: [] })}>
            <Link to="/checkoutsuccess">Proceed to checkout</Link>
          </BaseButton>
        </TotalContainer>
      </CartContainer>
    </>
  );
}
