import { useState } from "react";
import { useCart } from "../../../../context/Context";
import {
  HeaderContainer,
  HeaderContent,
  MenuIconContainer,
} from "./Header.styles";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";

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
        <Link to="/">
          <img src="../../../../../src/assets/logo-sm.svg" />
        </Link>
        <Link to="/cart">
          <span className="fa-layers fa-fw fa-lg">
            <FontAwesomeIcon icon={faBagShopping} />
            <CartCounter />
          </span>
        </Link>
      </HeaderContent>
      <MenuIconContainer>
        <FontAwesomeIcon icon={faBars} onClick={onShowMenu} />
      </MenuIconContainer>
      {showMenu ? <Nav /> : true}
    </HeaderContainer>
  );
}
