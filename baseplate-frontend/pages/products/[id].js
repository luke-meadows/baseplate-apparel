import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import generateQuery from '../../lib/generateQuery';

export default function Products({ query }) {
  const [queryVariables, setQueryVariables] = useState({
    collection: query.id,
    brand: '',
    productType: '',
    color: '',
    // size: 'M',
  });

  const PRODUCTS_PAGE_QUERY = gql`
    ${generateQuery(queryVariables)}
  `;
  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY);
  console.log({ data, error, loading });
  if (loading) return <div>Loading...</div>;
  return (
    <ProductsContainer>
      {data.allProducts.map((product) => (
        <ProductThumbnail product={product} key={product.id} />
      ))}
    </ProductsContainer>
  );
}
