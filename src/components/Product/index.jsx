import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();

        setIsLoading(false);
        setProduct(json);
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
    <section className="productContainer">
      <h1>{product.title}</h1>
      <img src={product.imageUrl} />
      <p>{product.description}</p>
    </section>
  );
}
