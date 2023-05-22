import styled from "styled-components";

export const Logo = styled.a`
  color: var(--color-primary);
  font-size: 25px;
  font-family: ${({ theme: { font } }) => font.primary};
  text-decoration: none;
`;
