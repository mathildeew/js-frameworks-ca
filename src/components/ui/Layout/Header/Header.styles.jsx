import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: var(--color-primary);
  background-color: var(--color-primary);
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .headerLeft {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    padding-left: 25px;

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
