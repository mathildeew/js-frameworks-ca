import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCart, useDispatchCart } from "../../context/Context";
import { CartContainer, EmptyCart } from "./Cart.styled";
import { CartItem } from "./CartItem/index";
import { Link } from "react-router-dom";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";

export function Cart() {
  const cartStorage = useCart();
  const dispatch = useDispatchCart();

  const itemsInCart = cartStorage.item;
  if (itemsInCart.length === 0) {
    console.log(itemsInCart.length);

    return (
      <>
        <HelmetProvider>
          <Helmet>
            <link
              rel="icon"
              type="image/svg+xml"
              href="/src/assets/logo-sm.svg"
            />
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
          <link
            rel="icon"
            type="image/svg+xml"
            href="/src/assets/logo-sm.svg"
          />
          <title>Sjåpp - Cart {`(${itemsInCart.length} items)`}</title>
        </Helmet>
      </HelmetProvider>

      <CartContainer>
        <h1>Your cart</h1>

        {itemsInCart.map((product) => (
          <>
            <CartItem product={product}></CartItem>
            <hr />
          </>
        ))}

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
