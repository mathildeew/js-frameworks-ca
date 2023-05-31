import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-secondary);
  margin-bottom: 50px;
  padding: 15px;

  svg {
    height: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 30px;
  }

  a {
    color: var(--color-secondary);
    text-decoration: underline;
  }
`;
