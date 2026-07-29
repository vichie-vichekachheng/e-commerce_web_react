import { useCart } from "../context/Cartcontext";

export default function Checkout() {
  const { GetitemwithProduct, addTocart, decreaseQty, removeFromCart } = useCart();
  const items = GetitemwithProduct();
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h2 className="checkout-section-title">Order Summary</h2>

            {items.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              items.map(({ id, qty, product }) => (
                <div className="checkout-item" key={id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="checkout-item-image"
                  />
                  <div className="checkout-item-details">
                    <h3 className="checkout-item-name">{product.name}</h3>
                    <p className="checkout-item-price">
                      Unit Price: ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="checkout-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => decreaseQty(id)}
                      >
                        -
                      </button>
                      <span className="quantity-value">{qty}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => addTocart(id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <p className="checkout-item-total">
                    ${(product.price * qty).toFixed(2)}
                  </p>

                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => removeFromCart(id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}

            {items.length > 0 && (
              <div className="checkout-summary-total">
                <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}