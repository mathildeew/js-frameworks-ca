import styled from "styled-components";

export const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 10px;
  }
`;

export const ProductsGridPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ProductsGridDiscount = styled.p`
  color: var(--color-discount);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ProductsGridOldPrice = styled.p`
  font-size: 14px;
  text-decoration: line-through;
  margin-bottom: 10px;
`;
