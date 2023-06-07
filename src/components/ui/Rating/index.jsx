import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

export function Ratings(rating) {
  if (rating === 0) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    );
  }

  if (rating >= 0.5 && rating < 1) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    );
  }

  if (rating >= 1 && rating < 1.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    );
  }

  if (rating >= 1.5 && rating < 2) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    );
  }

  if (rating >= 2 && rating < 2.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    );
  }

  if (rating >= 2.5 && rating < 3) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    );
  }

  if (rating >= 3 && rating < 3.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={emptyStar} />
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    );
  }

  if (rating >= 3.5 && rating < 4) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    );
  }

  if (rating >= 4 && rating < 4.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={emptyStar} />
      </div>
    );
  }

  if (rating >= 4 && rating < 5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
      </div>
    );
  }
  if (rating >= 4.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    );
  }
}
