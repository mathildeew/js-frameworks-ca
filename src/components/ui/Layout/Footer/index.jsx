import { Link } from "react-router-dom";
import { FooterContainer } from "./FooterContainer";

export default function Footer() {
  return (
    <FooterContainer>
      <p>Brand</p>
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
