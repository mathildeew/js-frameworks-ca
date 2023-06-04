import { Link } from "react-router-dom";
import { useCart, useDispatchCart } from "../../context/Context";
import { BaseButton } from "../ui/Basebutton.styles";
import { CartContainer, TotalContainer } from "./Cart.styled";
import { CartItemContainer } from "./CartItem/CartItem.styled";
import CartItem from "./CartItem";

export function Cart() {
  const cartStorage = useCart();
  const dispatch = useDispatchCart();

  const itemsInCart = cartStorage.item;
  if (itemsInCart.length === 0) {
    return (
      <div>
        <h1>Your cart is empty</h1>
      </div>
    );
  }

  return (
    <main>
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
    </main>
  );
}
