import { useContext, useState, useEffect } from 'react';
import { Ctx } from './CtxProvider';

export function useCart() {
  const { cartItems, setCartItems } = useContext(Ctx);

  function fetchCartItems(user) {
    // if user not logged in items fetch from local storage.
    const existingCartItems =
      user?.cartItem || JSON.parse(localStorage.getItem('cart')) || null;
    setCartItems(existingCartItems);
  }

  function addToCart(e) {
    e.preventDefault();
    const cartItem = {
      product: JSON.parse(e.target.dataset.product),
      size: e.target.size.value,
      quantity: 1,
    };
    if (!cartItems) {
      localStorage.setItem('cart', JSON.stringify([cartItem]));
      setCartItems([cartItem]);
      return;
    }
    // Changes quantity of product in cart if id & size already exist.
    const itemAlreadyExists = cartItems.findIndex(
      (existingItem) =>
        existingItem.product.id === cartItem.product.id &&
        existingItem.size == cartItem.size
    );
    if (itemAlreadyExists > -1) {
      const newCartItems = JSON.parse(localStorage.getItem('cart'));
      newCartItems[itemAlreadyExists].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(newCartItems));
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, cartItem]);
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
      setCartItems(null);
      return;
    }
    localStorage.setItem('cart', JSON.stringify(newCartItems));
    setCartItems(newCartItems);
  }

  function cartTotal(cartItems = []) {
    const [totalCost, updateTotalCost] = useState(0);

    useEffect(() => {
      const total = cartItems?.reduce((total, item) => {
        const price = item.product.price * item.quantity;
        total += price;
        return total;
      }, 0);
      updateTotalCost(total);
    }, [cartItems]);

    return totalCost;
  }
  return {
    removeCartItem,
    addToCart,
    cartTotal,
    fetchCartItems,
  };
}
