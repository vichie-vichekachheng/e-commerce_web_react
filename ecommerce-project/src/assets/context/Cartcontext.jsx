import { createContext, useContext, useState } from "react";
import { getProbyId } from "../data/product";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartitem, setcartitem] = useState([]);

  function addTocart(productId) {
    const existing = cartitem.find((item) => item.id === productId);

    if (existing) {
      const updatedCart = cartitem.map((item) =>
        item.id === productId ? { ...item, qty: item.qty + 1 } : item
      );
      setcartitem(updatedCart);
    } else {
      setcartitem([...cartitem, { id: productId, qty: 1 }]);
    }
  }


  function decreaseQty(productId) {
    const existing = cartitem.find((item) => item.id === productId);

    if (existing.qty === 1) {
      removeFromCart(productId);
    } else {
      setcartitem(
        cartitem.map((item) =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  }


  function removeFromCart(productId) {
    setcartitem(cartitem.filter((item) => item.id !== productId));
  }

  function GetitemwithProduct() {
    return cartitem
      .map((item) => ({
        ...item,
        product: getProbyId(item.id),
      }))
      .filter((item) => item.product);
  }

  return (
    <CartContext.Provider
      value={{
        cartitem,
        addTocart,
        decreaseQty,
        removeFromCart,
        GetitemwithProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}