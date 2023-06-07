import styled from "styled-components";
import { displayFlex } from "../../../styles/mixins";

export const LoaderContainer = styled.div`
  height: 50%;
  margin: 0 auto;

  ${displayFlex({ direction: "column", align: "center", justify: "center" })}

  p {
    font-size: 1.8rem;
    margin-top: 20px;
  }

  span {
    background-color: var(--color-secondary);
    width: 60px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 50%;
    animation: rotation 1s linear infinite;

    &:after {
      content: "";
      background-color: var(--color-primary);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      box-sizing: border-box;
      position: absolute;
      top: 15px;
      left: 4px;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
