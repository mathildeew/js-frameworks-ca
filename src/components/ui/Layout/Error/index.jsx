import styled from "styled-components";

export const Error = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 20px;
    width: 200px;
    height: auto;
  }

  p {
    margin-bottom: 20px;
  }

  a {
    color: var(--color-primary);
    text-decoration: underline;
  }
`;
