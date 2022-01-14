import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProductsHeading = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  max-width: 1650px;
`;
export const ProductsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  max-width: 1650px;
  margin: auto;
  margin-top: 0.5rem;
`;
export const HomepageProductsContainer = styled.div`
  padding: var(--medium-screen-padding);
  max-width: 1650px;
  margin: auto;
`;
