import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BaseButton } from "../Basebutton.styles";
import { fetchApi } from "../Home/FetchApi";
import { ProductContainer } from "./Product.styles";
import { ratings } from "../ui/Rating/rating";
import { Reviews } from "./Reviews";
import { RatingContainer } from "../ui/Rating/Rating.styles";
import {
  ProductsDiscount,
  ProductsOldPrice,
  ProductsPrize,
  ProductsPriceOff,
  DiscountContainer,
  ProductPrizing,
} from "../ui/Prizing/index";
import { ProductsGrid } from "../Home/ProductsGrid.styles";

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
          {discountedPrice === price && <span>${price}</span>}
          <DiscountContainer>
            {discountedPrice < price && (
              <ProductsDiscount>${discountedPrice}</ProductsDiscount>
            )}
            {discountedPrice < price && (
              <ProductsPriceOff>
                ${price - discountedPrice} off!
              </ProductsPriceOff>
            )}
          </DiscountContainer>
          {discountedPrice < price && (
            <ProductsOldPrice>${price}</ProductsOldPrice>
          )}
        </ProductPrizing>
        <BaseButton>Add to cart</BaseButton>
        <Reviews results={reviews}></Reviews>
      </ProductContainer>
    </main>
  );
}
