import { gql, useQuery } from '@apollo/client';
import generateQuery from '../../lib/generateQuery';

export default function Products({ query }) {
  const query2 = generateQuery();
  const query3 = gql`
    ${query2}
  `;
  const { data, error, loading } = useQuery(query3);
  console.log({ data, error, loading });
  return <div>products {query.id}</div>;
}
