import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BaseButton } from "../Basebutton.styles";
import { ProductContainer } from "./Product.styles";
import * as Icons from "@fortawesome/free-solid-svg-icons";

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
    <main>
      <ProductContainer className="productContainer">
        <img src={product.imageUrl} />
        <h1>{product.title}</h1>
        <Ratings />
        <p>{product.description}</p>
        <BaseButton>Add to cart</BaseButton>
      </ProductContainer>
    </main>
  );

  function Ratings() {
    if (product.rating >= 4 && product.rating < 5) {
      return (
        <div className="rating">
          <FontAwesomeIcon icon={Icons.faStar} />
          <FontAwesomeIcon icon={Icons.faStar} />
          <FontAwesomeIcon icon={Icons.faStar} />
          <FontAwesomeIcon icon={Icons.faStar} />
          <FontAwesomeIcon icon={Icons.faStarHalfAlt} />
        </div>
      );
    }
  }
}
