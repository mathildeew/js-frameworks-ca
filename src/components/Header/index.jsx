import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Brand</Link>
        <FontAwesomeIcon icon={Icons.faMagnifyingGlass} />
        <FontAwesomeIcon icon={Icons.faBagShopping} />
        <FontAwesomeIcon icon={Icons.faBars} />
      </nav>
    </header>
  );
}
