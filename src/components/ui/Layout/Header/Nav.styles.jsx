import styled from "styled-components";

export const NavContainer = styled.nav`
  background: var(--color-secondary);
  font-family: Open Sans, sans-serif;
  display: flex;
  justify-content: flex-end;
  height: 50vh;
  position: absolute;
  width: 100%;

  ul {
    padding: 0;
    margin-top: 15px;
    padding-right: 12px;
  }
  li {
    margin-bottom: 15px;
  }

  a {
    color: var(--color-primary);
  }
`;
