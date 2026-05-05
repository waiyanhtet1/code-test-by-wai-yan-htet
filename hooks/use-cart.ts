"use client";

import { useEffect, useState } from "react";

const cartStorageKey = "appi-cart";

export type CartItem = {
  id: string;
  name: string;
  price: string;
  image?: string;
  quantity: number;
};

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedCart = window.localStorage.getItem(cartStorageKey);
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];

    if (!Array.isArray(parsedCart)) {
      return [];
    }

    return parsedCart.filter(
      (item): item is CartItem =>
        typeof item?.id === "string" &&
        typeof item?.name === "string" &&
        typeof item?.price === "string" &&
        typeof item?.quantity === "number",
    );
  } catch {
    return [];
  }
}

function writeStoredCart(cart: CartItem[]) {
  window.localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setCart(readStoredCart());
    });
  }, []);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((currentCart) => {
      const nextCart = currentCart.some((cartItem) => cartItem.id === item.id)
        ? currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        )
        : [...currentCart, { ...item, quantity: 1 }];

      writeStoredCart(nextCart);
      return nextCart;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((currentCart) => {
      const nextCart = currentCart.filter((item) => item.id !== id);

      writeStoredCart(nextCart);
      return nextCart;
    });
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return { addToCart, cart, cartCount, removeFromCart };
}
