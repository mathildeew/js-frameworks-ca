import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCart, useDispatchCart } from "../../context/Context";
import { CartContainer, TotalContainer } from "./Cart.styled";
import { CartItemContainer } from "./CartItem/CartItem.styled";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";

export function Cart() {
  const cartStorage = useCart();
  const dispatch = useDispatchCart();

  const itemsInCart = cartStorage.item;
  console.log(itemsInCart);
  if (itemsInCart.length === 0) {
    return (
      <section>
        <h1>Cart</h1>
        <p>
          Your cart is empty. Add something to the shopping cart to proceed to
          checkout.
        </p>
      </section>
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

      <h1>Your cart</h1>
      <CartContainer>
        {itemsInCart.map((product) => (
          <CartItemContainer key={product.id}>
            <CartItem product={product}></CartItem>
          </CartItemContainer>
        ))}
        <TotalContainer>
          <p>Total: $ {cartStorage.total}</p>
        </TotalContainer>
        <BaseButton onClick={() => dispatch({ type: "CLEAR", payload: [] })}>
          <Link to="/checkoutsuccess">Proceed to checkout</Link>
        </BaseButton>
      </CartContainer>
    </>
  );
}
