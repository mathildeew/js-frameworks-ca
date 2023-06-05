import styled from "styled-components";

export const Loader = styled.span`
  width: 60px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background-color: var(--color-secondary);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: 0 auto;
  margin-top: 50%;

  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 4px;
    top: 15px;
    background-color: var(--color-primary);
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
