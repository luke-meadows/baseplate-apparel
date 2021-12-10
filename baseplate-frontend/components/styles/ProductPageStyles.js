import styled from 'styled-components';

export const ProductPage = styled.div`
  padding-top: 3rem;
  width: 75vw;
  max-width: 1050px;
  display: flex;
  margin: auto;
  * {
    line-height: initial;
    margin: 0;
  }
`;

export const ProductPageLeft = styled.div`
  width: 40%;
  margin-right: 2rem;
`;
export const ProductPageRight = styled.div`
  width: 60%;
`;

export const ProductHeading = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
`;
export const ProductPrice = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
`;
export const ProductColor = styled.p`
  font-size: 1.3rem;
  color: rgba(60, 60, 60, 0.8);
  padding: 1rem 0;
`;
export const Buttons = styled.div`
  padding: 1rem 0;
  button {
    font-size: 1.2rem;
    display: block;
    margin: 1rem 0;
    height: 4rem;
    width: 100%;
    background: var(--main-blue);
  }
  button:disabled {
    background: #c8c8c8;
  }
`;
export const Description = styled.div`
  font-size: 1.2rem;
`;
