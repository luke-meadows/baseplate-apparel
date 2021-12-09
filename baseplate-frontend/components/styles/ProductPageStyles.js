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
  font-size: 1.2rem;
  color: rgb(60, 60, 60);
  padding: 1rem 0;
`;
export const Buttons = styled.div`
  font-size: 1.2rem;
  color: rgb(60, 60, 60);
  padding: 1rem 0;
  div {
    border: 1px solid black;
    margin: 1rem 0;
    height: 5rem;
  }
`;
export const Description = styled.div``;
