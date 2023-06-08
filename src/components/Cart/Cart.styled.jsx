import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const CartContainer = styled.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  ${displayFlex({
    direction: "column",
    align: "unset",
    justify: "unset",
  })}

  a {
    color: var(--color-white);
  }

  .totalContainer {
    max-width: 450px;
    margin-bottom: 50px;
    ${displayFlex({
      direction: "column",
      align: "flex-end",
      justify: "unset",
    })}

    p {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 40px;
    }
  }
`;

export const EmptyCart = styled.section`
  max-width: 450px;

  p {
    margin-bottom: 20px;
  }
`;
