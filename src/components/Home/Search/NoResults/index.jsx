import { NoResultsContainer } from "./NoResults.styles";

export default function NoResults() {
  return (
    <NoResultsContainer>
      <p>No results match you search criteria</p>
      <img src="/images/error.png" />
    </NoResultsContainer>
  );
}
