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
          <FontAwesomeIcon icon={Icons.faBagShopping} size="lg" />
          <FontAwesomeIcon icon={Icons.faBars} size="lg" onClick={onShowMenu} />
        </IconsHeader>
      </HeaderContent>
      {showMenu ? <Nav /> : true}
    </HeaderContainer>
  );
}
