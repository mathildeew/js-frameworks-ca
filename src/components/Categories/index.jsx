import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import Products from "../Home/Products";
import Loader from "../ui/Loader";

export default function Categories() {
  const { products, isLoading, isError } = useApi(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  let { category } = useParams();
  let title = category.charAt(0).toUpperCase() + category.slice(1);

  const electronicFilter = products.filter((product) =>
    product.tags.includes("electronics")
  );

  const beautyFilter = products.filter((product) =>
    product.tags.includes("beauty")
  );

  const fashionFilter = products.filter((product) =>
    product.tags.includes("fashion")
  );

  if (isLoading)
    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>Sjåpp</title>
          </Helmet>
        </HelmetProvider>

        <Loader />
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

        <Error>
          <img src="/images/error.png" />
          <p>There was en error with the site.</p>
          <Link to="/">Try again</Link>
        </Error>
      </>
    );

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sjåpp - {title}</title>
        </Helmet>
      </HelmetProvider>

      {category === "electronics" && <Products data={electronicFilter} />}
      {category === "beauty" && <Products data={beautyFilter} />}
      {category === "fashion" && <Products data={fashionFilter} />}
    </>
  );
}
