import { useDispatchCart } from "../../../context/Context";
import { RoundButton } from "../../ui/Buttons/RoundButton";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CartButtons,
  DetailsContainer,
  DetailsRight,
  ItemDetails,
} from "./CartItem.styled";

export default function CartItem({ product }) {
  const dispatch = useDispatchCart();

  return (
    <>
      <DetailsContainer>
        <img src={product.imageUrl} />
        <DetailsRight>
          <ItemDetails>
            <h2>{product.title}</h2>
            <p>$ {product.discountedPrice}</p>
          </ItemDetails>
          <CartButtons>
            <RoundButton
              onClick={() => dispatch({ type: "DECREASE", payload: product })}
            >
              -1
            </RoundButton>
            <span>{product.qty}</span>

            <RoundButton
              onClick={() => dispatch({ type: "ADD", payload: product })}
            >
              +1
            </RoundButton>
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => dispatch({ type: "REMOVE", payload: product })}
            ></FontAwesomeIcon>
          </CartButtons>
        </DetailsRight>
      </DetailsContainer>
      <hr />
    </>
  );
}
