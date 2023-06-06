import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDispatchCart } from "../../context/Context";
import { useApi } from "../../hooks/useApi";
import { Loader } from "../ui/Loader";
import { Error } from "../ui/Layout/Error";
import { Link, useParams } from "react-router-dom";
import { ProductContainer } from "./Product.styles";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";
import { Ratings } from "../ui/Rating";
import { Reviews } from "../ui/Reviews";
import { RatingContainer } from "../ui/Rating/Rating.styles";
import {
  ProductsDiscount,
  ProductsOldPrice,
  ProductsPriceOff,
  DiscountContainer,
  ProductPrizing,
} from "../ui/Prizing/Prizing.styles";

export function Product() {
  const dispatch = useDispatchCart();

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

  const priceDiff = price - discountedPrice;

  const addToCart = (products) => {
    dispatch({ type: "ADD", payload: products });
  };

  const percentage = (priceDiff / price) * 100;
  const percentageOff = Number(percentage.toFixed(0));

  if (isLoading) return <Loader></Loader>;
  if (isError)
    <Error>
      <img src="../../../src/assets/error.png" />
      <p>There was en error with the site.</p>
      <Link to="/">Try again</Link>
    </Error>;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="icon"
            type="image/svg+xml"
            href="/src/assets/logo-sm.svg"
          />
          <title>Sjåpp - </title>
        </Helmet>
      </HelmetProvider>

      <ProductContainer>
        <img src={imageUrl} />
        {discountedPrice > price && (
          <div className="percentageContainer">
            <span>- {percentageOff}%</span>
          </div>
        )}
        <h1>{title}</h1>
        <RatingContainer>
          {Ratings(rating)}
          {reviews?.length > 0 && <p>({reviews?.length} ratings)</p>}
        </RatingContainer>

        <p>{description}</p>
        <ProductPrizing>
          {discountedPrice === price && <span>${price}</span>}
          <DiscountContainer>
            {discountedPrice < price && (
              <ProductsDiscount>${discountedPrice}</ProductsDiscount>
            )}
          </DiscountContainer>
          {discountedPrice < price && (
            <ProductsOldPrice>${price}</ProductsOldPrice>
          )}
        </ProductPrizing>
        <BaseButton onClick={() => addToCart(products)}>Add to cart</BaseButton>

        {reviews?.length > 0 && <Reviews data={reviews}></Reviews>}
      </ProductContainer>
    </>
  );
}
