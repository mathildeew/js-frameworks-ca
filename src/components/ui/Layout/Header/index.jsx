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
import { Link } from "react-router-dom";
import { useCart } from "../../../../context/Context";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function onShowMenu() {
    setShowMenu(!showMenu);
  }

  function CartCounter() {
    const cartStorage = useCart() || [];

    return <span className="fa-layers-counter">{cartStorage.qty}</span>;
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to="/">Brand</Link>
        </Logo>
        <IconsHeader>
          <Link to="/cart">
            <span className="fa-layers fa-fw fa-lg">
              <FontAwesomeIcon icon={Icons.faBagShopping} />
              <CartCounter />
            </span>
          </Link>
          <FontAwesomeIcon icon={Icons.faBars} onClick={onShowMenu} />
        </IconsHeader>
      </HeaderContent>
      {showMenu ? <Nav /> : true}
    </HeaderContainer>
  );
}
