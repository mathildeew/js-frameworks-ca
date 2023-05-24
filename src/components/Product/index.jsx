import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BaseButton } from "../Basebutton.styles";
import { fetchApi } from "../Home/FetchApi";
import { ProductContainer } from "./Product.styles";
import { ratings } from "../ui/Rating/rating";
import { Reviews } from "./Reviews";
import { RatingContainer } from "../ui/Rating/Rating.styles";

export function Product() {
  // const [product, setProduct] = useState([]);
  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;

  const { products, isLoading, isError } = fetchApi(
    `https://api.noroff.dev/api/v1/online-shop/${id}`
  );
  const {
    description,
    discountedPrice,
    imageUrl,
    price,
    rating,
    reviews,
    tags,
    title,
  } = products;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <main>
      <ProductContainer className="productContainer">
        <img src={imageUrl} />
        <h1>{products.title}</h1>
        <RatingContainer>{ratings(rating)}</RatingContainer>
        <p>{description}</p>
        <ProductPrizing>
          <p>{discountedPrice === price && <span>${price}</span>}</p>
          <p>
            {discountedPrice < price && (
              <span className="newPrice">${discountedPrice}</span>
            )}
          </p>
          <div>
            <p>
              {discountedPrice < price && (
                <span className="oldPrice">${price}</span>
              )}
            </p>
            <p className="priceDiscount">
              {discountedPrice < price && (
                <span>$ {price - discountedPrice} off</span>
              )}
            </p>
          </div>
        </ProductPrizing>
        <BaseButton>Add to cart</BaseButton>
        <Reviews results={reviews}></Reviews>
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
