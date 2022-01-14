import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProductsPage = styled(motion.div)`
  margin: 6rem auto 0rem auto;
  padding: var(--medium-screen-padding);
  max-width: var(--max-width);
  .slash {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 200;
    font-size: 3rem;
  }
`;
export const ProductsPageHeading = styled.div`
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
