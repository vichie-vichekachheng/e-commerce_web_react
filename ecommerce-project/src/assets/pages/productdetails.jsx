import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProbyId } from "../data/product";
import { useCart } from "../context/Cartcontext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const navigate = useNavigate();

  const { cartitem, addTocart } = useCart();

  useEffect(() => {
    const foundPro = getProbyId(id);
    if (!foundPro) {
      navigate("/");
      return;
    }
    setproduct(foundPro);
  }, [id, navigate]);

  if (!product) return null;

 
  const itemInCart = cartitem.find((item) => item.id === product.id);
  const productqty = itemInCart ? itemInCart.qty : 0;

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addTocart(product.id)}
            >
              Add to Cart {`(${productqty})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}