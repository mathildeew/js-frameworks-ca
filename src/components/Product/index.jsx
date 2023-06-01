import { useParams } from "react-router-dom";
import { BaseButton } from "../ui/Basebutton.styles";
import { ProductContainer } from "./Product.styles";
import { ratings } from "../ui/Rating";
import { Reviews } from "../ui/Reviews";
import { RatingContainer } from "../ui/Rating/Rating.styles";
import {
  ProductsDiscount,
  ProductsOldPrice,
  ProductsPriceOff,
  DiscountContainer,
  ProductPrizing,
} from "../ui/Prizing/Prizing.styles";
import { useApi } from "../../hooks/useApi";
import { useCart, useDispatchCart } from "../../context/Context";

export function Product() {
  let { id } = useParams();
  const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;

  const { products, isLoading, isError } = useApi(
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

  // Context
  const items = useCart();

  console.log(items.length);

  // // // // // Add to cart
  const dispatch = useDispatchCart();

  function addToCart() {
    console.log(products);
    dispatch({ type: "ADD", payload: products });
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <main>
      <ProductContainer className="productContainer">
        <img src={imageUrl} />
        <h1>{title}</h1>
        <RatingContainer>
          {ratings(rating)}
          {reviews?.length > 0 && <p>({reviews?.length} ratings)</p>}
        </RatingContainer>

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
        <BaseButton onClick={addToCart}>Add to cart</BaseButton>
        <Reviews results={reviews}></Reviews>
      </ProductContainer>
    </main>
  );
}
