import { useContext, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Ctx } from '../../lib/CtxProvider';
import { useCart } from '../../lib/useCart';
import { PagePadding } from '../../components/Page';
import { ProductsPageHeading } from '../../components/styles/ProductsPageStyles';

export default function checkout() {
  const { cartItems, setCartItems } = useContext(Ctx);
  const { removeCartItem, cartTotal } = useCart();
  const totalCost = cartTotal(cartItems);

  useEffect(() => {
    // retrieves cart items from local storage if they are there
    const cartItemsInLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (cartItemsInLocalStorage && !cartItems) {
      // Only runs on page reload if cart items exist in local storage
      setCartItems(cartItemsInLocalStorage);
    }
  }, []);

  if (!cartItems)
    return (
      <PagePadding>
        <ProductsPageHeading>
          <h4 style={{ textAlign: 'center', width: '100%' }}>
            No Items in Basket
          </h4>
        </ProductsPageHeading>
      </PagePadding>
    );
  return (
    <PagePadding>
      <StyledTable>
        <ProductsPageHeading>
          <h4>Basket</h4>
        </ProductsPageHeading>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="title">Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, i) => {
              const { product } = item;
              return (
                <tr
                  className={i === 0 ? 'padding' : ''}
                  key={product.id + item.size}
                >
                  <td className="image">
                    <a href={`/product/${product.id}`}>
                      <div>
                        <img
                          src={product.photo.image.publicUrlTransformed}
                          alt={product.name}
                        ></img>
                      </div>
                    </a>
                  </td>
                  <td>
                    <h5 className="title">
                      <Link href={`/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </h5>
                  </td>
                  <td>{item.size}</td>
                  <td>x{item.quantity}</td>
                  <td>
                    <span>£{product.price / 100}.00</span>
                  </td>
                  <td>
                    <button
                      data-size={item.size}
                      data-id={product.id}
                      type="button"
                      onClick={removeCartItem}
                      className="remove-btn"
                    >
                      &#215;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <TableFooter>
          <p>Total: £{totalCost / 100}.00</p>
          <button type="button" className="checkout-btn">
            <Link href="/checkout">Checkout</Link>
          </button>
        </TableFooter>
      </StyledTable>
    </PagePadding>
  );
}
const StyledTable = styled.div`
  font-weight: 300;
  width: 100%;
  max-width: 1500px;
  margin: auto;
  table {
    margin: auto;
    width: 100%;
    border-collapse: collapse;
    font-size: 1.4rem;
  }
  thead {
    border-bottom: 1px solid #c8c8c8;
  }
  th {
    font-weight: 200;
    text-transform: uppercase;
    font-family: 'Poppins';
    text-align: center;
    padding: 1rem;
  }
  td {
    text-align: center;
    padding-top: 1.5rem;
  }
  .padding {
    td {
      padding-top: 6rem;
    }
  }
  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    margin: 0;
  }
  tr {
    /* border-top: 5rem solid rgba(0, 0, 0, 0); */
  }
  a {
    line-height: 0;
    &:hover {
      color: var(--main-blue);
    }
  }
  h4 {
    text-align: center;
    width: 100%;
  }
  h5 {
    font-weight: 300;
    font-size: 1.4rem;
  }
  .remove-btn {
    width: 1rem;
    font-size: 2rem;
    background: none;
    font-weight: 200;
    :hover {
      color: var(--main-blue);
      background: none;
    }
  }

  .image,
  .title {
    text-align: left;
  }
`;

const TableFooter = styled.div`
  line-height: initial;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 6rem;
  padding-top: 6rem;
  border-top: 1px solid #c8c8c8;
  button {
    height: 4rem;
    width: 20rem;
    background: var(--main-blue);
    &:hover {
      color: rgba(0, 0, 0, 0.8);
    }
  }
  a:hover {
    color: rgba(0, 0, 0, 0.8);
  }
  p {
    font-size: 2rem;
    margin-right: 3rem;
  }
`;
