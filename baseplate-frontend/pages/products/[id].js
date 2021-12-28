import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import { ProductsPage } from '../../components/styles/ProductsPageStyles';
import generateQuery from '../../lib/generateQuery';

export default function Products({ query }) {
  const [queryVariables, setQueryVariables] = useState({ ...query });

  useEffect(() => {
    setQueryVariables({ ...query });
  }, [query]);

  const PRODUCTS_PAGE_QUERY = gql`
    ${generateQuery(queryVariables)}
  `;
  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY);

  if (loading) return <div>Loading...</div>;

  return (
    <ProductsPage>
      <h4>{query.id}</h4>
      <ProductsContainer>
        {data.allProducts.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </ProductsPage>
  );
}
