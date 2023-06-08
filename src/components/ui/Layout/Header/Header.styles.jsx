import styled from "styled-components";
import { displayFlex } from "../../../../styles/mixins";

export const HeaderContainer = styled.header`
  color: var(--color-primary);
  background-color: var(--color-primary);
  height: 50px;
  width: 100vw;
  margin-bottom: 50px;
  ${displayFlex({ direction: "row", align: "unset", justify: "center" })}

  svg {
    height: 30px;
  }

  .logoLg {
    display: none;
  }

  @media (min-width: 768px) {
    .logoSm {
      display: none;
    }

    .logoLg {
      height: 40px;
      display: inline;
      padding-top: 2px;
    }
  }

  .headerContent {
    width: 100%;
    max-width: 850px;
    height: 100%;
    ${displayFlex({
      direction: "row",
      align: "center",
      justify: "space-between",
    })}
  }

  .headerLeft {
    height: 100%;
    width: 100%;
    padding-right: 30px;
    padding-left: 25px;
    ${displayFlex({
      direction: "row",
      align: "center",
      justify: "space-between",
    })}

    svg {
      color: var(--color-white);
    }

    .fa-layers {
      bottom: 4px;
    }

    .fa-layers-counter {
      color: var(--color-primary);
      font-size: 40px;
      font-weight: 600;
      background: var(--color-secondary);
      margin-top: 12px;
      margin-right: -10px;
    }
  }
`;
