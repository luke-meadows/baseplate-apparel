import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProductsPage = styled(motion.div)`
  margin: 6rem auto 0rem auto;
  max-width: var(--max-width);
  padding: var(--medium-screen-padding);
  .slash {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 200;
    font-size: 3rem;
  }
`;
export const ProductsPageHeading = styled.div`
  margin-top: 4.5rem;
  h4 {
    font-size: 3rem;
    font-weight: 300;
    text-transform: capitalize;
    color: black;
  }
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomPagination = styled.div`
  margin: 3rem auto;
  display: flex;
  justify-content: center;
`;

export const ProductsCount = styled.p`
  color: #515151;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  margin-top: 7.5rem;
`;
