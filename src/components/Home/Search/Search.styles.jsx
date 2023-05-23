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

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;
