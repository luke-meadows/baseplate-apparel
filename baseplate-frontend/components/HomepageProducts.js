import { ProductThumbnail } from './ProductThumbnail';
import { ProductsContainer, ProductsHeading } from './styles/HomepageStyles';

export default function HomepageProducts({ products, heading }) {
  console.log({ products });
  return (
    <>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsContainer>
        {products.map((product, i) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </>
  );
}
