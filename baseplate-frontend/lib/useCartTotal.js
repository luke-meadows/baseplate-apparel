import { useState, useEffect } from 'react';

export default function useCartTotal(cartItems = []) {
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
