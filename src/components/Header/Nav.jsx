import { Link } from "react-router-dom";
import { NavContainer } from "./NavContainer";

export function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/contactus">Contact us</Link>
        </li>
      </ul>
    </NavContainer>
  );
}
