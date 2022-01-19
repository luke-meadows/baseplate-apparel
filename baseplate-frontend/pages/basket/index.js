import { useContext } from 'react/cjs/react.development';
import { CartCtx } from '../../lib/CartCtxProvider';
import Link from 'next/link';
import styled from 'styled-components';
import { ProductsPageHeading } from '../../components/styles/ProductsPageStyles';
import { PagePadding } from '../../components/Page';

export default function checkout() {
  const { cartItems, removeCartItem } = useContext(CartCtx);
  if (!cartItems) return <p style={{ marginTop: '12rem' }}>no items</p>;
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
                      data-size={item.id}
                      type="button"
                      onClick={removeCartItem}
                    >
                      &#215;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </StyledTable>
    </PagePadding>
  );
}
const StyledTable = styled.div`
  font-weight: 300;
  table {
    max-width: 1500px;
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
  }
  h4 {
    text-align: center;
    width: 100%;
  }
  h5 {
    font-weight: 300;
    font-size: 1.4rem;
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
  .image,
  .title {
    text-align: left;
  }
`;
