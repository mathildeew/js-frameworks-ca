import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BaseButton } from "../Basebutton.styles";
import { ProductsGrid } from "./ProductsGrid.styles";

export function FetchApi() {
  const url = "https://api.noroff.dev/api/v1/online-shop";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();

        setIsLoading(false);
        setProducts(json);
        console.log(json);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>There's an error with the site</div>;
  }

  return (
    <main>
      <ProductsGrid>
        {products.map((product) => (
          <div>
            <img src={product.imageUrl} />
            <h2>{product.title}</h2>
            <BaseButton>
              <Link to={`/product/${product.id}`}>Check out</Link>
            </BaseButton>
          </div>
        ))}
      </ProductsGrid>
    </main>
  );
}
