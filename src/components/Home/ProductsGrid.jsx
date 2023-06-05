import { ProductsGridContainer } from "./ProductsGrid.styles";
import { Link } from "react-router-dom";
import { BaseButton } from "../ui/Buttons/Basebutton.styles";
import {
  ProductsDiscount,
  ProductsOldPrice,
  ProductsPrize,
} from "../ui/Prizing/Prizing.styles";

export default function ProductsGrid(data) {
  const { data: products } = data;
  return (
    <ProductsGridContainer>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} />
          <h2>{product.title}</h2>
          <ProductsPrize>
            {product.discountedPrice === product.price && (
              <span>${product.price}</span>
            )}
          </ProductsPrize>
          <ProductsDiscount>
            {product.discountedPrice < product.price && (
              <span>${product.discountedPrice}</span>
            )}
          </ProductsDiscount>
          <ProductsOldPrice>
            {product.discountedPrice < product.price && (
              <span>${product.price}</span>
            )}
          </ProductsOldPrice>
          <BaseButton isWhite={true}>
            <Link to={`/product/${product.id}`}>Check out</Link>
          </BaseButton>
        </div>
      ))}
    </ProductsGridContainer>
  );
}
