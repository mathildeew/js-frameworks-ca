import { useDispatchCart } from "../../../context/Context";
import { RoundButton } from "../../ui/Buttons/RoundButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function CartItem({ product }) {
  const dispatch = useDispatchCart();

  return (
    <>
      <div className="cartItem" key={product.id}>
        <img src={product.imageUrl} />

        <div className="itemDetails">
          <div className="cartItemTitle">
            <h2>{product.title}</h2>
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => dispatch({ type: "REMOVE", payload: product })}
            ></FontAwesomeIcon>
          </div>

          <div className="itemPrice">
            {product.discountedPrice === product.price && (
              <span className="orgPrice">$ {product.price}</span>
            )}
            {product.discountedPrice < product.price && (
              <div>
                <span className="newPrice">$ {product.discountedPrice}</span>
                <span className="oldPrice"> $ {product.price}</span>
              </div>
            )}
          </div>

          <div className="cartButtons">
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
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
