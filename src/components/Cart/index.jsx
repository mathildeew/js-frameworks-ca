import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../../context/Context";
import { BaseButton } from "../ui/Basebutton.styles";

export function Cart() {
  const cartState = useCart();
  console.log(cartState);

  return (
    <main>
      <h1>Your cart</h1>
      <CartContainer>
        <CartItemContainer>
          <div>
            <img src="../../assets/0-usb-plug.jpeg" />
            <div>
              <h2>Product 1</h2>
              <p>$ 2079.99</p>
              <p>Remove product</p>
            </div>
          </div>
          <hr />
        </CartItemContainer>
        <TotalContainer>
          <p>Total: $ 2079.99</p>
        </TotalContainer>
        <BaseButton>
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
