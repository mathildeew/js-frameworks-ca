import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useApi } from "../../hooks/useApi";
import { HomeContainer } from "./HomeContainer.styles";
import { Products } from "./Products";
import { SearchInput } from "./Search/Search.styles";
import { Loader } from "../ui/Loader";
import { Error } from "../ui/Layout/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  const { products, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  const [searchedProduct, setSearchedProduct] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchedProduct.toLowerCase())
  );
  function onSearch(event) {
    setSearchedProduct(event.target.value);
  }

  // const electronicFilter = products.filter((product) =>
  //   product.tags.includes("electronics")
  // );

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
      <HelmetProvider>
        <Helmet>
          <link
            rel="icon"
            type="image/svg+xml"
            href="/src/assets/logo-sm.svg"
          />
          <title>Sjåpp - Online shop</title>
        </Helmet>
      </HelmetProvider>

      <HomeContainer>
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

        {!searchedProduct && <Products data={products} />}
        {searchedProduct && <Products data={filteredProducts} />}
      </HomeContainer>
    </>
  );
}
