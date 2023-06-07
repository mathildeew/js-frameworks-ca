import styled from "styled-components";

export const SearchInput = styled.div`
  background: var(--color-white);
  border: 2px solid var(--color-primary);
  width: 300px;
  height: 35px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;

  input {
    font-size: 1.6rem;
    background: none;
    border: none;
    outline: none;
    padding: 10px;
    width: 100%;
  }

  input::placeholder {
    color: var(--color-primary);
    font-size: 1.6rem;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  svg {
    color: var(--color-primary);
    font-size: 2rem;
    margin-right: 12px;
  }
`;
