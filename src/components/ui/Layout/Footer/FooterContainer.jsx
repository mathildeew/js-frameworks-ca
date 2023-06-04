import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--color-primary);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  font-family: Open Sans, sans-serif;
  padding: 12px;

  a,
  p {
    color: var(--color-white);
  }

  ul {
  }

  li:first-child {
    margin-bottom: 15px;
  }
`;
