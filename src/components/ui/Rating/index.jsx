import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

export function ratings(rating) {
  if (rating === 0) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <p>(No ratings yet)</p>
      </div>
    );
  }

  if (rating >= 0.5 && rating < 1) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStarHalf} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
      </div>
    );
  }

  if (rating >= 1 && rating < 1.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
      </div>
    );
  }

  if (rating >= 1.5 && rating < 2) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
      </div>
    );
  }

  if (rating >= 2 && rating < 2.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
      </div>
    );
  }

  if (rating >= 2.5 && rating < 3) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
      </div>
    );
  }

  if (rating >= 3 && rating < 3.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={farStar} />
        <FontAwesomeIcon icon={farStar} />
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
        <FontAwesomeIcon icon={farStar} />
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
        <FontAwesomeIcon icon={farStar} />
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
