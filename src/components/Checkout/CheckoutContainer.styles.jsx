import styled from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 450px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--color-primary);
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
    color: var(--color-primary);
    font-weight: 600;
    text-decoration: underline;
  }
`;
