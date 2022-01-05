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
    products[variables.id]
  } ${brandQuery} ${categoryQuery} ${colorQuery}`;

  return `query DISPLAY_PRODUCTS_QUERY {
    allProducts(where: { ${querySlug} }) {
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
}
