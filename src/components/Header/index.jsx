import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  HeaderContainer,
  HeaderContent,
  IconsHeader,
  Logo,
} from "./Header.styles";
import { useState } from "react";
import { Nav } from "./Nav";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function onShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">Brand</Logo>
        <IconsHeader>
          <span className="fa-layers fa-fw fa-lg">
            <FontAwesomeIcon icon={Icons.faBagShopping} />
            <span className="fa-layers-counter">10</span>
          </span>
          <FontAwesomeIcon icon={Icons.faBars} onClick={onShowMenu} />
        </IconsHeader>
      </HeaderContent>
      {showMenu ? <Nav /> : true}
    </HeaderContainer>
  );
}
