import { useState } from "react";
import { useCart } from "../../../../context/Context";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLeft,
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
        <HeaderLeft>
          <Link to="/">
            <img
              src="../../../../../public/images/logo-sm.svg"
              className="logoSm"
            />
            <img
              src="../../../../../public/images/logo-lg.svg"
              className="logoLg"
            />
          </Link>
          <Link to="/cart">
            <span className="fa-layers fa-fw fa-lg">
              <FontAwesomeIcon icon={faBagShopping} />
              <CartCounter />
            </span>
          </Link>
        </HeaderLeft>
        <MenuIconContainer>
          <FontAwesomeIcon icon={faBars} onClick={onShowMenu} />
        </MenuIconContainer>
        {showMenu ? <Nav /> : true}
      </HeaderContent>
    </HeaderContainer>
  );
}
