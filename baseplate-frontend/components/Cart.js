import { useContext, useEffect, useState } from 'react';
import { CartCtx } from '../lib/CartCtxProvider';
import styled from 'styled-components';

export default function Cart() {
  const { updateCartItems, cartItems, removeCartItem } = useContext(CartCtx);
  if (!cartItems) return <p>No items in cart</p>;
  console.log(cartItems);
  return (
    <StyledCart>
      {cartItems.map((item) => (
        <div key={item.id + item.size}>
          {item.product.id} {item.size} {item.quantity}
          <span>
            <button
              data-size={item.size}
              data-size={item.id}
              type="button"
              onClick={removeCartItem}
            >
              remove
            </button>
          </span>
        </div>
      ))}
    </StyledCart>
  );
}

const StyledCart = styled.div`
  margin-top: 6rem;
  border: 1px solid blue;
`;
