import { perPage } from '../config';
export default function generateQuery(variables, currentPage = 1) {
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

  return `query DISPLAY_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(where: { ${querySlug} }, first: $first, skip: $skip) {
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
    productCount:_allProductsMeta(where:{${querySlug}}){
      count
    }
  }
  `;
}
