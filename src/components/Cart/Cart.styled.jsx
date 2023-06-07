import styled from "styled-components";

export const CartContainer = styled.section`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  a {
    color: var(--color-white);
  }

  .totalContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 30px;
    margin-bottom: 50px;

    p {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 40px;
    }
  }
`;

export const EmptyCart = styled.section`
  max-width: 450px;

  p {
    margin-bottom: 20px;
  }
`;
