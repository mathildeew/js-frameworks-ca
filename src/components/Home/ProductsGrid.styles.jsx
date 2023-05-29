import styled from "styled-components";

export const ProductsGridContainer = styled.section`
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

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
