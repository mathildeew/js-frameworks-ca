import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BaseButton } from "../Basebutton.styles";
import { ProductContainer } from "./Product.styles";
import { ratings } from "./rating";

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
        <RatingContainer>{ratings(product.rating)}</RatingContainer>
        <p>{product.description}</p>
        <ProductPrizing>
          <p>
            {product.discountedPrice === product.price && (
              <span>${product.price}</span>
            )}
          </p>
          <p>
            {product.discountedPrice < product.price && (
              <span className="newPrice">${product.discountedPrice}</span>
            )}
          </p>
          <div>
            <p>
              {product.discountedPrice < product.price && (
                <span className="oldPrice">${product.price}</span>
              )}
            </p>
            <p className="priceDiscount">
              {product.discountedPrice < product.price && (
                <span>$ {product.price - product.discountedPrice} off</span>
              )}
            </p>
          </div>
        </ProductPrizing>
        <BaseButton>Add to cart</BaseButton>
        <ReviewsContainer></ReviewsContainer>
      </ProductContainer>
    </main>
  );
}

const ProductPrizing = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }

  .oldPrice {
    text-decoration: line-through;
  }

  .newPrice {
    color: var(--color-discount);
  }
`;

const RatingContainer = styled.div`
  display: flex;

  p {
    margin-left: 25px;
  }
`;

const ReviewsContainer = styled.div`
  border: 2px solid var(--color-secondary);
`;
