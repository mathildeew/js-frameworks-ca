import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { IconsHeader } from "./IconsHeader";
import { HeaderContainer } from "./HeaderContainer";
import { useState } from "react";
import { HeaderContent } from "./HeaderContent";
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
          <FontAwesomeIcon icon={Icons.faMagnifyingGlass} size="lg" />
          <FontAwesomeIcon icon={Icons.faBagShopping} size="lg" />
          <FontAwesomeIcon icon={Icons.faBars} size="lg" onClick={onShowMenu} />
        </IconsHeader>
      </HeaderContent>
      {showMenu ? <Nav /> : true}
    </HeaderContainer>
  );
}
