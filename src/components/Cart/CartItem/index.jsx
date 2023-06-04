import { useDispatchCart } from "../../../context/Context";

export default function CartItem({ product }) {
  const dispatch = useDispatchCart();

  return (
    <>
      <img src={product.imageUrl} />
      <span>{product.qty}</span>
      <div>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <button
          onClick={() => dispatch({ type: "DECREASE", payload: product })}
        >
          -
        </button>
        <button onClick={() => dispatch({ type: "REMOVE", payload: product })}>
          Remove product
        </button>
        <button onClick={() => dispatch({ type: "ADD", payload: product })}>
          +
        </button>
      </div>
      <hr />
    </>
  );
}
