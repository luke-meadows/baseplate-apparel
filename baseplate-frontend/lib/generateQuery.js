export default function generateQuery(variables) {
  const products = {
    brands: ``,
    shoes: `productCategory:shoes,`,
    clothes: `productCategory:clothes,`,
    accessories: `productCategory:accessories,`,
  };
  const brandQuery = variables.brand
    ? `brand: {brand_i:"${variables.brand}"},`
    : 'brand: {brand_not_contains:"~"},';

  const categoryQuery = variables.category
    ? `productType: {productType:"${variables.category}"}, `
    : '';
  const colorQuery = variables.color
    ? `color_contains_i: "${variables.color}"`
    : '';

  const querySlug = `${
    products[variables.collection]
  } ${brandQuery} ${categoryQuery} ${colorQuery}`;
  console.log({ querySlug });

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
  return query;
}
