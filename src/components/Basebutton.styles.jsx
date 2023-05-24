import styled from "styled-components";

export const BaseButton = styled.button`
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: var(--color-secondary);
  border-style: none;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 20px;

  background-color: ${(props) => (props.isWhite ? "var(--color-primary)" : "")};
  border: ${(props) =>
    props.isWhite ? "2px solid var(--color-secondary)" : ""};

  a {
    color: var(--color-primary);
    color: ${(props) => (props.isWhite ? "var(--color-secondary)" : "")};
  }
`;
