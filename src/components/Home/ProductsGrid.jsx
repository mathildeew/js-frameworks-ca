import { Link } from "react-router-dom";
import { BaseButton } from "../Basebutton.styles";
import { fetchApi } from "./FetchApi";
import {
  ProductsGrid,
  ProductsGridDiscount,
  ProductsGridOldPrice,
  ProductsGridPrice,
} from "./ProductsGrid.styles";

export default function HomeGrid() {
  const { products } = fetchApi("https://api.noroff.dev/api/v1/online-shop");

  return (
    <ProductsGrid>
      {products.map((product) => (
        <div>
          <img src={product.imageUrl} />
          <h2>{product.title}</h2>
          <ProductsGridPrice>
            {product.discountedPrice === product.price && (
              <p>${product.price}</p>
            )}
          </ProductsGridPrice>
          <ProductsGridDiscount>
            {product.discountedPrice < product.price && (
              <p>${product.discountedPrice}</p>
            )}
          </ProductsGridDiscount>
          <ProductsGridOldPrice>
            {product.discountedPrice < product.price && <p>${product.price}</p>}
          </ProductsGridOldPrice>
          <BaseButton>
            <Link to={`/product/${product.id}`}>Check out</Link>
          </BaseButton>
        </div>
      ))}
    </ProductsGrid>
  );
}
