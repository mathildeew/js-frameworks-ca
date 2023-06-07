import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const CheckoutContainer = styled.section`
  max-width: 450px;
  height: 100%;
  border: 2px solid var(--color-primary);
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 15px;
  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "unset",
  })}

  svg {
    height: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 30px;
  }

  a {
    color: var(--color-primary);
    font-size: 1.6rem;
    font-weight: 600;
    text-decoration: underline;
  }
`;
