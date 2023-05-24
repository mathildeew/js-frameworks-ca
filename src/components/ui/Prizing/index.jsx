import styled from "styled-components";

export const ProductsPrize = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ProductPrizing = styled.div``;

export const ProductsDiscount = styled.p`
  color: var(--color-discount);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ProductsOldPrice = styled.p`
  font-size: 14px;
  text-decoration: line-through;
  margin-bottom: 10px;
`;

export const ProductsPriceOff = styled.p``;

export const DiscountContainer = styled.div`
  display: flex;
  align-items: center;

  p:first-child {
    margin-right: 15px;
  }

  :nth-child(1) {
    font-weight: 700;
  }
`;
