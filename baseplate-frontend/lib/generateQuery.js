import { gql } from '@apollo/client';
// brand: 'all', size: 'all', color: 'all', category: 'all'
export default function genrateQuery(collection, variables) {
  const queries = {
    brands: ` allProducts {
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
      `,
  };
  return gql`query INITIAL_STATE_QUERY ${queries[collection]}`;
}
