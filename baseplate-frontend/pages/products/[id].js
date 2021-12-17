import { gql, useQuery } from '@apollo/client';
import generateQuery from '../../lib/generateQuery';
const PRODUCTS_PAGE_QUERY = gql`
  ${generateQuery()}
`;

export default function Products({ query }) {
  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY);
  console.log({ data, error, loading });
  return <div>products {query.id}</div>;
}
