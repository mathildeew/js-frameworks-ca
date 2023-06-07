import { useState } from "react";
import { ContactContainer } from "./FormContainer.styles";
import { FormContainer } from "./FormContainer.styles";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === "name") {
      setName(value);
    }
    if (event.target.name === "email") {
      setEmail(value);
    }
    if (event.target.name === "subject") {
      setSubject(value);
    }
    if (event.target.name === "message") {
      setMessage(value);
    }
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="icon"
            type="image/svg+xml"
            href="/src/assets/logo-sm.svg"
          />
          <title>Sjåpp - Contact us</title>
        </Helmet>
      </HelmetProvider>

      <ContactContainer>
        <h1>Contact us</h1>
        <FormContainer onSubmit={onFormSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            name="name"
            minLength={3}
            onChange={onTextInputChange}
            required
          />

          <label htmlFor="email">Your email</label>
          <input
            name="email"
            type="email"
            onChange={onTextInputChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            minLength={3}
            onChange={onTextInputChange}
            required
          />

          <label htmlFor="message">Your message</label>
          <textarea
            name="message"
            minLength={3}
            rows="7"
            onChange={onTextInputChange}
            required
          ></textarea>

          <BaseButton>Send</BaseButton>
        </FormContainer>
      </ContactContainer>
    </>
  );
}
