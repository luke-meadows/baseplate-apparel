import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomepageProductsContainer = styled.div`
  margin: auto;
  margin-top: 6rem;
  max-width: var(--max-width);
`;
export const ProductsHeading = styled.p`
  font-family: 'Poppins';
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1rem;
`;
export const ProductsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  margin: auto;
  margin-top: 0.5rem;
`;
