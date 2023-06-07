import { useState } from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./Nav.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavContainer>
      <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      <div
        className={showMenu ? "menuContainer active" : "menuContainer inactive"}
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setShowMenu(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contactus" onClick={() => setShowMenu(false)}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </NavContainer>
  );
}
