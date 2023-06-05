import styled from "styled-components";

export const CartContainer = styled.section`
  margin: 0 auto;
  max-width: 450px;
  display: flex;
  flex-direction: column;

  a {
    color: var(--color-white);
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 50px;

  p {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 40px;
  }
`;

export const EmptyCart = styled.section`
  max-width: 450px;
  margin: auto;
`;
