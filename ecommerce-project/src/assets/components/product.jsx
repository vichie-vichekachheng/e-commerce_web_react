import { Link } from "react-router-dom";
import { useCart } from "../context/Cartcontext";

export default function ProductCart({ product }) {
  const {addTocart, cartitem} =useCart();
  const productincart= cartitem.find((item) => item.id === product.id);
  const productqty= productincart ? `(${productincart.qty})` : "";
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card-image" />

      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>

        <p className="product-card-price">
          ${product.price}
        </p>

        <div className="product-card-actions">
          <Link
            className="btn btn-secondary" to={`/products/${product.id}`}
          >
            View Details
          </Link>

          <button className="btn btn-primary" onClick={()=>addTocart(product.id)}>
            Add to Cart {productqty}
          </button>
        </div>
      </div>
    </div>
  );
}