import { Ratings } from "../Rating";
import { RatingContainer } from "../Rating/Rating.styles";
import { ReviewContainer } from "./Reviews.styles";

export function Reviews(data) {
  const { data: reviews } = data;

  return (
    <>
      <hr />
      <h2>Reviews</h2>
      {reviews?.map((review) => (
        <ReviewContainer key={review.id}>
          <RatingContainer>{Ratings(review.rating)}</RatingContainer>
          <h2>{review.username}</h2>
          <p>{review.description}</p>
        </ReviewContainer>
      ))}
    </>
  );
}
