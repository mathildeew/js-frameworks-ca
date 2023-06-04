import styled from "styled-components";

export const SearchInput = styled.div`
  background: var(--color-white);
  border: 2px solid var(--color-primary);
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  input {
    font-size: 14px;
    background: none;
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
  }

  input::placeholder {
    color: var(--color-primary);
    font-size: 14px;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  svg {
    color: var(--color-primary);
    margin-right: 12px;
  }
`;
