import styled from "styled-components";

export const ProductsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;
