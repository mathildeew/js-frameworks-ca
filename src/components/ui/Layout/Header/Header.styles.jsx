import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: var(--color-primary);
  background-color: var(--color-primary);
  height: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  svg {
    height: 30px;
  }
`;

export const HeaderContent = styled.div`
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
    margin-top: 10px;
    margin-right: -10px;
  }
`;

export const Logo = styled.span`
  font-size: 25px;
  font-family: ${({ theme: { font } }) => font.primary};
  text-decoration: none;
`;

export const MenuIconContainer = styled.div`
  background: var(--color-secondary);
  height: 100%;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: var(--color-primary);
  }
`;
