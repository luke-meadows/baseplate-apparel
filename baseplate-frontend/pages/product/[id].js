import { gql, useQuery } from '@apollo/client';
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
  Dropdown,
} from '../../components/styles/ProductPageStyles';
import { useState } from 'react';

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
  const [size, changeSize] = useState(true);

  function handleSizeSelected(e) {
    const { value } = e.target;
    if (value === 'default') {
      changeSize(null);
      return;
    }
    changeSize(false);
    e.target.blur();
  }
  if (loading) return <Loading />;
  return (
    <ProductPage>
      <ProductPageLeft>
        <ProductHeading>{product.name}</ProductHeading>
        <ProductPrice>{`£${product.price / 100}.00`}</ProductPrice>
        <ProductColor>{product.color}</ProductColor>
        <Buttons>
          <Dropdown onChange={handleSizeSelected} defaultValue={'default'}>
            <option value="default" disabled>
              Size
            </option>
            {Object.keys(JSON.parse(data.Product.sizes)).map((size) => (
              <option value={size} key={size}>
                {size}
              </option>
            ))}
          </Dropdown>
          <button disabled={size}>Pick a Size</button>
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
          placeholder="blur"
          blurDataURL={data.Product.photo.image.publicUrlTransformed}
          layout="fill"
          src={data.Product.photo.image.publicUrlTransformed}
        />
      </ProductPageRight>
    </ProductPage>
  );
}
