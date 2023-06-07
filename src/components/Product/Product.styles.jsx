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

  .percentageContainer {
    position: relative;

    span {
      color: var(--color-primary);
      font-size: 1.8rem;
      font-weight: 600;
      background-color: var(--color-secondary04);
      border-radius: 4px;
      padding: 15px;
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }

  p {
    margin-bottom: 10px;
  }

  hr {
    margin-bottom: 30px;
  }

  .ratingContainer {
    font-size: 1.6rem;
    width: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .productPricing {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    .orgPrice,
    .newPrice {
      font-size: 2.8rem;
      font-weight: 600;
    }

    .newPrice {
      color: var(--color-discount);
    }

    .oldPrice {
      font-size: 2rem;
      text-decoration: line-through;
    }
  }

  .tagContainer {
    color: var(--color-primary);
    font-size: 1.6rem;
    display: flex;
    align-items: center;
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

  .reviewsContainer {
    border: 2px solid var(--color-primary);
    margin-bottom: 20px;
    padding: 10px;

    .ratingContainer {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 500px) {
    min-width: 500px;

    img {
      height: 450px;
    }
  }
`;
