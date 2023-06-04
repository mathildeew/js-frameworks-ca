import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    background-color: var(--color-white);
    border: 1.5px solid var(--color-primary);
    outline: none;
    margin-bottom: 10px;
  }

  input {
    height: 35px;
  }
`;
