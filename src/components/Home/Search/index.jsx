import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchInput } from "./Search.styles";

export default function Search() {
  return (
    <SearchInput>
      <input placeholder="Search product" />
      <FontAwesomeIcon icon={Icons.faMagnifyingGlass} />
    </SearchInput>
  );
}
