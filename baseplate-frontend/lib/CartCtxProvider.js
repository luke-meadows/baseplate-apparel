import { createContext, useEffect, useState } from 'react';
export const CartCtx = createContext();

// TODO:
// - add delete cart item.
// - hook up nav active.

export const CartCtxProvider = ({ children }) => {
  const [isCartActive, updateIsCartActive] = useState(false);
  const [cartItems, updateCartItems] = useState(null);
  // retrieves cart items from local storage if they are there
  useEffect(() => {
    const cartItemsInLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (cartItemsInLocalStorage) {
      updateCartItems(cartItemsInLocalStorage);
    }
  }, []);

  function addToCart(e) {
    e.preventDefault();
    const cartItem = {
      id: e.target.dataset.product_id,
      size: e.target.size.value,
      quantity: 1,
    };
    if (!cartItems) {
      updateCartItems([cartItem]);
      return;
    }
    // Changes quantity of product in cart if id & size already exist.
    const itemAlreadyExists = cartItems.findIndex(
      (existingItem) =>
        existingItem.id === cartItem.id && existingItem.size === cartItem.size
    );
    if (itemAlreadyExists > -1) {
      updateCartItems([
        ...cartItems,
        (cartItems[itemAlreadyExists].quantity += 1),
      ]);
    } else {
      updateCartItems([...cartItems, cartItem]);
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  return (
    <CartCtx.Provider
      value={{
        updateCartItems,
        cartItems,
        addToCart,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};
