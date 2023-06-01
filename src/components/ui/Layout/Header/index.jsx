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
import { useEffect } from "react";
import { useCart } from "../../../../context/Context";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function onShowMenu() {
    setShowMenu(!showMenu);
  }

  function CartCounter() {
    const itemsInCart = useCart();

    return <span className="fa-layers-counter">{itemsInCart.length}</span>;
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to="/">Brand</Link>
        </Logo>
        <IconsHeader>
          <span className="fa-layers fa-fw fa-lg">
            <FontAwesomeIcon icon={Icons.faBagShopping} />
            <CartCounter />
          </span>
          <FontAwesomeIcon icon={Icons.faBars} onClick={onShowMenu} />
        </IconsHeader>
      </HeaderContent>
      {showMenu ? <Nav /> : true}
    </HeaderContainer>
  );
}
