import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import generateQuery from '../../lib/generateQuery';

export default function Products({ query }) {
  const [queryVariables, setQueryVariables] = useState({
    collection: 'clothes',
    brand: '',
    productType: '',
    color: 'black',
    // size: 'M',
  });

  const PRODUCTS_PAGE_QUERY = gql`
    ${generateQuery(queryVariables)}
  `;
  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY);
  console.log({ data, error, loading });
  return <div>products {query.id}</div>;
}
