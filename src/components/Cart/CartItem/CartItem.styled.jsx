import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 40%;
    height: 150px;
    object-fit: cover;
  }

  svg {
    font-size: 2rem;
    color: var(--color-primary);
  }

  hr {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsRight = styled.div`
  font-weight: 600;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ItemDetails = styled.div``;

export const CartButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
