import { Link } from "react-router-dom";
import { FooterContainer } from "./FooterContainer";

export default function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <img src="../../../../../src/assets/logo-lg.svg" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
      </ul>
    </FooterContainer>
  );
}
