import { ProductsContainer } from "./Products.styles";
import { Link, useParams } from "react-router-dom";
import { BaseButton } from "../../ui/Buttons/Basebutton.styles";

export default function Products(data) {
  const { data: products } = data;
  let { category } = useParams();

  return (
    <>
      {category === undefined ? (
        ""
      ) : (
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      )}

      <ProductsContainer>
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="productGrid"
            key={product.id}
          >
            <img src={product.imageUrl} />
            <h2>{product.title}</h2>

            <div className="productsPrize">
              {product.discountedPrice === product.price && (
                <span>$ {product.price}</span>
              )}
            </div>

            <div className="productsDiscount">
              {product.discountedPrice < product.price && (
                <span>${product.discountedPrice}</span>
              )}
            </div>

            <div className="productsOldprice">
              {product.discountedPrice < product.price && (
                <span>${product.price}</span>
              )}
            </div>

            <BaseButton isWhite={true}>Check out</BaseButton>
          </Link>
        ))}
      </ProductsContainer>
    </>
  );
}
