import { ProductThumbnail } from './ProductThumbnail';
import {
  HomepageProductsContainer,
  ProductsContainer,
  ProductsHeading,
} from './styles/HomepageStyles';

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
