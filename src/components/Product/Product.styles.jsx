import styled from "styled-components";

export const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;

  img {
    height: 300px;
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

  .percentageContainer {
    position: relative;

    span {
      color: var(--color-primary);
      font-size: 1.8rem;
      font-weight: 600;
      background-color: var(--color-secondary04);
      position: absolute;
      bottom: 20px;
      right: 20px;
      padding: 10px;
    }
  }

  .tagContainer {
    display: flex;
    align-items: center;
    border: 2px solid green;
    margin-bottom: 20px;

    svg {
      margin-right: 8px;
    }

    p {
      margin-bottom: 0;
    }

    p:nth-child(2) {
      margin-right: 5px;
    }
  }

  @media (min-width: 500px) {
    img {
      height: 450px;
    }
  }
`;
