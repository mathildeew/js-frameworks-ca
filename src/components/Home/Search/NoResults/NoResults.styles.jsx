import styled from "styled-components";
import { displayFlex } from "../../../../styles/mixins";

export const NoResultsContainer = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 15px;
  ${displayFlex({
    direction: "column",
    align: "center",
    justify: "unset",
  })}

  p {
    font-weight: 600;
    margin-bottom: 20px;
  }

  img {
    width: 100px;
    height: auto;
    margin: 0 auto;
  }
`;
