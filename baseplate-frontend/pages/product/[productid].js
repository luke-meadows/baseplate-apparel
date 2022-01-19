import { gql, useQuery } from '@apollo/client';
import Loading from '../../components/Loading';
import { CartCtx } from '../../lib/CartCtxProvider';
import Image from 'next/image';
import { DeliveryBanner } from '../../components/DeliveryBanner';
import {
  AddToCartForm,
  Description,
  ProductColor,
  ProductPage,
  ProductHeading,
  ProductPageLeft,
  ProductPageRight,
  ProductPrice,
  Dropdown,
  ProductMain,
  ProductLowerSection,
} from '../../components/styles/ProductPageStyles';
import { useContext, useState } from 'react';
import RecentlyViewed from '../../components/RecentlyViewed';

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
    variables: { id: query.productid },
  });
  const product = data?.Product;
  const [sizeDisabled, changeSizeDisabled] = useState(true);

  function handleSizeSelected(e) {
    const { value } = e.target;
    if (value === 'default') {
      changeSizeDisabled(true);
      return;
    }
    changeSizeDisabled(false);
    e.target.blur();
  }
  const { addToCart } = useContext(CartCtx);
  if (loading) return <Loading />;
  const sizes = Object.keys(JSON.parse(data.Product.sizes));
  return (
    <ProductPage>
      <ProductMain>
        <ProductPageLeft>
          <ProductHeading>{product.name}</ProductHeading>
          <ProductPrice>{`£${product.price / 100}.00`}</ProductPrice>
          <ProductColor>{product.color}</ProductColor>
          <AddToCartForm
            data-product={JSON.stringify(product)}
            onSubmit={addToCart}
          >
            <Dropdown
              name="size"
              onChange={handleSizeSelected}
              defaultValue={'default'}
            >
              <option value="default" disabled>
                Size
              </option>
              {sizes.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </Dropdown>
            <button type="submit" disabled={sizeDisabled}>
              {sizeDisabled ? 'Pick a Size' : 'Add to Cart'}
            </button>
          </AddToCartForm>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            corrupti laborum blanditiis labore sequi pariatur, cumque itaque
            dolorem aliquam error nihil eius dolores? Provident corporis
            perspiciatis sunt, pariatur explicabo suscipit officiis animi
            architecto fugit tempora illo, qui ullam quae accusamus nihil
            eligendi soluta, ipsum et velit possimus non repellat! Facere velit
            quisquam consequatur error neque. Commodi maiores, inventore atque
            exercitationem velit officiis aperiam! Corrupti dolore consequatur
            quidem nulla maxime non qui repudiandae. Dicta asperiores qui
            molestiae voluptatem. Voluptatum, vitae earum.
          </Description>
        </ProductPageLeft>

        <ProductPageRight>
          <img src={data.Product.photo.image.publicUrlTransformed} />
        </ProductPageRight>
      </ProductMain>
      <ProductLowerSection>
        <DeliveryBanner />
        <RecentlyViewed data={data} />
      </ProductLowerSection>
    </ProductPage>
  );
}
