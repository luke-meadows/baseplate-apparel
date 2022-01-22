import { useState } from 'react';
import styled from 'styled-components';
import { PagePadding } from '../components/Page';

const CollapsableDiv = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  console.log(children);
  return (
    <>
      {children[0]}
      <div onClick={() => setToggle(!toggle)}>header</div>
      {toggle && <div>collapsable</div>}
    </>
  );
};

export default function checkout() {
  const [address, setAddress] = useState(null);
  return (
    <PagePadding>
      <CollapsableDiv>
        <h1>Email</h1>
        <input type="text" name="" id="" />
      </CollapsableDiv>
      <CheckoutContainer>
        <form action="">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>

          <div className="shipping">
            <label htmlFor="">Address</label>
            <div>{address && <p>saved address</p>}</div>
            <button>+</button>
          </div>
        </form>
      </CheckoutContainer>
    </PagePadding>
  );
}

const CheckoutContainer = styled.div`
  max-width: 30rem;
  border: 1px solid blue;
  .shipping {
    display: flex;
    justify-content: space-between;
  }
`;
