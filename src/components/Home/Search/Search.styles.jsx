import styled from "styled-components";

export const SearchInput = styled.div`
  background: var(--color-primary);
  border: 2px solid var(--color-secondary);
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    background: none;
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
  }
`;
