import { gql, useQuery } from '@apollo/client';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import Loading from '../../components/Loading';
import SizeDropdown from '../../components/SizeDropdown';
import Image from 'next/image';
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
  if (loading) return <Loading />;
  return (
    <ProductPage>
      <ProductPageLeft>
        <ProductHeading>{product.name}</ProductHeading>
        <ProductPrice>{`£${product.price / 100}.00`}</ProductPrice>
        <ProductColor>{product.color}</ProductColor>
        <Buttons>
          <SizeDropdown sizes={Object.keys(JSON.parse(data.Product.sizes))} />
          <button disabled>Pick a Size</button>
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
        <Image
          layout="fill"
          src={data.Product.photo.image.publicUrlTransformed}
        />
      </ProductPageRight>
    </ProductPage>
  );
}
