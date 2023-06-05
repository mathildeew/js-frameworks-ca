import styled from "styled-components";

export const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;

  img {
    height: 280px;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }

  p {
    margin-bottom: 10px;
  }

  hr {
    margin-bottom: 30px;
  }
`;
