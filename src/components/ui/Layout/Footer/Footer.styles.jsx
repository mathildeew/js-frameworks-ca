import styled from "styled-components";
import { displayFlex } from "../../../../styles/mixins";

export const FooterContainer = styled.footer`
  font-size: 1.6rem;
  background: var(--color-primary);
  width: 100%;
  height: 100px;
  ${displayFlex({
    direction: "row",
    align: "center",
    justify: "space-around",
  })}

  li:first-child {
    margin-bottom: 15px;
  }

  a {
    color: var(--color-white);
  }
`;
