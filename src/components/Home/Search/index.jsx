import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { fetchApi } from "../FetchApi";
import HomeGrid from "../ProductsGrid";

import { SearchInput } from "./Search.styles";

export default function Search() {
  const { products } = fetchApi("https://api.noroff.dev/api/v1/online-shop");

  const [searchedProduct, setSearchedProduct] = useState("");
  const onSearch = (event) => {
    setSearchedProduct(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchedProduct.toLowerCase())
  );

  return (
    <div>
      <SearchInput>
        <input placeholder="Search product" type="search" onChange={onSearch} />
        <FontAwesomeIcon icon={Icons.faMagnifyingGlass} />
      </SearchInput>
      {!searchedProduct && <HomeGrid results={products} />}
      {searchedProduct && <HomeGrid results={filteredProducts} />}
    </div>
  );
}
