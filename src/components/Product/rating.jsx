import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ratings(rating) {
  if (rating === 0) {
    return (
      <div className="rating">
        <p>No ratings yet</p>
      </div>
    );
  }

  if (rating >= 0.5 && rating < 1) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStarHalfAlt} />
      </div>
    );
  }

  if (rating >= 1 && rating < 1.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStar} />
      </div>
    );
  }

  if (rating >= 1.5 && rating < 2) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStar} />

        <FontAwesomeIcon icon={Icons.faStarHalfAlt} />
      </div>
    );
  }

  if (rating >= 2 && rating < 2.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
      </div>
    );
  }

  if (rating >= 2.5 && rating < 3) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStarHalfAlt} />
      </div>
    );
  }

  if (rating >= 3 && rating < 3.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
      </div>
    );
  }

  if (rating >= 3.5 && rating < 4) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStarHalfAlt} />
      </div>
    );
  }

  if (rating >= 4 && rating < 4.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
      </div>
    );
  }

  if (rating >= 4 && rating < 5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStarHalfAlt} />
      </div>
    );
  }
  if (rating >= 4.5) {
    return (
      <div className="rating">
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
        <FontAwesomeIcon icon={Icons.faStar} />
      </div>
    );
  }
}
