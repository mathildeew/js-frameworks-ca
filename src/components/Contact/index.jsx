import { useState } from "react";
import { ContactContainer } from "./FormContainer.styles";
import { FormContainer } from "./FormContainer.styles";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [btnText, setBtnText] = useState("Send");
  const [btnProps, setBtnProps] = useState(false);
  const [btnState, setBtnState] = useState(false);

  function onFormSubmit(event) {
    event.preventDefault();
    const body = { name, email, subject, message };
    setBtnText("Sending...");

    setTimeout(() => {
      console.log(body);
      setBtnText("Sent!");
      setBtnProps(true);
      setBtnState(true);
    }, 1000);
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

          <BaseButton isClicked={btnProps} disabled={btnState}>
            {btnText}
          </BaseButton>
        </FormContainer>
      </ContactContainer>
    </>
  );
}
