import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDispatchCart } from "../../context/Context";
import useApi from "../../hooks/useApi";
import Loader from "../ui/Loader";
import { Error } from "../ui/Layout/Error";
import { Link, useParams } from "react-router-dom";
import { ProductContainer } from "./Product.styles";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";
import { Ratings } from "../ui/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Product() {
  const dispatch = useDispatchCart();
  const [btnText, setBtnText] = useState("Add to cart");
  const [btnProps, setBtnProps] = useState(false);
  const [btnState, setBtnState] = useState(false);

  function handleAddToCart() {
    setBtnText("Adding...");

    setTimeout(() => {
      dispatch({ type: "ADD", payload: products });
      setBtnText("Added!");
      setBtnProps(true);
      setBtnState(true);
    }, 1000);
  }

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
  const percentage = (priceDiff / price) * 100;
  const percentageOff = Number(percentage.toFixed(0));

  if (isLoading)
    return (
      <>
        <HelmetProvider>
          <Helmet>
            <title>Sjåpp</title>
          </Helmet>
        </HelmetProvider>

        <ProductContainer>
          <Loader />
        </ProductContainer>
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
          <title>Sjåpp - {`${title}`}</title>
        </Helmet>
      </HelmetProvider>

      <ProductContainer>
        <img src={imageUrl} />
        {discountedPrice < price && (
          <div className="percentageContainer">
            <span>- {percentageOff}%</span>
          </div>
        )}
        <h1>{title}</h1>

        <div className="ratingContainer">
          {Ratings(rating)}
          <span>({reviews?.length} ratings)</span>
        </div>

        <div className="productPricing">
          {discountedPrice === price && (
            <span className="orgPrice">${price}</span>
          )}
          {discountedPrice < price && (
            <>
              <span className="newPrice">${discountedPrice}</span>
              <span className="oldPrice">${price}</span>
            </>
          )}
        </div>

        <p>{description}</p>

        <div className="tagContainer">
          <FontAwesomeIcon icon={faHashtag} />
          {tags?.map((tag) => (
            <p key={tag}> {tag}, </p>
          ))}
        </div>

        <BaseButton
          onClick={handleAddToCart}
          isClicked={btnProps}
          disabled={btnState}
        >
          {btnText}
        </BaseButton>

        {reviews?.length === 0 && (
          <section>
            <hr />
            <h2>Reviews</h2>
            <p>No reviews yet</p>
          </section>
        )}

        {reviews?.length > 0 && (
          <section>
            <hr />
            <h2>Reviews</h2>
            {reviews?.map((review) => (
              <div key={review.id} className="reviewsContainer">
                <div className="ratingContainer">{Ratings(rating)}</div>
                <h2>{review.username}</h2>
                <p>{review.description}</p>
              </div>
            ))}
          </section>
        )}
      </ProductContainer>
    </>
  );
}
