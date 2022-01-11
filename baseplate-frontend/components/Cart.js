import { useEffect, useState } from 'react';
import styled from 'styled-components';
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // setCartItems(cartItems);
  }, []);
  return (
    <div>
      {cartItems.map((item) => (
        <p key={item.id}>
          {item.id} {item.size} {item.quantity}
        </p>
      ))}
    </div>
  );
}
