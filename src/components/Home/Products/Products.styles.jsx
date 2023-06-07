import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;

  .productGrid {
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${displayFlex({
      direction: "column",
      align: "unset",
      justify: "space-between",
    })}
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .productsPrize,
  .productsDiscount {
    font-size: 2rem;
    font-weight: 600;
  }

  .productsDiscount {
    color: var(--color-discount);
    margin-bottom: 5px;
  }

  .productsOldprice {
    font-size: 1.6rem;
    text-decoration: line-through;
    margin-bottom: 8px;
  }

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;
