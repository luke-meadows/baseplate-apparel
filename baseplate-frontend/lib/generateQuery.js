import { useState } from 'react';

export default function generateQuery(query) {
  const [queryVariables, setQueryVariables] = useState({
    collection: query.id,
    brand: query.brand || '',
    category: query.category || '',
    color: query.color || '',
  });
  const products = {
    brands: ``,
    shoes: `productCategory:shoes,`,
    clothes: `productCategory:clothes,`,
    accessories: `productCategory:accessories,`,
  };
  const brandQuery = queryVariables.brand
    ? `brand: {brand_i:"${queryVariables.brand}"},`
    : 'brand: {brand_not_contains:"~"},';

  const categoryQuery = queryVariables.category
    ? `productType: {productType:"${queryVariables.category}"}, `
    : '';
  const colorQuery = queryVariables.color
    ? `color_contains_i: "${queryVariables.color}"`
    : '';

  const querySlug = `${
    products[queryVariables.collection]
  } ${brandQuery} ${categoryQuery} ${colorQuery}`;
  console.log({ querySlug });

  return `query DISPLAY_PRODUCTS_QUERY {
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
}
