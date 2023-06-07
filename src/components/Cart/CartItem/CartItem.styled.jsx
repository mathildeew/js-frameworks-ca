import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;

  .cartItem {
    display: flex;
  }

  img {
    width: 100px;
    height: 100%;
    object-fit: cover;
    margin-right: 10px;
  }

  svg {
    font-size: 2.3rem;
    color: var(--color-primary);
  }

  hr {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .itemDetails {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .itemPrice {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    div {
      display: flex;
      flex-direction: column;
    }

    .orgPrice,
    .newPrice {
      font-size: 1.6rem;
    }

    .newPrice {
      color: var(--color-discount);
    }

    .oldPrice {
      font-size: 1.2rem;
      text-decoration: line-through;
    }
  }

  .cartButtons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;
