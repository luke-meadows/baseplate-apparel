import { gql } from '@apollo/client';

const slug =
  'http://localhost:3000/products/search?brand=nike%20sb&color=black';

const flatspot =
  'https://www.flatspot.com/collections/clothing/brand_brixton+colour_brown+category_bucket-hats';

const queries = {
  brands: {
    query: gql``,
    params: { brand: 'all', size: 'all', color: 'all', category: 'all' },
  },
  shoes: { query: gql``, params: { brand: 'all', size: 'all', color: 'all' } },
  clothing: {
    query: gql``,
    params: { brand: 'all', size: 'all', color: 'all' },
  },
  accessories: {
    query: gql``,
    params: { brand: 'all', size: 'all', color: 'all' },
  },
};

export default function Products({ query }) {
  return <div>products {query.id}</div>;
}
