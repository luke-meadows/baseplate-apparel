import { ProductThumbnail } from './ProductThumbnail';
import { ProductsContainer, ProductsHeading } from './styles/HomepageStyles';

export default function HomepageProducts({ products, heading }) {
  return (
    <>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsContainer>
        {products.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </>
  );
}
