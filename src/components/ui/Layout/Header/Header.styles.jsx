import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: var(--color-primary);
  background-color: var(--color-secondary);
  height: 50px;
  margin-bottom: 50px;
`;

export const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
`;

export const Logo = styled.span`
  color: var(--color-primary);
  font-size: 25px;
  font-family: ${({ theme: { font } }) => font.primary};
  text-decoration: none;
  // padding-left: 12px;
`;

export const IconsHeader = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;

  svg {
    height: 25px;
  }

  .fa-layers-counter {
    font-size: 40px;
    margin-top: 10px;
    margin-right: -10px;
  }
`;
