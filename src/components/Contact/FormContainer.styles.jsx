import styled from "styled-components";
import { displayFlex } from "../../styles/mixins";

export const ContactContainer = styled.section`
  font-size: 1.6rem;
  margin: 0 auto;
  width: 100%;
  max-width: 450px;
  ${displayFlex({ direction: "column", align: "center" })}
`;

export const FormContainer = styled.form`
  width: 100%;
  ${displayFlex({ direction: "column", align: "unset" })}

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

  button {
    margin: 0 auto;
    padding-top: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
  }
`;
