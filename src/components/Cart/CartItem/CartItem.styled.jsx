import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const CartItemContainer = styled.div`
  width: 100%;
  max-width: 450px;
  height: 100%;
  margin-top: 20px;
  ${displayFlex({ direction: "column", align: "unset", justify: "unset" })}

  .cartItem {
    display: flex;
  }

  .cartItemTitle {
    ${displayFlex({
      direction: "row",
      align: "unset",
      justify: "space-between",
    })}
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
    ${displayFlex({
      direction: "column",
      align: "unset",
      justify: "space-around",
    })}
  }

  .itemPrice {
    margin-bottom: 20px;
    ${displayFlex({
      direction: "row",
      align: "unset",
      justify: "space-between",
    })}

    div {
      ${displayFlex({
        direction: "column",
        align: "unset",
        justify: "unset",
      })}
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
    ${displayFlex({
      direction: "row",
      align: "center",
      justify: "unset",
    })}

    span {
      font-size: 2rem;
      font-weight: 600;
      margin-left: 15px;
      margin-right: 15px;
    }
  }
`;
