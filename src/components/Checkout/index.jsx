import { Helmet, HelmetProvider } from "react-helmet-async";
import { CheckoutContainer } from "./CheckoutContainer.styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

export default function Checkout() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sjåpp - Checkout</title>
        </Helmet>
      </HelmetProvider>

      <CheckoutContainer>
        <h1>Order complete!</h1>
        <FontAwesomeIcon icon={faTruckFast} />
        <p>Your products will soon be shipped from our warehouse.</p>
        <Link to="/">Continue shopping</Link>
      </CheckoutContainer>
    </>
  );
}
