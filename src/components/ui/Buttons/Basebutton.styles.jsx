import styled from "styled-components";

export const BaseButton = styled.button`
  color: var(--color-white);
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: var(--color-primary);
  border-radius: 4px;
  border-style: none;
  max-width: 120px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 20px;

  color: ${(props) => (props.isWhite ? "var(--color-primary)" : "")};
  background-color: ${(props) => (props.isWhite ? "var(--color-white)" : "")};
  border: ${(props) => (props.isWhite ? "2px solid var(--color-primary)" : "")};

  color: ${(props) => (props.isClicked ? "var(--color-primary)" : "")};
  background-color: ${(props) =>
    props.isClicked ? "var(--color-secondary04)" : ""};

  a {
    color: var(--color-white);
    color: ${(props) => (props.isWhite ? "var(--color-primary)" : "")};
  }

  @media (min-width: 500px) {
    font-size: 1.6rem;
  }
`;
