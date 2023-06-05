import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Loader } from "../ui/Loader";
import ProductsGrid from "./ProductsGrid";
import { SearchInput } from "./Search/Search.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Error } from "../ui/Layout/Error/";

export default function HomeContainer() {
  const { products, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  const [searchedProduct, setSearchedProduct] = useState("");
  const onSearch = (event) => {
    setSearchedProduct(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchedProduct.toLowerCase())
  );

  if (isLoading) return <Loader></Loader>;
  if (isError)
    return (
      <Error>
        <img src="../../../public/images/error.png" />
        <p>There was en error with the site.</p>
        <Link to="/">Try again</Link>
      </Error>
    );

  return (
    <>
      <section>
        <h1>Popular categories</h1>
      </section>
      <section>
        <h1>All products</h1>

        <SearchInput>
          <input
            placeholder="Search product"
            type="search"
            onChange={onSearch}
            value={searchedProduct}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchInput>
        {!searchedProduct && <ProductsGrid results={products} />}
        {searchedProduct && <ProductsGrid results={filteredProducts} />}
      </section>
    </>
  );
}
