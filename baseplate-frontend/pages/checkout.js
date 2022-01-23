import { useState } from 'react';
import styled from 'styled-components';
import { PagePadding } from '../components/Page';

const CollapsableDiv = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  console.log(children);
  return (
    <>
      <div className="shipping">
        <label htmlFor="">Shipping Address</label>
        <button type="button" onClick={() => setToggle(!toggle)}>
          <i
            className={toggle ? 'icon-up-open-mini' : ' icon-down-open-mini'}
          ></i>
        </button>
      </div>
      {toggle && <span>{children}</span>}
    </>
  );
};

export default function checkout() {
  const [address, setAddress] = useState(null);
  return (
    <PagePadding>
      <CheckoutContainer>
        <form action="">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <CollapsableDiv title="Shipping Address">
            <p>shipping form</p>
          </CollapsableDiv>
        </form>
      </CheckoutContainer>
    </PagePadding>
  );
}

const CheckoutContainer = styled.div`
  max-width: 30rem;
  border: 1px solid #c8c8c8;
  border-radius: 0.5rem;
  padding: 1rem;
  * {
    line-height: initial;
  }
  label {
    margin-right: 1rem;
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
    input {
      height: 2rem;
      width: 100%;
    }
  }
`;
