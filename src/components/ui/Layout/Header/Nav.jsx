import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIconContainer } from "./Header.styles";
import { NavContainer } from "./Nav.styles";

export function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  function onShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <MenuIconContainer>
      <FontAwesomeIcon icon={faBars} onClick={onShowMenu} />
      <NavContainer className={showMenu ? "active" : "inactive"}>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      </NavContainer>
    </MenuIconContainer>
  );
}
