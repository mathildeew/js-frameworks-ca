import styled from "styled-components";

export const FooterContainer = styled.footer`
  color: var(--color-white);
  background: var(--color-primary);
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  li:first-child {
    margin-bottom: 15px;
  }
`;
