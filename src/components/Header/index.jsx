import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { HeaderContainer } from "./HeaderContainer";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo href="/">Brand</Logo>
      <Nav>
        <FontAwesomeIcon icon={Icons.faMagnifyingGlass} size="lg" />
        <FontAwesomeIcon icon={Icons.faBagShopping} size="lg" />
        <FontAwesomeIcon icon={Icons.faBars} size="lg" />
      </Nav>
    </HeaderContainer>
  );
}
