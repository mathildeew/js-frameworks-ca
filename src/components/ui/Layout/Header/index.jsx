import { useCart } from "../../../../context/Context";
import { HeaderContainer } from "./Header.styles";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const cartStorage = useCart() || [];

  return (
    <HeaderContainer>
      <div className="headerContent">
        <div className="headerLeft">
          <Link to="/">
            <img src="/images/logo-sm.svg" className="logoSm" />
            <img src="/images/logo-lg.svg" className="logoLg" />
          </Link>
          <Link to="/cart">
            <span className="fa-layers fa-fw fa-lg">
              <FontAwesomeIcon icon={faBagShopping} />
              <span className="fa-layers-counter">{cartStorage.qty}</span>;
            </span>
          </Link>
        </div>
        <Nav />
      </div>
    </HeaderContainer>
  );
}
