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
        <div key={item.product.id + item.size * Math.random()}>
          {item.product.id} {item.size} {item.quantity}
          <span>
            <button
              data-size={item.size}
              data-size={item.id}
              type="button"
              onClick={removeCartItem}
            >
              &#215;
            </button>
          </span>
        </div>
      ))}
    </StyledCart>
  );
}

const StyledCart = styled.div`
  color: black;
  background: white;
  position: fixed;
  top: 6rem;
  right: 0;
  height: 30rem;
  box-shadow: -6px 6px 5px 1px rgba(11, 11, 11, 0.323);
  padding: 3rem 6rem;
  button {
    width: 3rem;
    font-size: 2rem;
    background: none;
    :hover {
      color: var(--main-blue);
      background: none;
    }
  }
`;
