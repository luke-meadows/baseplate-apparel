import { gql } from '@apollo/client';
// brand: 'all', size: 'all', color: 'all', category: 'all'
export default function genrateQuery() {
  const variables = {
    collection: allBrands,
    color: 'black',
    productType: 'shoes',
    size: 'M',
    brand: 'Adidas',
  };
  const products = {
    allBrands: ``,
    shoes: `productCategory_i:"shoes",`,
    clothes: `productCategory_i:"clothes"`,
    accessories: `productCategory_i:"accessories"`,
  };
  const brandQuery = variables[brand]
    ? `brand: {brand:"${variables[brand]}",`
    : '';
  const typeQuery = variables[productType]
    ? `productType: {productType:"${variables[productType]}",`
    : '';
  // const sizeQuery = variables[brand] ? `brand: {brand:"${variables[brand]}",` : '';
  const query = ` query INITIAL_STATE_QUERY {
    allProducts {
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
}
