import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CheckoutContainer } from "./CheckoutContainer.styles";

export function Checkout() {
  return (
    <main>
      <CheckoutContainer>
        <h1>Order complete!</h1>
        <FontAwesomeIcon icon={faTruckFast} />
        <p>Your products will soon be shipped from our warehouse.</p>
        <Link to="/">Continue shopping</Link>
      </CheckoutContainer>
    </main>
  );
}
