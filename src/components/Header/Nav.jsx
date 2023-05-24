import { Link } from "react-router-dom";
import { NavContainer } from "./Nav.styles";

export function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
      </ul>
    </NavContainer>
  );
}
