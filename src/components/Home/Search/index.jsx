import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { fetchApi } from "../FetchApi";
import { SearchInput } from "./Search.styles";

export default function Search() {
  const { products } = fetchApi("https://api.noroff.dev/api/v1/online-shop");

  const [searchedProduct, setSearchedProduct] = useState("");

  function onSearch(event) {
    setSearchedProduct(event.target.value);

    const results = products.filter((product) => {
      if (event.target.value === "") return products;
      return product.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log(results);
  }

  return (
    <SearchInput>
      <input placeholder="Search product" type="search" onChange={onSearch} />
      <FontAwesomeIcon icon={Icons.faMagnifyingGlass} />
    </SearchInput>
  );
}
