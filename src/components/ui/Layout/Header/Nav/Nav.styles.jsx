import styled from "styled-components";
import { displayFlex } from "../../../../../styles/mixins";

export const NavContainer = styled.nav`
  background: var(--color-secondary);
  font-size: 1.6rem;
  width: 80px;
  height: 100%;
  position: relative;
  ${displayFlex({
    direction: "row",
    align: "center",
    justify: "center",
  })}

  .menuContainer {
    background: var(--color-secondary);
    width: 220px;
    height: 400px;
    position: absolute;
    top: 50px;
    right: 0px;
    transition: all 0.4s ease;
    ${displayFlex({
      direction: "row",
      align: "unset",
      justify: "flex-end",
    })}

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
