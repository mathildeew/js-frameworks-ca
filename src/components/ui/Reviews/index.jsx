import { ratings } from "../Rating";
import { RatingContainer } from "../Rating/Rating.styles";
import { ReviewContainer } from "./Reviews.styles";

export function Reviews(results) {
  const { results: reviews } = results;

  return (
    <div>
      <h2>Reviews</h2>
      {reviews?.map((review) => (
        <ReviewContainer key={review.id}>
          <RatingContainer>{ratings(review.rating)}</RatingContainer>
          <h2>{review.username}</h2>
          <p>{review.description}</p>
        </ReviewContainer>
      ))}
    </div>
  );
}
