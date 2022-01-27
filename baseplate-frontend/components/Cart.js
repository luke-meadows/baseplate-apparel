import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Ctx } from '../lib/CtxProvider';
import { useCart } from '../lib/useCart';

export default function Cart() {
  const { setCartActive, cartItems, setCartItems, setStopScrolling } =
    useContext(Ctx);
  const { removeCartItem, cartTotal } = useCart();

  useEffect(() => {
    // retrieves cart items from local storage if they are there
    const cartItemsInLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (cartItemsInLocalStorage && !cartItems) {
      // Only runs on page reload if cart items exist in local storage
      setCartItems(cartItemsInLocalStorage);
    }
  }, []);

  const totalCost = cartTotal(cartItems);

  function handleButtonClick() {
    setCartActive(false);
    setStopScrolling(false);
  }
  if (!cartItems)
    return <NoCartItems>You have no items in your cart</NoCartItems>;
  return (
    <StyledCart>
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item) => {
          const { product } = item;
          return (
            <li key={product.id + item.size}>
              <img src={product.photo.image.publicUrlTransformed} alt="" />
              <p>
                {product.name},{' '}
                <span>
                  {product.color}, Size: {item.size},{' '}
                </span>
                x{item.quantity}
              </p>
              <p>£{product.price / 100}.00</p>
              <button
                data-size={item.size}
                data-size={item.id}
                type="button"
                onClick={removeCartItem}
              >
                &#215;
              </button>
            </li>
          );
        })}
      </ul>
      <CartBottom>
        <p className="total-price">Total £{totalCost / 100}.00</p>
        <div className="checkout-and-view-basket">
          <Link href="/basket">
            <button
              onClick={handleButtonClick}
              className="basket"
              type="button"
            >
              View Basket
            </button>
          </Link>
          <Link href="/checkout">
            <button
              onClick={handleButtonClick}
              className="checkout"
              type="button"
            >
              Checkout
            </button>
          </Link>
        </div>
      </CartBottom>
    </StyledCart>
  );
}

const StyledCart = styled.div`
  color: black;
  background: #ebebe6;
  position: fixed;
  top: 6rem;
  right: 0;
  font-weight: 300;
  max-height: calc(100vh - 6rem);
  box-shadow: -2px 2px 10px 1px rgba(11, 11, 11, 0.323);
  padding: 1.5rem 0 3rem 0;
  h3 {
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
  }
  ul {
    max-height: calc(100vh - 30rem);
    overflow-y: scroll;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      padding: 0 3rem;
      min-width: 45rem;
      img {
        width: 8rem;
        height: 8rem;
        object-fit: cover;
      }
      p {
        line-height: initial;
        font-size: 1.2rem;
        width: 12rem;
        span {
          font-weight: 300;
          color: rgba(0, 0, 0, 0.7);
        }
      }
    }
    button {
      width: 1rem;
      font-size: 2rem;
      background: none;
      font-weight: 200;
      :hover {
        color: var(--main-blue);
        background: none;
      }
    }
  }
  .total-price {
    text-align: right;
    margin: 1.5rem 0;
  }
  .checkout-and-view-basket {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      height: 4rem;
      width: 50%;
      background: var(--main-blue);
    }
    .basket {
      margin-right: 0.5rem;
    }
    .checkout {
      margin-left: 0.5rem;
    }
  }
`;

const CartBottom = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0 3rem;
`;

const NoCartItems = styled.div`
  color: black;
  background: #ebebe6;
  position: fixed;
  top: 6rem;
  right: 0;
  box-shadow: -6px 6px 5px 1px rgba(11, 11, 11, 0.323);
  padding: 1rem 6rem;
  font-weight: 300;
`;
