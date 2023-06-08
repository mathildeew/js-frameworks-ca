import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart, useDispatchCart } from "../../context/Context";
import { CartContainer, EmptyCart } from "./Cart.styled";
import CartItem from "./CartItem/index";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";
import { CartItemContainer } from "./CartItem/CartItem.styled";

export default function Cart() {
  const cartStorage = useCart();
  const dispatch = useDispatchCart();

  const navigate = useNavigate();
  const [btnText, setBtnText] = useState("Proceed to checkout");
  const [btnProps, setBtnProps] = useState(false);

  function checkout() {
    setBtnText("Sending to checkout");
    setBtnProps(true);

    setTimeout(() => {
      dispatch({ type: "CLEAR", payload: [] });
      navigate("/checkoutsuccess");
    }, 1000);
  }

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
          <BaseButton onClick={checkout} isClicked={btnProps}>
            {btnText}
          </BaseButton>
        </div>
      </CartContainer>
    </>
  );
}
