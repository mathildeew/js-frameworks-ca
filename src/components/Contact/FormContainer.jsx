import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    border: 1.5px solid var(--color-secondary);
    outline: none;
    margin-bottom: 5px;
  }
`;
