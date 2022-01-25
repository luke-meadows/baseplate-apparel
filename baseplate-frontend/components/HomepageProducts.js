import { ProductThumbnail } from './ProductThumbnail';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function HomepageProducts({ products, heading }) {
  return (
    <HomepageProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsContainer>
        {products?.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </HomepageProductsContainer>
  );
}

export const HomepageProductsContainer = styled.div`
  margin: auto;
`;
export const ProductsHeading = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
`;
export const ProductsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  margin: auto;
  margin-top: 0.5rem;
`;
