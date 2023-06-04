import styled from "styled-components";

export const CartContainer = styled.div`
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
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
