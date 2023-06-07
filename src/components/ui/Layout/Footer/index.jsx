import { Link } from "react-router-dom";
import { FooterContainer } from "./Footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <img src="/images/logo-lg.svg" />
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
