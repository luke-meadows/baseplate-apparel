import styled from 'styled-components';

export const ProductsHeading = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  margin-bottom: 6rem;
`;
