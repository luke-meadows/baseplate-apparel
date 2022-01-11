import { useContext, useEffect, useState } from 'react';
import { CartCtx } from '../lib/CartCtxProvider';
import styled from 'styled-components';

export default function Cart() {
  const { updateCartItems, cartItems } = useContext(CartCtx);
  if (!cartItems) return <p>No items in cart</p>;
  console.log(cartItems);
  return (
    <StyledCart>
      {cartItems.map((item) => (
        <p key={item.id + item.size}>
          {item.id} {item.size} {item.quantity}
        </p>
      ))}
    </StyledCart>
  );
}

const StyledCart = styled.div`
  margin-top: 6rem;
`;
