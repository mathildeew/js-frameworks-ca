import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: var(--color-primary);
  background-color: var(--color-primary);
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  span .fa-fw {
    height: fit-content;
  }

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
      display: inline;
      height: 40px;
      padding-top: 2px;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 850px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 25px;
  padding-left: 25px;

  .fa-layers-counter {
    color: var(--color-primary);
    font-size: 40px;
    font-weight: 600;
    background: var(--color-secondary);
    margin-top: 5px;
    margin-right: -10px;
  }
`;
