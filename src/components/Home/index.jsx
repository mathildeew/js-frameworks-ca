import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useApi from "../../hooks/useApi";
import { HomeContainer } from "./HomeContainer.styles";
import Products from "./Products";
import { SearchInput } from "./Search/Search.styles";
import Loader from "../ui/Loader";
import NoResults from "./Search/NoResults";
import { Error } from "../ui/Layout/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
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

  if (isLoading)
    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>Sjåpp - Loading</title>
          </Helmet>
        </HelmetProvider>

        <HomeContainer>
          <Loader />
        </HomeContainer>
      </>
    );

  if (isError)
    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>Sjåpp - Error!</title>
          </Helmet>
        </HelmetProvider>

        <HomeContainer>
          <Error>
            <img src="/images/error.png" />
            <p>There was en error with the site.</p>
            <Link to="/">Try again</Link>
          </Error>
        </HomeContainer>
      </>
    );

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sjåpp - Online shop</title>
        </Helmet>
      </HelmetProvider>

      <HomeContainer>
        <h1>Popular categories</h1>
        <div className="categories">
          <Link to={`/categories/electronics`} className="electronics category">
            <span>Electronics</span>
          </Link>
          <Link to={`/categories/beauty`} className="beauty category">
            <span>Beauty</span>
          </Link>
          <Link to={`/categories/fashion`} className="fashion category">
            <span>Fashion</span>
          </Link>
        </div>
      </HomeContainer>

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
        {filteredProducts.length === 0 && <NoResults />}
      </HomeContainer>
    </>
  );
}
