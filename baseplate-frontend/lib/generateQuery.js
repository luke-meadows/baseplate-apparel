import { gql } from '@apollo/client';

export default function generateQuery() {
  const variables = {
    collection: 'allBrands',
    brand: 'Nike SB',
    productType: 'T-Shirt',
    // color: 'black',
    // size: 'M',
  };

  const products = {
    allBrands: ``,
    shoes: `productCategory_i:"shoes",`,
    clothes: `productCategory_i:"clothes",`,
    accessories: `productCategory_i:"accessories",`,
  };
  const brandQuery = variables.brand
    ? `brand: {brand_i:"${variables.brand}"},`
    : 'brand: {brand_not_contains:"~"},';

  const typeQuery = variables.productType
    ? `productType: {productType:"${variables.productType}"}`
    : '';

  const querySlug = `${
    products[variables.collection]
  } ${brandQuery} ${typeQuery}`;
  console.log(querySlug);

  const query = `query DISPLAY_PRODUCTS_QUERY {
    allProducts(where: { ${querySlug} }) {
      id
      name
      new
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
  console.log(query);
  return query;
}
