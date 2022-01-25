import { useState } from 'react';
import styled from 'styled-components';
import { PagePadding } from '../components/Page';
import { ProductsPageHeading } from '../components/styles/ProductsPageStyles';

const CollapsableDiv = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  console.log(children);
  return (
    <div style={{ padding: '2rem 0' }}>
      <div className="shipping">
        <label htmlFor="">Shipping Address</label>
        <button type="button" onClick={() => setToggle(!toggle)}>
          <i
            className={toggle ? 'icon-up-open-mini' : ' icon-down-open-mini'}
          ></i>
        </button>
      </div>
      {toggle && <span>{children}</span>}
    </div>
  );
};

export default function checkout() {
  const [address, setAddress] = useState(null);
  return (
    <PagePadding>
      <ProductsPageHeading style={{ justifyContent: 'center' }}>
        <h4>Checkout</h4>
      </ProductsPageHeading>
      <CheckoutContainer>
        <form action="">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div className="line"></div>
          <CollapsableDiv title="Shipping Address">
            <div className="shipping-address">
              <div className="address-input-row">
                <label htmlFor="house">House Name / No.: </label>
                <input type="text" name="house" />
              </div>
              <div className="address-input-row">
                <label htmlFor="line-one">Address Line 1:</label>
                <input type="text" name="line-one" />
              </div>
              <div className="address-input-row">
                <label htmlFor="line-two">Address Line 2:</label>
                <input type="text" name="line-two" />
              </div>
              <div className="address-input-row">
                <label htmlFor="city">City:</label>
                <input type="text" name="city" />
              </div>
              <div className="address-input-row">
                <label htmlFor="county">County / Region:</label>
                <input type="text" name="county" />
              </div>
              <div className="address-input-row">
                <label htmlFor="post-code">Postcode:</label>
                <input type="text" name="post-code" />
              </div>
              <div className="btn-container">
                <button>Add +</button>
              </div>
            </div>
          </CollapsableDiv>
        </form>
        <div className="line"></div>
        <div className="payment">
          <p>card no</p>
          <p>sort</p>
          <p>ccv</p>
        </div>
      </CheckoutContainer>
    </PagePadding>
  );
}

const CheckoutContainer = styled.div`
  min-width: 30rem;
  border: 1px solid #c8c8c8;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 6rem auto;
  * {
    line-height: initial;
  }
  label {
    margin-right: 1rem;
  }
  input {
    border-radius: 0.2rem;
    flex: 1;
    display: block;
    line-height: 0;
    outline: none;
    border: 1px solid #e4e4e4;
    font-size: 1rem;
    padding: 0.2rem 0.5rem;
  }
  .shipping {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 2rem;
      height: 2rem;
      line-height: 0;
    }
  }
  .email {
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
    input {
      height: 2rem;
      width: 100%;
    }
  }
  .address-input-row {
    display: flex;
    margin-bottom: 0.5rem;
    label {
      flex: 1;
      font-size: 1rem;
      display: block;
    }
  }
  .shipping-address {
    margin-top: 1rem;
  }
  .btn-container {
    display: flex;
    justify-content: right;
    button {
      font-size: 1rem;
      width: 7rem;
      height: 2rem;
    }
  }
  .payment {
    margin-top: 2rem;
    font-size: 1rem;
  }
  .line {
    border-bottom: 1px solid #c8c8c8;
    margin: 0 -1rem;
  }
`;
