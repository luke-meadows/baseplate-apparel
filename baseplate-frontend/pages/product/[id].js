import { gql, useQuery } from '@apollo/client';

const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
    }
  }
`;

export default function Product({ query }) {
  const { data, error, loading } = useQuery(PRODUCT_QUERY, {
    variables: { id: query.id },
  });
  if (loading) return <p>Loading....</p>;
  return <p>... {data.Product.name}</p>;
}
