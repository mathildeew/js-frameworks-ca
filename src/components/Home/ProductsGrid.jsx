import { Link } from "react-router-dom";
import { BaseButton } from "../Basebutton.styles";
import {
  ProductsGrid,
  ProductsGridDiscount,
  ProductsGridOldPrice,
  ProductsGridPrice,
} from "./ProductsGrid.styles";

export default function HomeGrid(results) {
  const { results: products } = results;

  return (
    <ProductsGrid>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imageUrl} />
          <h2>{product.title}</h2>
          <ProductsGridPrice>
            {product.discountedPrice === product.price && (
              <span>${product.price}</span>
            )}
          </ProductsGridPrice>
          <ProductsGridDiscount>
            {product.discountedPrice < product.price && (
              <span>${product.discountedPrice}</span>
            )}
          </ProductsGridDiscount>
          <ProductsGridOldPrice>
            {product.discountedPrice < product.price && (
              <span>${product.price}</span>
            )}
          </ProductsGridOldPrice>
          <BaseButton isWhite={true}>
            <Link to={`/product/${product.id}`}>Check out</Link>
          </BaseButton>
        </div>
      ))}
    </ProductsGrid>
  );
}
