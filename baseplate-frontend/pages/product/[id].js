import { gql, useQuery } from '@apollo/client';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import {
  ProductsContainer,
  ProductsHeading,
} from '../../components/styles/HomepageStyles';
import {
  Buttons,
  Description,
  ProductColor,
  ProductPage,
  ProductHeading,
  ProductPageLeft,
  ProductPageRight,
  ProductPrice,
} from '../../components/styles/ProductPageStyles';

const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      color
      price
      sizes
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Product({ query }) {
  const { data, error, loading } = useQuery(PRODUCT_QUERY, {
    variables: { id: query.id },
  });
  const product = data?.Product;
  if (loading) return <p>Loading....</p>;
  return (
    <ProductPage>
      <ProductPageLeft>
        <ProductHeading>{product.name}</ProductHeading>
        <ProductPrice>£75.00</ProductPrice>
        <ProductColor>Green, Blue</ProductColor>
        <Buttons>
          <button disabled>Pick a Size</button>
          <button>Size</button>
        </Buttons>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          corrupti laborum blanditiis labore sequi pariatur, cumque itaque
          dolorem aliquam error nihil eius dolores? Provident corporis
          perspiciatis sunt, pariatur explicabo suscipit officiis animi
          architecto fugit tempora illo, qui ullam quae accusamus nihil eligendi
          soluta, ipsum et velit possimus non repellat! Facere velit quisquam
          consequatur error neque. Commodi maiores, inventore atque
          exercitationem velit officiis aperiam! Corrupti dolore consequatur
          quidem nulla maxime non qui repudiandae. Dicta asperiores qui
          molestiae voluptatem. Voluptatum, vitae earum.
        </Description>
      </ProductPageLeft>
      <ProductPageRight>
        <ProductThumbnail product={data.Product} />
      </ProductPageRight>
    </ProductPage>
  );
}
