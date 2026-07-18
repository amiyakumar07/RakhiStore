import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("rakhi_cart");
    return localCart ? JSON.parse(localCart) : [];
  });

  const [giftWrap, setGiftWrap] = useState(() => {
    return localStorage.getItem("rakhi_gift_wrap") === "true";
  });

  useEffect(() => {
    localStorage.setItem("rakhi_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("rakhi_gift_wrap", giftWrap.toString());
  }, [giftWrap]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += quantity;
        return newCart;
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQty = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart => prevCart.map(item => 
      item.id === productId ? { ...item, quantity: newQty } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    setGiftWrap(false);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Free shipping over ₹2000, otherwise ₹99
  const shippingCost = cartSubtotal >= 2000 || cartSubtotal === 0 ? 0 : 99;
  
  // Luxury gift wrap adds flat ₹150 if toggled
  const giftWrapCost = giftWrap ? 150 : 0;
  
  const cartTotal = cartSubtotal + shippingCost + giftWrapCost;

  return (
    <CartContext.Provider value={{
      cart,
      giftWrap,
      setGiftWrap,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
      cartCount,
      cartSubtotal,
      shippingCost,
      giftWrapCost,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}
