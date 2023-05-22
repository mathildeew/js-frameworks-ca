import { FormContainer } from "./FormContainer.styles";
import { BaseButton } from "../Basebutton.styles";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();

    const body = { name, email, subject, message };
    console.log(body);
  }

  function onNameChange(event) {
    setName(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onSubjectChange(event) {
    setName(event.target.value);
  }
  function onMessageChange(event) {
    setMessage(event.target.value);
  }

  return (
    <main>
      <h1>Contact us</h1>
      <FormContainer onSubmit={onFormSubmit}>
        <label htmlFor="name">Your name</label>
        <input name="name" minLength={3} onChange={onNameChange} required />

        <label htmlFor="email">Your email</label>
        <input name="email" type="email" onChange={onNameChange} required />

        <label htmlFor="subject">Subject</label>
        <input name="subject" minLength={3} onChange={onNameChange} required />

        <label htmlFor="message">Your message</label>
        <textarea
          name="message"
          minLength={3}
          rows="7"
          onChange={onNameChange}
          required
        ></textarea>

        <BaseButton>Send</BaseButton>
      </FormContainer>
    </main>
  );
}
