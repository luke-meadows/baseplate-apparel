import styled from 'styled-components';

export const ProductPage = styled.div``;
export const ProductMain = styled.div`
  margin: 6rem auto 0 auto;
  padding: 6rem 22rem;
  display: flex;
  max-width: 1500px;
  * {
    line-height: initial;
    margin: 0;
  }
`;
export const ProductPageHeading = styled.h4`
  margin-bottom: 2rem;
`;

export const ProductPageLeft = styled.div`
  /* width: 40rem; */
  margin-right: 6rem;
`;
export const ProductPageRight = styled.div`
  img {
    width: 40rem;
    object-fit: cover;
  }
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
export const AddToCartForm = styled.form`
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
  font-family: Poppins;
`;

export const Dropdown = styled.select`
  position: relative;
  font-size: 1.2rem;
  display: block;
  margin: 1rem 0;
  height: 4rem;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  background: #c8c8c8;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  color: rgba(0, 0, 0, 0.8);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* Remove default arrow */
  &:hover,
  &:focus {
    background-color: #02e1f5;
    cursor: pointer;
  }
  span {
    left: 10px;
    top: 5px;
  }
`;

export const ProductLowerSection = styled.div`
  margin: 0 6rem 6rem 6rem;
  @media (min-width: 1600px) {
    margin: 0 12rem 6rem 12rem;
  }
`;
