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
  right: 0px;
  transition: all 0.4s ease;
  overflow: hidden;

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

  &.inactive {
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transition: all 0.4s ease;
  }
`;
