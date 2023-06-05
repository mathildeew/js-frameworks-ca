import styled from "styled-components";

export const NavContainer = styled.nav`
  background: var(--color-secondary);
  font-family: Open Sans, sans-serif;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  position: absolute;
  width: 75%;
  top: 50px;
  right: 0;

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
