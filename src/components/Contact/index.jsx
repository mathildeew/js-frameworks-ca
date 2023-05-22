import { FormContainer } from "./FormContainer";
import { BaseButton } from "../Basebutton.styles";

export function Contact() {
  return (
    <main>
      <h1>Contact us</h1>
      <FormContainer>
        <label htmlFor="name">Your name</label>
        <input placeholder="Your name" name="name" minLength={3} required />

        <label htmlFor="email">Your email</label>
        <input placeholder="Your email" name="email" type="email" required />

        <label htmlFor="subject">Subject</label>
        <input placeholder="Subject" name="subject" minLength={3} required />

        <label htmlFor="message">Your message</label>
        <textarea
          placeholder="Message"
          name="message"
          minLength={3}
          rows="7"
          required
        ></textarea>

        <BaseButton>Send</BaseButton>
      </FormContainer>
    </main>
  );
}
