import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const SearchInput = styled.div`
  background: var(--color-white);
  border: 2px solid var(--color-primary);
  width: 300px;
  height: 35px;
  border-radius: 4px;
  margin-bottom: 30px;
  ${displayFlex({ direction: "row", align: "center", justify: "space-around" })}

  input {
    font-size: 1.6rem;
    background: none;
    width: 100%;
    border: none;
    padding: 10px;
    outline: none;
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
