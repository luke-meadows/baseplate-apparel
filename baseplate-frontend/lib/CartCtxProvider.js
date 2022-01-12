import { createContext, useEffect, useState } from 'react';
export const CartCtx = createContext();

// TODO:
// - add delete cart item.
// - hook up nav active.

export const CartCtxProvider = ({ children }) => {
  const [isCartActive, updateIsCartActive] = useState(false);
  function toggleCart() {
    updateIsCartActive(!isCartActive);
  }

  const [cartItems, updateCartItems] = useState(null);
  useEffect(() => {
    // retrieves cart items from local storage if they are there
    const cartItemsInLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (cartItemsInLocalStorage && !cartItems) {
      // Only runs on page reload if cart items exist in local storage
      updateCartItems(cartItemsInLocalStorage);
    }
  }, []);

  function addToCart(e) {
    e.preventDefault();
    const cartItem = {
      product: JSON.parse(e.target.dataset.product),
      size: e.target.size.value,
      quantity: 1,
    };

    if (!cartItems) {
      localStorage.setItem('cart', JSON.stringify([cartItem]));
      updateCartItems([cartItem]);
      return;
    }
    // Changes quantity of product in cart if id & size already exist.
    const itemAlreadyExists = cartItems.findIndex(
      (existingItem) =>
        existingItem.product.id === cartItem.id &&
        existingItem.size === cartItem.size
    );

    if (itemAlreadyExists > -1) {
      const newCartItems = JSON.parse(localStorage.getItem('cart'));
      newCartItems[itemAlreadyExists].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(newCartItems));
      updateCartItems(newCartItems);
    } else {
      updateCartItems([...cartItems, cartItem]);
      localStorage.setItem('cart', JSON.stringify([...cartItems, cartItem]));
    }
    return;
  }

  function removeCartItem(e) {
    const { id, size } = e.target.dataset;
    const index = cartItems.findIndex(
      (item) => item.product.id === id && item.size === size
    );
    const newCartItems = JSON.parse(localStorage.getItem('cart'));
    newCartItems.splice(index, 1);

    if (newCartItems.length < 1) {
      localStorage.removeItem('cart');
      updateCartItems(null);
      return;
    }
    localStorage.setItem('cart', JSON.stringify(newCartItems));
    updateCartItems(newCartItems);
  }

  return (
    <CartCtx.Provider
      value={{
        updateCartItems,
        cartItems,
        addToCart,
        removeCartItem,
        toggleCart,
        isCartActive,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};
