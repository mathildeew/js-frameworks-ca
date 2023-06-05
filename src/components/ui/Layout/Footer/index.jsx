import { Link } from "react-router-dom";
import { FooterContainer, FooterContent } from "./FooterContainer";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Link to="/">
          <img src="../../../../../public/images/logo-lg.svg" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      </FooterContent>
    </FooterContainer>
  );
}
