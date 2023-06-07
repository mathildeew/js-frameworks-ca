import styled from "styled-components";

export const NavContainer = styled.nav`
  background: var(--color-secondary);
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .menuContainer {
    background: var(--color-secondary);
    width: 220px;
    height: 400px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 50px;
    right: 0px;
    transition: all 0.4s ease;

    ul {
      padding: 0;
      padding-right: 12px;
      margin-top: 30px;
    }

    li {
      margin-bottom: 15px;
    }

    a {
      color: var(--color-primary);
      font-weight: 600;
    }

    &.inactive {
      opacity: 0;
      visibility: hidden;
    }

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;
