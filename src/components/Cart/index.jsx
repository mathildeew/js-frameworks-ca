import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCart, useDispatchCart } from "../../context/Context";
import { BaseButton } from "../ui/Basebutton.styles";

export default function CartItem({ product }) {
  const dispatch = useDispatchCart();

  return (
    <>
      <img src={product.imageUrl} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <button
          onClick={() => dispatch({ type: "DECREASE", payload: product })}
        >
          -
        </button>
        <button onClick={() => dispatch({ type: "REMOVE", payload: product })}>
          Remove product
        </button>
        <button onClick={() => dispatch({ type: "ADD", payload: product })}>
          +
        </button>
      </div>
      <hr />
    </>
  );
}

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
        <CartItemContainer>
          {itemsInCart.map((product) => (
            <CartItem product={product} key={product.id}></CartItem>
          ))}
        </CartItemContainer>
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

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItemContainer = styled.div`
  margin-bottom: 50px;

  img {
    width: 40%;
    height: 100px;
    object-fit: center;
  }

  div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  div div p:nth-child(2) {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  div div p:nth-child(3) {
    text-decoration: underline;
  }
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;

  p {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
